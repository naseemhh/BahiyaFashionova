const Stripe = require("stripe");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY is missing in Netlify environment variables.");
    }

    const stripe = Stripe(secretKey);
    const { order } = JSON.parse(event.body || "{}");

    if (!order || !order.items || !order.items.length) {
      throw new Error("Order is missing or has no items.");
    }

    const siteUrl = process.env.URL || "https://www.bahiyafashionova.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: order.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name || "Dress",
          },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: Number(item.qty || 1),
      })),
      success_url: `${siteUrl}/stripe-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/stripe-cancel.html`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("STRIPE CHECKOUT ERROR:", err.message);

    return {
      statusCode: 500,
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
