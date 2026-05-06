const Stripe = require("stripe");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY is missing in Netlify environment variables.");
    }

    if (!secretKey.startsWith("sk_")) {
      throw new Error("STRIPE_SECRET_KEY must start with sk_test_ or sk_live_.");
    }

    const stripe = Stripe(secretKey);

    const body = JSON.parse(event.body || "{}");
    const order = body.order;

    if (!order) {
      throw new Error("Order data is missing.");
    }

    if (!order.items || !Array.isArray(order.items) || order.items.length === 0) {
      throw new Error("Order has no items.");
    }

    const siteUrl =
      process.env.SITE_URL ||
      process.env.URL ||
      "https://www.bahiyafashionova.com";

    const lineItems = order.items.map((item) => {
      const price = Number(item.price);
      const qty = Number(item.qty || 1);

      if (!price || price <= 0) {
        throw new Error("Item price is missing or invalid.");
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name || "Dress",
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: qty,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${siteUrl}/stripe-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/stripe-cancel.html`,
      metadata: {
        orderId: order.id || "",
      },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("STRIPE CHECKOUT ERROR:", err.message);

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: err.message,
        keyExists: !!process.env.STRIPE_SECRET_KEY,
        keyStartsWith: process.env.STRIPE_SECRET_KEY
          ? process.env.STRIPE_SECRET_KEY.substring(0, 8)
          : "missing",
      }),
    };
  }
};
