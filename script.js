
const PLACEHOLDER="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80";
const heroDefaults=[
 "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=80"
];
const defaultSite={siteName:"Palestinian Bridal",heroSmall:"Elegant • Traditional • Custom Fit",heroTitle:"Palestinian & Arabic Wedding Dresses",heroText:"Simple, beautiful dresses for weddings, henna nights, parties, and special occasions.",heroButton:"Shop Dresses",heroImage:heroDefaults[0],heroSliderEnabled:false,heroSliderImages:heroDefaults.join("\n"),featuredSmall:"Featured",featuredTitle:"Popular Dresses",featuredText:"Browse our collection and order with custom measurements.",bannerTitle:"Simple Custom Sizing",bannerText:"Customers can use the same measurements for all dresses or different measurements for each dress.",bannerButton:"View Dresses",primaryColor:"#7b1e32",darkColor:"#551222",goldColor:"#d6aa55",backgroundColor:"#fff8f2",phone:"000-000-0000",businessAddress:""};
const defaultProducts=[
{id:"dress1",name:"Royal Red Palestinian Dress",beforePrice:399,price:299,description:"Elegant red Palestinian-inspired embroidered dress.",image:"https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80",images:["https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"]},
{id:"dress2",name:"Luxury White Bridal Dress",beforePrice:499,price:399,description:"Soft white bridal style with a clean elegant look.",image:"https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",images:["https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"]},
{id:"dress3",name:"Traditional Gold Embroidery Dress",beforePrice:449,price:349,description:"Traditional look with warm gold-inspired details.",image:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",images:["https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80"]},
{id:"dress4",name:"Classic Palestinian Thobe Dress",beforePrice:329,price:249,description:"Simple traditional style for weddings and events.",image:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",images:["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"]}
];
const defaultSettings={whatsapp:"15551234567",zelleName:"Your Store Name",zelleContact:"your@email.com",taxPercent:6,allowPayLater:false,googleApiKey:"",enableZelle:true,enablePayPal:false,paypalLink:"",enableCreditCard:true,creditCardLink:"",stripePublishableKey:"pk_live_51TS87s4lRlvhS8CBI20t0JkyJ5rzEzMRkgidCtxpeFixOm9cmmc0lqQPP9db1ofCYQfhxioRsI21s5m3jfQVVgp800M11cHacw",enableCash:false};
const defaultDelivery={storeZip:"19006",mode:"distance",flatRate:25,freeDelivery:false,tier1:20,tier2:40,tier3:60,tier4:100};
const defaultDiscounts=[{code:"FREEDEL",type:"freeDelivery",amount:0,active:true},{code:"SAVE10",type:"percent",amount:10,active:true}];
const defaultUsers=[
 {username:"admin",password:"password",role:"Owner",permissions:["all"]},
 {username:"manager",password:"password2",role:"Secondary Admin",permissions:["orders","products","customers"]}
];
const defaultPages=[
 {id:"about",title:"About Us",navLabel:"About",enabled:true,showInHeader:true,showOnHome:true,sections:[
   {type:"banner",title:"About Our Bridal Shop",text:"Palestinian and Arabic bridal dresses with elegant traditional style.",image:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"},
   {type:"text",title:"Our Story",text:"We specialize in beautiful Palestinian and Arabic bridal dresses, thobes, henna night dresses, and custom occasion wear."},
   {type:"contact",title:"Need Help Choosing?",text:"Message us and we will help you choose the right dress and measurements.",buttonText:"Contact Us",buttonLink:"contact.html"}
 ]},
 {id:"measurements",title:"Measurements Guide",navLabel:"Measurements",enabled:true,showInHeader:true,showOnHome:true,sections:[
   {type:"text",title:"How To Measure",text:"Use this guide to prepare measurements: height, chest/bust, shoulder width, waist, and sleeve length. For best results, measure carefully and contact us if you need help."}
 ]},
 {id:"shipping",title:"Shipping & Delivery",navLabel:"Delivery",enabled:true,showInHeader:false,showOnHome:true,sections:[
   {type:"text",title:"Delivery Information",text:"Delivery charges are calculated at checkout. We offer local delivery, shipping, and pickup options depending on your location."}
 ]},
 {id:"returns",title:"Return Policy",navLabel:"Returns",enabled:true,showInHeader:false,showOnHome:true,sections:[
   {type:"text",title:"Return Policy",text:"Because many dresses may be custom sized, returns may be limited. Please contact us before ordering if you have questions about size, color, or customization."}
 ]},
 {id:"custom",title:"Custom Orders",navLabel:"Custom Orders",enabled:false,showInHeader:false,showOnHome:false,sections:[
   {type:"text",title:"Custom Orders",text:"Custom embroidery and special dress requests may be available. Contact us for details."}
 ]},
 {id:"faq",title:"FAQ",navLabel:"FAQ",enabled:false,showInHeader:false,showOnHome:false,sections:[
   {type:"text",title:"Frequently Asked Questions",text:"Frequently asked questions can go here. You can enable this page later from the admin panel."}
 ]}
];
function getData(key,def){let x=localStorage.getItem(key);if(!x){localStorage.setItem(key,JSON.stringify(def));return def;}return JSON.parse(x)}
function setData(key,val){localStorage.setItem(key,JSON.stringify(val))}
function getSite(){return {...defaultSite,...getData("site",defaultSite)}}
function saveSite(x){setData("site",x)}
function getProducts(){return getData("products",defaultProducts).map(p=>({...p,category:p.category||"Bridal",tags:p.tags||""}))}
function saveProducts(x){setData("products",x)}
function getSettings(){return {...defaultSettings,...getData("settings",defaultSettings)}}
function saveSettingsData(x){setData("settings",x)}
function getDelivery(){return {...defaultDelivery,...getData("delivery",defaultDelivery)}}
function saveDeliveryData(x){setData("delivery",x)}
function getDiscounts(){return getData("discounts",defaultDiscounts)}
function saveDiscounts(x){setData("discounts",x)}
function getCustomers(){return getData("customers",[])}
function saveCustomers(x){setData("customers",x)}
function getCustomerAccounts(){return getData("customerAccounts",[])}
function saveCustomerAccounts(x){setData("customerAccounts",x)}
function currentCustomer(){return localStorage.getItem("activeCustomerEmail")||""}
function getUsers(){
 const users=getData("adminUsers",defaultUsers).map(u=>({...u,permissions:u.permissions||[]}));
 let changed=false;
 users.forEach(u=>{
   if(u.username==="admin" && !(u.permissions||[]).includes("all")){u.permissions=["all"];changed=true;}
   if(u.username==="manager" && (!u.permissions || !u.permissions.length)){u.permissions=["orders","products","customers"];changed=true;}
 });
 if(changed)saveUsers(users);
 return users;
}
function saveUsers(x){setData("adminUsers",x)}
function getPages(){return getData("pages",defaultPages)}
function savePages(x){setData("pages",x)}
function getOrders(){return getData("orders",[])}
function saveOrders(x){setData("orders",x)}
function money(x){return "$"+Number(x||0).toFixed(2)}
function getCart(){return JSON.parse(localStorage.getItem("cart")||"[]")}
function saveCart(cart){localStorage.setItem("cart",JSON.stringify(cart));updateCartCount()}
function clearCart(){localStorage.removeItem("cart");updateCartCount()}
function applySite(){const s=getSite();document.documentElement.style.setProperty("--red",s.primaryColor);document.documentElement.style.setProperty("--dark-red",s.darkColor);document.documentElement.style.setProperty("--gold",s.goldColor);document.documentElement.style.setProperty("--cream",s.backgroundColor);document.documentElement.style.setProperty("--hero-image",`url('${s.heroImage}')`);document.querySelectorAll(".logo").forEach(e=>e.textContent=s.siteName);document.title=s.siteName}
function updateCartCount(){const c=getCart().reduce((s,i)=>s+Number(i.qty||1),0);document.querySelectorAll("#cartCount").forEach(e=>e.textContent=c)}
function priceHtml(p){const before=Number(p.beforePrice||0),after=Number(p.price||0),show=before>after;return `<div class="price-row">${show?`<span class="before-price">${money(before)}</span>`:""}<span class="price">${money(after)}</span>${show?`<span class="sale-badge">SALE</span>`:""}</div>`}
function card(p){
 const imgs=(p.images&&p.images.length?p.images:[p.image||PLACEHOLDER]);
 const first=imgs[0]||PLACEHOLDER;
 return `<article class="product-card" data-product-id="${p.id}" data-card-index="0">
  <a class="card-image-wrap" href="product.html?id=${p.id}">
    <img class="card-img" src="${first}" onerror="this.src='${PLACEHOLDER}'">
    ${imgs.length>1?`<button class="card-arrow left" type="button" onclick="event.preventDefault();event.stopPropagation();cardPrev('${p.id}')">‹</button><button class="card-arrow right" type="button" onclick="event.preventDefault();event.stopPropagation();cardNext('${p.id}')">›</button><span class="card-photo-count">${imgs.length} photos</span>`:""}
  </a>
  <div class="product-info">
    <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
    <p>${p.description||"Beautiful Palestinian / Arabic dress."}</p>
    <div class="product-bottom">${priceHtml(p)}<a class="btn main-btn full" href="product.html?id=${p.id}">View / Order</a></div>
  </div>
 </article>`;
}

function cardImages(productId){
 const p=getProduct(productId);
 return p && p.images && p.images.length ? p.images : [p?.image || PLACEHOLDER];
}
function updateCardImage(productId, step){
 const card=document.querySelector(`.product-card[data-product-id="${productId}"]`);
 if(!card)return;
 const imgs=cardImages(productId);
 if(!imgs.length)return;
 let idx=Number(card.dataset.cardIndex||0);
 idx=(idx+step+imgs.length)%imgs.length;
 card.dataset.cardIndex=idx;
 const img=card.querySelector(".card-img");
 if(img)img.src=imgs[idx];
}
function cardNext(productId){updateCardImage(productId,1);}
function cardPrev(productId){updateCardImage(productId,-1);}

function heroImageList(){const s=getSite();return (s.heroSliderImages||"").split("\n").map(x=>x.trim()).filter(Boolean)}
let sliderTimer=null, sliderIndex=0;
function setupHeroSlider(){const s=getSite();const hero=document.querySelector(".hero");const slider=document.getElementById("heroSlider");const dots=document.getElementById("sliderDots");if(!hero||!slider||!dots)return;if(sliderTimer)clearInterval(sliderTimer);slider.innerHTML="";dots.innerHTML="";hero.classList.remove("slide-mode");if(!s.heroSliderEnabled)return;const imgs=heroImageList();if(imgs.length<2)return;hero.classList.add("slide-mode");imgs.forEach((src,i)=>{const slide=document.createElement("div");slide.className="hero-slide"+(i===0?" active":"");slide.style.backgroundImage=`url('${src}')`;slider.appendChild(slide);const dot=document.createElement("button");dot.className="slider-dot"+(i===0?" active":"");dot.onclick=()=>showSlide(i);dots.appendChild(dot)});sliderIndex=0;sliderTimer=setInterval(()=>showSlide((sliderIndex+1)%imgs.length),4000)}
function showSlide(i){const slides=document.querySelectorAll(".hero-slide");const dots=document.querySelectorAll(".slider-dot");if(!slides.length)return;slides.forEach(x=>x.classList.remove("active"));dots.forEach(x=>x.classList.remove("active"));slides[i].classList.add("active");dots[i]?.classList.add("active");sliderIndex=i}
function renderHome(){applySite();updateCartCount();renderHeaderPageLinks();const s=getSite();["heroSmall","heroTitle","heroText","heroButton","featuredSmall","featuredTitle","featuredText","bannerTitle","bannerText","bannerButton"].forEach(id=>document.getElementById(id).textContent=s[id]);document.getElementById("featuredGrid").innerHTML=getProducts().slice(0,3).map(card).join("");setupHeroSlider()}
function renderProducts(){applySite();updateCartCount();renderHeaderPageLinks();document.getElementById("productGrid").innerHTML=getProducts().map(card).join("")}
function getProduct(id){return getProducts().find(p=>p.id===id)}
function renderProductDetail(){applySite();updateCartCount();const id=new URLSearchParams(location.search).get("id");const p=getProduct(id);const box=document.getElementById("productDetail");if(!p){box.innerHTML=`<div class="empty"><h2>Dress not found</h2><a class="btn main-btn" href="dresses.html">Back</a></div>`;return}const imgs=p.images&&p.images.length?p.images:[p.image||PLACEHOLDER];box.innerHTML=`<div><img id="mainImage" class="main-image" src="${imgs[0]}" onerror="this.src='${PLACEHOLDER}'"><div class="thumbs">${imgs.map((x,i)=>`<img class="${i===0?"active":""}" src="${x}" onclick="changeImage('${x.replace(/'/g,"\\'")}',this)" onerror="this.src='${PLACEHOLDER}'">`).join("")}</div></div><div class="box"><p class="small-title">Dress Details</p><h1>${p.name}</h1>${priceHtml(p)}<p>${p.description||""}</p><label>Quantity <input id="qty" type="number" min="1" value="1"></label><label>Size Choice<select id="size"><option value="Custom Measurements">Custom Measurements</option><option value="S-1">S-1</option><option value="M-2">M-2</option><option value="L-3">L-3</option><option value="XL-4">XL-4</option><option value="XXL-5">XXL-5</option></select></label><button class="btn main-btn full" onclick="addToCart('${p.id}')">Add to Cart</button><a class="btn light-btn full" href="dresses.html">Back to Dresses</a></div>`}
function changeImage(src,el){document.getElementById("mainImage").src=src;document.querySelectorAll(".thumbs img").forEach(i=>i.classList.remove("active"));el.classList.add("active")}
function addToCart(id){const p=getProduct(id),cart=getCart();cart.push({cartId:String(Date.now()),productId:id,name:p.name,beforePrice:Number(p.beforePrice||0),price:Number(p.price),image:p.image,qty:Math.max(1,Number(document.getElementById("qty").value||1)),size:document.getElementById("size").value});saveCart(cart);location.href="cart.html"}
function renderCart(){applySite();updateCartCount();renderHeaderPageLinks();const cart=getCart(),box=document.getElementById("cartItems"),sum=document.getElementById("cartSummary");if(!cart.length){box.innerHTML=`<div class="empty"><h2>Your cart is empty</h2><a class="btn main-btn" href="dresses.html">Shop Dresses</a></div>`;sum.innerHTML="";return}box.innerHTML=cart.map(i=>`<div class="cart-item"><img src="${i.image||PLACEHOLDER}" onerror="this.src='${PLACEHOLDER}'"><div><h3>${i.name}</h3><p>Size: ${i.size}</p>${priceHtml(i)}</div><div class="cart-actions"><button class="btn light-btn" onclick="qty('${i.cartId}',-1)">-</button><strong>${i.qty}</strong><button class="btn light-btn" onclick="qty('${i.cartId}',1)">+</button><button class="btn danger-btn" onclick="removeItem('${i.cartId}')">Remove</button></div></div>`).join("");const total=cart.reduce((s,i)=>s+i.price*i.qty,0);sum.innerHTML=`<div class="box"><h2>Subtotal: ${money(total)}</h2><a class="btn main-btn" href="checkout.html">Checkout</a></div>`}
function qty(id,amt){let cart=getCart().map(i=>{if(i.cartId===id)i.qty=Math.max(1,Number(i.qty)+amt);return i});saveCart(cart);renderCart()}
function removeItem(id){saveCart(getCart().filter(i=>i.cartId!==id));renderCart()}
function estimateDistanceFrom19006(zip){const z=String(zip||"").replace(/\D/g,"");if(z.length<5)return null;const n=Number(z.slice(0,5));if(n>=18900&&n<=19499)return 25;if(n>=18000&&n<=19999)return 75;if(n>=7000&&n<=8999)return 120;if(n>=10000&&n<=11999)return 180;return 250}
function deliveryPriceByDistance(distance){
 const d=getDelivery();
 if(d.freeDelivery || d.mode==="free")return 0;
 if(d.mode==="flat")return Number(d.flatRate||0);
 if(distance===null)return 0;
 if(distance<=50)return Number(d.tier1);
 if(distance<=100)return Number(d.tier2);
 if(distance<=200)return Number(d.tier3);
 return Number(d.tier4);
}
function currentDiscount(){
 const code=(document.getElementById("discountCode")?.value||"").trim().toUpperCase();
 if(!code)return null;
 return getDiscounts().find(d=>String(d.code).toUpperCase()===code && d.active);
}
function getTotals(){
 const cart=getCart(),settings=getSettings();
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const zip=document.getElementById("zipInput")?.value||"";
 const distance=estimateDistanceFrom19006(zip);
 let delivery=deliveryPriceByDistance(distance);
 const discount=currentDiscount();
 let discountAmount=0;
 if(discount){
   if(discount.type==="freeDelivery")delivery=0;
   if(discount.type==="percent")discountAmount=subtotal*(Number(discount.amount||0)/100);
   if(discount.type==="amount")discountAmount=Number(discount.amount||0);
 }
 discountAmount=Math.min(discountAmount,subtotal);
 const taxable=Math.max(0,subtotal-discountAmount);
 const tax=taxable*(Number(settings.taxPercent||0)/100);
 return {subtotal,tax,delivery,discountAmount,total:taxable+tax+delivery,distance,discount};
}
function smallMeasureFields(prefix){return `<div class="form-grid"><label>Height<input name="${prefix}_height" type="text"></label><label>Chest / Bust<input name="${prefix}_bust" type="text"></label><label>Shoulder Width<input name="${prefix}_shoulder" type="text"></label><label>Waist<input name="${prefix}_waist" type="text"></label><label>Sleeve Length<input name="${prefix}_sleeve" type="text"></label></div>`}
function renderCheckout(){
 applySite();updateCartCount();renderHeaderPageLinks();
 const cart=getCart(),settings=getSettings();
 if(!cart.length){document.querySelector(".checkout-wrap").innerHTML=`<div class="empty"><h2>Your cart is empty</h2><a class="btn main-btn" href="dresses.html">Shop Dresses</a></div>`;return}
 let pay="";
 if(settings.enableCreditCard)pay+=`<label class="choice"><input type="radio" name="paymentMethod" value="Credit Card" checked><span><strong>Credit Card</strong><br>Pay through secure card payment link.</span></label>`;
 if(settings.enablePayPal)pay+=`<label class="choice"><input type="radio" name="paymentMethod" value="PayPal" ${!settings.enableCreditCard?"checked":""}><span><strong>PayPal</strong></span></label>`;
 if(settings.enableZelle)pay+=`<label class="choice"><input type="radio" name="paymentMethod" value="Zelle" ${(!settings.enableCreditCard&&!settings.enablePayPal)?"checked":""}><span><strong>Zelle</strong><br>Name: ${settings.zelleName}<br>Zelle: ${settings.zelleContact}</span></label>`;
 if(settings.enableCash)pay+=`<label class="choice"><input type="radio" name="paymentMethod" value="Cash"><span><strong>Cash</strong></span></label>`;
 if(settings.allowPayLater)pay+=`<label class="choice"><input type="radio" name="paymentMethod" value="Pay After Confirmation"><span><strong>Pay After Confirmation</strong></span></label>`;
 document.getElementById("paymentOptions").innerHTML=pay||`<div class="zelle-box">No payment method enabled. Please contact store.</div>`;
 const acct=currentCustomer();
 const emailField=document.querySelector('input[name="email"]');
 if(acct && emailField)emailField.value=acct;
 document.getElementById("checkoutForm").addEventListener("submit",submitOrder);
 document.getElementById("checkoutForm").addEventListener("input",()=>{updateCheckoutTotal();renderOrderPreview();});
 renderMeasurementChoice();updateCheckoutTotal();loadGooglePlacesScript();
}
function renderMeasurementChoice(){const mode=document.querySelector('input[name="measurementMode"]:checked')?.value||"same";const cart=getCart();let html="";if(mode==="same"){html=`<div class="measure-card"><h3>Same Measurements For All Dresses</h3>${smallMeasureFields("same")}</div>`}else{cart.forEach((item,itemIndex)=>{for(let n=1;n<=item.qty;n++){const prefix=`item${itemIndex+1}_dress${n}`;html+=`<div class="measure-card"><h3>${item.name} — Dress ${n} of ${item.qty}</h3><p class="note">Selected size: ${item.size}</p>${smallMeasureFields(prefix)}</div>`}})}document.getElementById("measurementForms").innerHTML=html}
function updateCheckoutTotal(){
 const t=getTotals(),settings=getSettings();
 const dbox=document.getElementById("deliveryBox");if(dbox)dbox.innerHTML=`Delivery Charge: ${money(t.delivery)}`;
 const discountLine=t.discount?`<p>Discount (${t.discount.code}): -${money(t.discountAmount)}</p>`:"";
 const sbox=document.getElementById("checkoutSummary");
 if(sbox)sbox.innerHTML=`${getCart().map(i=>`<p><strong>${i.name}</strong><br>Qty: ${i.qty} × ${money(i.price)} = ${money(i.qty*i.price)}</p>`).join("")}<hr><p>Subtotal: ${money(t.subtotal)}</p>${discountLine}<p>Tax (${Number(settings.taxPercent||0)}%): ${money(t.tax)}</p><p>Delivery Charge: ${money(t.delivery)}</p><h3>Total: ${money(t.total)}</h3>`;
 const msg=document.getElementById("discountMessage");
 if(msg){const code=(document.getElementById("discountCode")?.value||"").trim();msg.textContent=code?(t.discount?"Discount applied.":"Discount code not found or inactive."):"";}
 renderOrderPreview();
}
function renderOrderPreview(){
 const box=document.getElementById("orderPreview"); if(!box)return;
 const t=getTotals(); const form=document.getElementById("checkoutForm"); const fd=form?new FormData(form):new FormData();
 box.innerHTML=`<h3>Order Preview</h3><p><strong>Name:</strong> ${fd.get("fullName")||""}</p><p><strong>Phone:</strong> ${fd.get("phone1")||""}</p><p><strong>Address:</strong> ${fd.get("address")||""} ${fd.get("apartment")||""}, ${fd.get("city")||""}, ${fd.get("state")||""} ${fd.get("zip")||""}</p><p><strong>Total:</strong> ${money(t.total)}</p>`;
}
function collectMeasurements(form,mode,cart){const out=[];if(mode==="same"){out.push({type:"Same for all dresses",height:form.get("same_height")||"",bust:form.get("same_bust")||"",shoulder:form.get("same_shoulder")||"",waist:form.get("same_waist")||"",sleeve:form.get("same_sleeve")||""})}else{cart.forEach((item,itemIndex)=>{for(let n=1;n<=item.qty;n++){const p=`item${itemIndex+1}_dress${n}`;out.push({type:`${item.name} Dress ${n}`,height:form.get(p+"_height")||"",bust:form.get(p+"_bust")||"",shoulder:form.get(p+"_shoulder")||"",waist:form.get(p+"_waist")||"",sleeve:form.get(p+"_sleeve")||""})}})}return out}

function buildOrderFromForm(formData){
 const cart=getCart(),settings=getSettings(),t=getTotals();
 const mode=document.querySelector('input[name="measurementMode"]:checked')?.value||"same";
 const paymentMethod=formData.get("paymentMethod")||"";
 return {id:"ORD-"+Date.now(),date:new Date().toLocaleString(),status:paymentMethod==="Credit Card"?"Pending Card Payment":"Pending Manual Payment",trackingNumber:"",trackingLink:"",customer:{name:formData.get("fullName"),phone:formData.get("phone1"),phone2:formData.get("phone2")||"",email:formData.get("email")||"",address:formData.get("address"),apartment:formData.get("apartment")||"",city:formData.get("city"),state:formData.get("state"),zip:formData.get("zip")},items:cart,measurementMode:mode,measurements:collectMeasurements(formData,mode,cart),payment:paymentMethod,zelleName:settings.zelleName,zelleContact:settings.zelleContact,discount:t.discount?{code:t.discount.code,type:t.discount.type,amount:t.discount.amount}:null,discountAmount:t.discountAmount,subtotal:t.subtotal,tax:t.tax,delivery:t.delivery,total:t.total,notes:""};
}
async function startStripeCheckout(order){
 localStorage.setItem("pendingStripeOrder",JSON.stringify(order));
 if(location.protocol==="file:"){
   alert("Stripe test checkout cannot run by double-clicking the HTML file. You must test it after uploading to Netlify, or by running Netlify Dev. For now, choose Zelle/manual payment while testing locally.");
   return;
 }
 try{
   const response=await fetch("/.netlify/functions/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({order})});
   let data={};
   try{data=await response.json();}catch(e){}
   if(!response.ok || !data.url){
     alert("Stripe checkout could not start. Check that STRIPE_SECRET_KEY is added in Netlify environment variables and the site is deployed.");
     console.error(data);
     return;
   }
   window.location.href=data.url;
 }catch(error){
   alert("Stripe checkout cannot run here yet. Upload the site to Netlify and add STRIPE_SECRET_KEY, or test with Netlify Dev.");
   console.error(error);
 }
}
function saveFinalOrder(order){
 const orders=getOrders();orders.unshift(order);saveOrders(orders);saveCustomerFromOrder(order);
}

function submitOrder(e){
 e.preventDefault();
 const f=new FormData(e.target);
 const order=buildOrderFromForm(f);
 if(order.payment==="Credit Card"){
   startStripeCheckout(order);
   return;
 }
 saveFinalOrder(order);
 const settings=getSettings();
 let msg=orderToText(order).replaceAll("\n","%0A");
 window.open(`https://wa.me/${settings.whatsapp}?text=${msg}`,"_blank");
 if(order.payment==="PayPal" && settings.paypalLink)window.open(settings.paypalLink,"_blank");
 clearCart();
 alert("Order saved as pending payment.");
 location.href=`order.html?id=${order.id}`;
}
function saveCustomerFromOrder(order){
 const customers=getCustomers();
 const key=(order.customer.email||order.customer.phone||order.customer.name).toLowerCase();
 let c=customers.find(x=>x.key===key);
 if(!c){c={key,name:order.customer.name,phone:order.customer.phone,email:order.customer.email,address:order.customer.address,city:order.customer.city,state:order.customer.state,zip:order.customer.zip,orders:[]};customers.unshift(c);}
 c.name=order.customer.name;c.phone=order.customer.phone;c.email=order.customer.email;c.address=order.customer.address;c.city=order.customer.city;c.state=order.customer.state;c.zip=order.customer.zip;
 if(!c.orders.includes(order.id))c.orders.unshift(order.id);
 saveCustomers(customers);
}
function orderToText(o){return `New Dress Order\nOrder ID: ${o.id}\nStatus: ${o.status}\nDate: ${o.date}\n\nCustomer:\nName: ${o.customer.name}\nPhone: ${o.customer.phone}\nSecond Phone: ${o.customer.phone2}\nEmail: ${o.customer.email}\nAddress: ${o.customer.address} ${o.customer.apartment}\n${o.customer.city}, ${o.customer.state} ${o.customer.zip}\n\nItems:\n${o.items.map(i=>`${i.name} | Qty ${i.qty} | Size ${i.size} | Price ${money(i.price)}`).join("\n")}\n\nMeasurements:\n${o.measurements.map(m=>`${m.type}: Height ${m.height}, Chest/Bust ${m.bust}, Shoulder ${m.shoulder}, Waist ${m.waist}, Sleeve ${m.sleeve}`).join("\n")}\n\nPayment: ${o.payment}\nZelle Name: ${o.zelleName}\nZelle Contact: ${o.zelleContact}\nSubtotal: ${money(o.subtotal)}\nTax: ${money(o.tax)}\nDiscount: ${money(o.discountAmount||0)}\nDelivery: ${money(o.delivery)}\nTotal: ${money(o.total)}\nTracking: ${o.trackingNumber||""} ${o.trackingLink||""}\nNotes: ${o.notes||""}`}
function loadGooglePlacesScript(){const key=getSettings().googleApiKey;if(!key||window.google)return;const s=document.createElement("script");s.src=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initAddressAutocomplete`;s.async=true;s.defer=true;document.head.appendChild(s)}
function initAddressAutocomplete(){if(window.google&&google.maps&&google.maps.places){const input=document.getElementById("addressInput");if(!input)return;const autocomplete=new google.maps.places.Autocomplete(input,{types:["address"],componentRestrictions:{country:"us"}});autocomplete.addListener("place_changed",()=>{const place=autocomplete.getPlace();let street="",city="",state="",zip="";(place.address_components||[]).forEach(c=>{const types=c.types;if(types.includes("street_number"))street=c.long_name+" "+street;if(types.includes("route"))street+=c.long_name;if(types.includes("locality"))city=c.long_name;if(types.includes("administrative_area_level_1"))state=c.short_name;if(types.includes("postal_code"))zip=c.long_name});if(street)document.getElementById("addressInput").value=street;if(city)document.getElementById("cityInput").value=city;if(state)document.getElementById("stateInput").value=state;if(zip)document.getElementById("zipInput").value=zip;updateCheckoutTotal()})}}
window.initAddressAutocomplete=initAddressAutocomplete


function activeAdmin(){const u=currentUser();return getUsers().find(x=>x.username===u)}
function hasPermission(p){const u=activeAdmin();return !!(u && ((u.permissions||[]).includes("all") || (u.permissions||[]).includes(p)))}
function requirePermission(p){if(!hasPermission(p)){alert("You do not have permission for this section.");return false}return true}
function enabledPages(){return getPages().filter(p=>p.enabled)}
function renderPublicNavPages(){
 const holder=document.getElementById("publicPageLinks");
 if(!holder)return;
 holder.innerHTML=enabledPages().filter(p=>p.showOnHome!==false).map(p=>`<a class="btn light-btn" href="page.html?id=${p.id}">${p.navLabel}</a>`).join("");
}
function renderHeaderPageLinks(){
 const holder=document.getElementById("headerPageLinks");
 if(!holder)return;
 holder.innerHTML=enabledPages().filter(p=>p.showInHeader).map(p=>`<a href="page.html?id=${p.id}">${p.navLabel}</a>`).join("");
}
function renderDynamicPage(){
 applySite();updateCartCount();renderHeaderPageLinks();
 const id=new URLSearchParams(location.search).get("id");
 const p=getPages().find(x=>x.id===id && x.enabled);
 const box=document.getElementById("dynamicPageBox");
 if(!p){box.innerHTML=`<div class="empty"><h2>Page not found</h2><p>This page may be turned off.</p><a class="btn main-btn" href="index.html">Home</a></div>`;return}
 document.getElementById("dynamicPageTitle").textContent=p.title;
 box.innerHTML=(p.sections&&p.sections.length?p.sections:[{type:"text",title:p.title,text:p.content||""}]).map(renderPageSection).join("");
}
function renderPageSection(s){
 if(s.type==="text")return `<section class="page-section text-section">${s.title?`<h2 class="page-section-title">${s.title}</h2>`:""}<p>${String(s.text||"").replaceAll("\n","</p><p>")}</p></section>`;
 if(s.type==="image")return `<section class="page-section image-section"><img src="${s.image||PLACEHOLDER}" onerror="this.src='${PLACEHOLDER}'">${s.caption?`<p class="center note">${s.caption}</p>`:""}</section>`;
 if(s.type==="banner")return `<section class="page-section banner-section" style="background-image:url('${s.image||PLACEHOLDER}')"><div><h2>${s.title||""}</h2><p>${s.text||""}</p>${s.buttonText?`<a class="btn main-btn" href="${s.buttonLink||"#"}">${s.buttonText}</a>`:""}</div></section>`;
 if(s.type==="button")return `<section class="page-section button-section"><a class="btn main-btn" href="${s.buttonLink||"#"}">${s.buttonText||"Click Here"}</a></section>`;
 if(s.type==="contact")return `<section class="page-section contact-section"><h2 class="page-section-title">${s.title||"Contact Us"}</h2><p>${s.text||""}</p><a class="btn main-btn" href="${s.buttonLink||"contact.html"}">${s.buttonText||"Contact Us"}</a></section>`;
 if(s.type==="spacer")return `<section class="page-section spacer-section" style="height:${Number(s.height||40)}px"></section>`;
 if(s.type==="dressGrid"){
   const cat=(s.category||"").toLowerCase();
   const tag=(s.tag||"").toLowerCase();
   let products=getProducts();
   if(cat)products=products.filter(p=>String(p.category||"").toLowerCase()===cat);
   if(tag)products=products.filter(p=>String(p.tags||"").toLowerCase().includes(tag));
   return `<section class="page-section"><h2 class="page-section-title">${s.title||"Dresses"}</h2><div class="product-grid">${products.map(card).join("")}</div></section>`;
 }
 return "";
}
function loginAsAdminFromAccount(){
 const u=document.getElementById("quickAdminUser").value.trim();
 const p=document.getElementById("quickAdminPass").value;
 const found=getUsers().find(x=>x.username===u&&x.password===p);
 if(found){localStorage.setItem("activeAdminUser",u);location.href="admin.html";}
 else alert("Wrong admin username or password.");
}


function initAdmin(){applySite();ensureUsers();showAdmin(!!localStorage.getItem("activeAdminUser"))}
function ensureUsers(){getUsers()}
function currentUser(){return localStorage.getItem("activeAdminUser")||""}
function adminLogin(){
 const u=document.getElementById("adminUser").value.trim();
 const p=document.getElementById("adminPass").value;
 const found=getUsers().find(x=>x.username===u&&x.password===p);
 if(found){localStorage.setItem("activeAdminUser",u);showAdmin(true)}
 else document.getElementById("loginMessage").textContent="Wrong username or password.";
}
function adminLogout(){
 localStorage.removeItem("activeAdminUser");
 showAdmin(false);
 const msg=document.getElementById("logoutMessage");
 if(msg)msg.classList.remove("hidden");
}
function showAdmin(on){
 document.getElementById("loginBox").classList.toggle("hidden",on);
 document.getElementById("adminPanel").classList.toggle("hidden",!on);
 if(on){
  document.getElementById("activeUserName").textContent=currentUser();
  loadAdmin();renderAdminDressList();renderOrders();renderUsers();renderCustomers();renderDiscounts();renderPages();
  const firstAllowed=[
 ["siteTab","site"],["pagesTab","pages"],["productsTab","products"],["ordersTab","orders"],
 ["customersTab","customers"],["discountsTab","discounts"],["paymentTab","settings"],
 ["deliveryTab","delivery"],["usersTab","users"]
].find(x=>hasPermission(x[1]));
showTab(firstAllowed?firstAllowed[0]:"siteTab");
 }
}
function showTab(id){
 const map={siteTab:"site",pagesTab:"pages",productsTab:"products",ordersTab:"orders",customersTab:"customers",discountsTab:"discounts",paymentTab:"settings",deliveryTab:"delivery",usersTab:"users"};
 if(map[id] && !hasPermission(map[id])){alert("You do not have permission to open this section.");return}
 document.querySelectorAll(".admin-section").forEach(x=>x.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 document.querySelectorAll(".tab-btn").forEach(x=>x.classList.remove("active"));
 const btn=document.querySelector('[data-tab="'+id+'"]');
 if(btn)btn.classList.add("active");
}
function loadAdmin(){
 const site=getSite(),s=getSettings(),d=getDelivery();
 ["siteName","heroSmall","heroTitle","heroText","heroButton","heroImage","heroSliderImages","featuredSmall","featuredTitle","featuredText","bannerTitle","bannerText","bannerButton","phone","businessAddress","primaryColor","darkColor","goldColor","backgroundColor"].forEach(id=>{if(document.getElementById(id))document.getElementById(id).value=site[id]||""});
 if(document.getElementById("heroSliderEnabled"))document.getElementById("heroSliderEnabled").checked=!!site.heroSliderEnabled;
 document.getElementById("settingWhatsapp").value=s.whatsapp;
 document.getElementById("settingZelleName").value=s.zelleName;
 document.getElementById("settingZelleContact").value=s.zelleContact;
 document.getElementById("settingTax").value=s.taxPercent;
 document.getElementById("settingGoogleApiKey").value=s.googleApiKey||"";
 document.getElementById("settingAllowPayLater").checked=s.allowPayLater;
 ["enableZelle","enablePayPal","enableCreditCard","enableCash"].forEach(id=>{if(document.getElementById(id))document.getElementById(id).checked=!!s[id];});
 if(document.getElementById("paypalLink"))document.getElementById("paypalLink").value=s.paypalLink||"";
 if(document.getElementById("creditCardLink"))document.getElementById("creditCardLink").value=s.creditCardLink||"";if(document.getElementById("stripePublishableKey"))document.getElementById("stripePublishableKey").value=s.stripePublishableKey||"";
 if(document.getElementById("deliveryMode"))document.getElementById("deliveryMode").value=d.mode||"distance";
 if(document.getElementById("flatRate"))document.getElementById("flatRate").value=d.flatRate||0;
 if(document.getElementById("freeDelivery"))document.getElementById("freeDelivery").checked=!!d.freeDelivery;
 document.getElementById("storeZip").value=d.storeZip;
 document.getElementById("deliveryTier1").value=d.tier1;
 document.getElementById("deliveryTier2").value=d.tier2;
 document.getElementById("deliveryTier3").value=d.tier3;
 document.getElementById("deliveryTier4").value=d.tier4;
}
function saveSiteSettings(){
 if(!requirePermission("site"))return;
 const site=getSite();
 ["siteName","heroSmall","heroTitle","heroText","heroButton","heroImage","heroSliderImages","featuredSmall","featuredTitle","featuredText","bannerTitle","bannerText","bannerButton","phone","businessAddress","primaryColor","darkColor","goldColor","backgroundColor"].forEach(id=>{if(document.getElementById(id))site[id]=document.getElementById(id).value});
 if(document.getElementById("heroSliderEnabled"))site.heroSliderEnabled=document.getElementById("heroSliderEnabled").checked;
 saveSite(site);applySite();alert("Website text/design saved.");
}
function resetSiteSettings(){if(!requirePermission("site"))return;if(confirm("Reset homepage/design settings?")){localStorage.removeItem("site");loadAdmin();applySite();alert("Reset done.")}}

let currentPageSections=[];
let editingSectionIndex="";
function renderPages(){
 const box=document.getElementById("pagesList");if(!box)return;
 const pages=getPages();
 box.innerHTML=pages.map(p=>`<div class="page-card"><div class="order-head"><div><strong>${p.title}</strong><br>URL: page.html?id=${p.id}<br>${p.enabled?"Enabled":"Disabled"} ${p.showInHeader?"| Header":""} ${p.showOnHome!==false?"| Home":""}</div><div><span class="status-pill">${p.navLabel}</span></div></div><div class="order-actions"><button class="btn light-btn" onclick="editPage('${p.id}')">Edit</button><button class="btn ${p.enabled?"danger-btn":"main-btn"}" onclick="togglePage('${p.id}')">${p.enabled?"Disable":"Enable"}</button></div></div>`).join("");
}
function renderBuilderSections(){
 const box=document.getElementById("sectionBuilderList");if(!box)return;
 if(!currentPageSections.length){box.innerHTML=`<p class="note">No sections yet. Add one below.</p>`;return}
 box.innerHTML=currentPageSections.map((s,i)=>`<div class="builder-section-card"><h4>${i+1}. ${s.type}</h4><p>${s.title||s.text||s.buttonText||s.category||""}</p><div class="builder-actions"><button class="btn light-btn" onclick="editSection(${i})">Edit</button><button class="btn light-btn" onclick="moveSection(${i},-1)">Up</button><button class="btn light-btn" onclick="moveSection(${i},1)">Down</button><button class="btn danger-btn" onclick="deleteSection(${i})">Delete</button></div></div>`).join("");
}
function clearPageForm(){
 ["pageEditId","pageTitle","pageNavLabel","pageImage","pageContent"].forEach(id=>{if(document.getElementById(id))document.getElementById(id).value=""});
 document.getElementById("pageEnabled").checked=true;
 document.getElementById("pageShowHeader").checked=false;
 document.getElementById("pageShowHome").checked=true;
 currentPageSections=[];editingSectionIndex="";renderBuilderSections();clearSectionForm();
}
function editPage(id){
 if(!requirePermission("pages"))return;
 const p=getPages().find(x=>x.id===id);
 document.getElementById("pageEditId").value=p.id;
 document.getElementById("pageTitle").value=p.title;
 document.getElementById("pageNavLabel").value=p.navLabel;
 document.getElementById("pageEnabled").checked=!!p.enabled;
 document.getElementById("pageShowHeader").checked=!!p.showInHeader;
 document.getElementById("pageShowHome").checked=p.showOnHome!==false;
 currentPageSections=(p.sections&&p.sections.length)?JSON.parse(JSON.stringify(p.sections)):[{type:"text",title:p.title,text:p.content||""}];
 editingSectionIndex="";renderBuilderSections();clearSectionForm();
}
function savePage(){
 if(!requirePermission("pages"))return;
 const pages=getPages();
 let id=document.getElementById("pageEditId").value.trim();
 const title=document.getElementById("pageTitle").value.trim();
 const navLabel=document.getElementById("pageNavLabel").value.trim();
 if(!title||!navLabel){alert("Add title and menu label.");return}
 if(!id){id=navLabel.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+"-"+Date.now();}
 const item={id,title,navLabel,enabled:document.getElementById("pageEnabled").checked,showInHeader:document.getElementById("pageShowHeader").checked,showOnHome:document.getElementById("pageShowHome").checked,sections:currentPageSections};
 const idx=pages.findIndex(x=>x.id===id);
 if(idx>=0)pages[idx]=item;else pages.push(item);
 savePages(pages);clearPageForm();renderPages();alert("Page saved.");
}
function togglePage(id){if(!requirePermission("pages"))return;const pages=getPages();const p=pages.find(x=>x.id===id);p.enabled=!p.enabled;savePages(pages);renderPages()}
function sectionTypeChanged(){
 const t=document.getElementById("sectionType").value;
 document.querySelectorAll(".section-field").forEach(x=>x.classList.add("hidden"));
 document.querySelectorAll(".field-"+t).forEach(x=>x.classList.remove("hidden"));
}
function clearSectionForm(){
 editingSectionIndex="";
 ["sectionTitle","sectionText","sectionImage","sectionButtonText","sectionButtonLink","sectionCategory","sectionTag","sectionHeight"].forEach(id=>{if(document.getElementById(id))document.getElementById(id).value=""});
 document.getElementById("sectionType").value="text";sectionTypeChanged();
}
function collectSectionForm(){
 const t=document.getElementById("sectionType").value;
 const s={type:t,title:document.getElementById("sectionTitle").value.trim()};
 if(["text","banner","contact"].includes(t))s.text=document.getElementById("sectionText").value;
 if(["image","banner"].includes(t))s.image=document.getElementById("sectionImage").value.trim();
 if(["button","banner","contact"].includes(t)){s.buttonText=document.getElementById("sectionButtonText").value.trim();s.buttonLink=document.getElementById("sectionButtonLink").value.trim();}
 if(t==="dressGrid"){s.category=document.getElementById("sectionCategory").value.trim();s.tag=document.getElementById("sectionTag").value.trim();}
 if(t==="spacer")s.height=Number(document.getElementById("sectionHeight").value||40);
 return s;
}
function saveSection(){
 const s=collectSectionForm();
 if(editingSectionIndex==="")currentPageSections.push(s);else currentPageSections[Number(editingSectionIndex)]=s;
 clearSectionForm();renderBuilderSections();
}
function editSection(i){
 const s=currentPageSections[i];editingSectionIndex=i;
 document.getElementById("sectionType").value=s.type;sectionTypeChanged();
 document.getElementById("sectionTitle").value=s.title||"";
 document.getElementById("sectionText").value=s.text||"";
 document.getElementById("sectionImage").value=s.image||"";
 document.getElementById("sectionButtonText").value=s.buttonText||"";
 document.getElementById("sectionButtonLink").value=s.buttonLink||"";
 document.getElementById("sectionCategory").value=s.category||"";
 document.getElementById("sectionTag").value=s.tag||"";
 document.getElementById("sectionHeight").value=s.height||"";
}
function deleteSection(i){currentPageSections.splice(i,1);renderBuilderSections()}
function moveSection(i,dir){const j=i+dir;if(j<0||j>=currentPageSections.length)return;[currentPageSections[i],currentPageSections[j]]=[currentPageSections[j],currentPageSections[i]];renderBuilderSections()}
function saveSettings(){
 if(!requirePermission("settings"))return;
 const old=getSettings();
 saveSettingsData({
  whatsapp:document.getElementById("settingWhatsapp").value.trim(),
  zelleName:document.getElementById("settingZelleName").value.trim(),
  zelleContact:document.getElementById("settingZelleContact").value.trim(),
  taxPercent:Number(document.getElementById("settingTax").value||6),
  googleApiKey:document.getElementById("settingGoogleApiKey").value.trim(),
  allowPayLater:document.getElementById("settingAllowPayLater").checked,
  enableZelle:document.getElementById("enableZelle")?document.getElementById("enableZelle").checked:old.enableZelle,
  enablePayPal:document.getElementById("enablePayPal")?document.getElementById("enablePayPal").checked:old.enablePayPal,
  paypalLink:document.getElementById("paypalLink")?document.getElementById("paypalLink").value.trim():old.paypalLink,
  enableCreditCard:document.getElementById("enableCreditCard")?document.getElementById("enableCreditCard").checked:old.enableCreditCard,
  creditCardLink:document.getElementById("creditCardLink")?document.getElementById("creditCardLink").value.trim():old.creditCardLink,
  stripePublishableKey:document.getElementById("stripePublishableKey")?document.getElementById("stripePublishableKey").value.trim():old.stripePublishableKey,
  enableCash:document.getElementById("enableCash")?document.getElementById("enableCash").checked:old.enableCash
 });
 alert("Payment/contact settings saved.");
}
function saveDeliverySettings(){
 if(!requirePermission("delivery"))return;
 saveDeliveryData({
  storeZip:document.getElementById("storeZip").value.trim()||"19006",
  mode:document.getElementById("deliveryMode")?document.getElementById("deliveryMode").value:"distance",
  flatRate:Number(document.getElementById("flatRate")?document.getElementById("flatRate").value||0:0),
  freeDelivery:document.getElementById("freeDelivery")?document.getElementById("freeDelivery").checked:false,
  tier1:Number(document.getElementById("deliveryTier1").value||20),
  tier2:Number(document.getElementById("deliveryTier2").value||40),
  tier3:Number(document.getElementById("deliveryTier3").value||60),
  tier4:Number(document.getElementById("deliveryTier4").value||100)
 });
 alert("Delivery settings saved.");
}
function renderAdminDressList(){const box=document.getElementById("adminDressList");if(!box)return;box.innerHTML=getProducts().map(p=>`<div class="admin-item"><img src="${p.image||PLACEHOLDER}" onerror="this.src='${PLACEHOLDER}'"><div><strong>${p.name}</strong><br>Before: ${money(p.beforePrice)} / Sale: ${money(p.price)}</div><div><button class="btn light-btn" onclick="editDress('${p.id}')">Edit</button> <button class="btn danger-btn" onclick="deleteDress('${p.id}')">Delete</button></div></div>`).join("")}
function clearDressForm(){["editId","dressName","dressBeforePrice","dressPrice","dressDescription","dressImage","dressImages"].forEach(id=>document.getElementById(id).value="")}
function editDress(id){if(!requirePermission("products"))return;showTab("productsTab");const p=getProduct(id);document.getElementById("editId").value=p.id;document.getElementById("dressName").value=p.name;document.getElementById("dressBeforePrice").value=p.beforePrice||"";document.getElementById("dressPrice").value=p.price;document.getElementById("dressDescription").value=p.description||"";document.getElementById("dressImage").value=p.image||"";document.getElementById("dressImages").value=(p.images||[]).join("\n");if(document.getElementById("dressCategory"))document.getElementById("dressCategory").value=p.category||"Bridal";if(document.getElementById("dressTags"))document.getElementById("dressTags").value=p.tags||"";scrollTo(0,0)}
function saveDress(){if(!requirePermission("products"))return;const products=getProducts(),editId=document.getElementById("editId").value;const name=document.getElementById("dressName").value.trim();const price=Number(document.getElementById("dressPrice").value);if(!name||!price){alert("Add dress name and sale price.");return}const image=document.getElementById("dressImage").value.trim()||PLACEHOLDER;const imagesText=document.getElementById("dressImages").value.trim();const item={id:editId||"dress"+Date.now(),name,beforePrice:Number(document.getElementById("dressBeforePrice").value||price),price,description:document.getElementById("dressDescription").value.trim(),category:document.getElementById("dressCategory")?document.getElementById("dressCategory").value.trim():"Bridal",tags:document.getElementById("dressTags")?document.getElementById("dressTags").value.trim():"",image,images:imagesText?imagesText.split("\n").map(x=>x.trim()).filter(Boolean):[image]};if(editId){products[products.findIndex(p=>p.id===editId)]=item}else products.push(item);saveProducts(products);clearDressForm();renderAdminDressList();alert("Dress saved.")}
function deleteDress(id){if(!requirePermission("products"))return;if(confirm("Delete this dress?")){saveProducts(getProducts().filter(p=>p.id!==id));renderAdminDressList()}}
function renderOrders(){const box=document.getElementById("ordersList");if(!box)return;const orders=getOrders();if(!orders.length){box.innerHTML='<div class="empty"><h3>No orders yet</h3><p>New checkout orders will appear here.</p></div>';return}box.innerHTML=orders.map(o=>`<div class="order-card"><div class="order-head"><div><strong>${o.id}</strong><br>${o.date}<br>${o.customer.name} | ${o.customer.phone}</div><div><span class="status-pill">${o.status}</span><br><strong>${money(o.total)}</strong></div></div><div class="order-actions"><button class="btn light-btn" onclick="viewOrder('${o.id}')">View</button><button class="btn main-btn" onclick="editOrder('${o.id}')">Edit</button><button class="btn danger-btn" onclick="deleteOrder('${o.id}')">Delete</button></div></div>`).join("")}
function viewOrder(id){const o=getOrders().find(x=>x.id===id);document.getElementById("orderEditor").innerHTML=`<div class="box"><h2>${o.id}</h2><pre>${orderToText(o)}</pre></div>`}
function editOrder(id){if(!requirePermission("orders"))return;const o=getOrders().find(x=>x.id===id);document.getElementById("orderEditor").innerHTML=`<div class="box"><h2>Edit ${o.id}</h2><label>Status<select id="editOrderStatus"><option>New</option><option>Contacted</option><option>Paid</option><option>In Progress</option><option>Ready</option><option>Shipped</option><option>Delivered</option><option>Cancelled</option></select></label><label>Customer Name<input id="editOrderName" value="${o.customer.name||""}"></label><label>Phone<input id="editOrderPhone" value="${o.customer.phone||""}"></label><label>Tracking Number<input id="editTrackingNumber" value="${o.trackingNumber||""}"></label><label>Tracking Link<input id="editTrackingLink" value="${o.trackingLink||""}"></label><label>Notes<textarea id="editOrderNotes">${o.notes||""}</textarea></label><button class="btn main-btn full" onclick="saveOrderEdit('${o.id}')">Save Order</button><pre>${orderToText(o)}</pre></div>`;document.getElementById("editOrderStatus").value=o.status}
function saveOrderEdit(id){if(!requirePermission("orders"))return;const orders=getOrders();const o=orders.find(x=>x.id===id);o.status=document.getElementById("editOrderStatus").value;o.customer.name=document.getElementById("editOrderName").value;o.customer.phone=document.getElementById("editOrderPhone").value;o.trackingNumber=document.getElementById("editTrackingNumber").value;o.trackingLink=document.getElementById("editTrackingLink").value;o.notes=document.getElementById("editOrderNotes").value;saveOrders(orders);renderOrders();viewOrder(id);alert("Order updated.")}
function deleteOrder(id){if(!requirePermission("orders"))return;if(confirm("Delete this order?")){saveOrders(getOrders().filter(o=>o.id!==id));renderOrders();document.getElementById("orderEditor").innerHTML=""}}
function exportOrders(){const data=JSON.stringify(getOrders(),null,2);const blob=new Blob([data],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="orders.json";a.click()}
function renderCustomers(){const box=document.getElementById("customersList");if(!box)return;const customers=getCustomers();if(!customers.length){box.innerHTML='<div class="empty"><h3>No customers yet</h3><p>Customers will appear here after orders.</p></div>';return}box.innerHTML=customers.map(c=>`<div class="customer-card"><strong>${c.name}</strong><br>Phone: ${c.phone||""}<br>Email: ${c.email||""}<br>Address: ${c.address||""}, ${c.city||""} ${c.state||""} ${c.zip||""}<br><span class="mini-pill">${c.orders.length} orders</span></div>`).join("")}
function renderDiscounts(){const box=document.getElementById("discountList");if(!box)return;const discounts=getDiscounts();box.innerHTML=discounts.map((d,i)=>`<div class="admin-item"><div></div><div><strong>${d.code}</strong><br>${d.type} ${d.amount||""} | ${d.active?"Active":"Off"}</div><div><button class="btn light-btn" onclick="editDiscount(${i})">Edit</button> <button class="btn danger-btn" onclick="deleteDiscount(${i})">Delete</button></div></div>`).join("")}
function saveDiscount(){if(!requirePermission("discounts"))return;const discounts=getDiscounts();const idx=document.getElementById("discountIndex").value;const item={code:document.getElementById("discountCodeAdmin").value.trim().toUpperCase(),type:document.getElementById("discountType").value,amount:Number(document.getElementById("discountAmount").value||0),active:document.getElementById("discountActive").checked};if(!item.code){alert("Add discount code.");return}if(idx==="")discounts.push(item);else discounts[Number(idx)]=item;saveDiscounts(discounts);clearDiscount();renderDiscounts();alert("Discount saved.")}
function editDiscount(i){const d=getDiscounts()[i];document.getElementById("discountIndex").value=i;document.getElementById("discountCodeAdmin").value=d.code;document.getElementById("discountType").value=d.type;document.getElementById("discountAmount").value=d.amount||0;document.getElementById("discountActive").checked=!!d.active}
function clearDiscount(){document.getElementById("discountIndex").value="";document.getElementById("discountCodeAdmin").value="";document.getElementById("discountAmount").value="";document.getElementById("discountType").value="percent";document.getElementById("discountActive").checked=true}
function deleteDiscount(i){if(!requirePermission("discounts"))return;const d=getDiscounts();d.splice(i,1);saveDiscounts(d);renderDiscounts()}
function renderUsers(){const box=document.getElementById("usersList");if(!box)return;box.innerHTML=getUsers().map(u=>`<div class="admin-item"><div></div><div><strong>${u.username}</strong><br>${u.role}<br>${(u.permissions||[]).map(p=>`<span class="mini-pill">${p}</span>`).join(" ")}</div><div>${u.username==="admin"?"":`<button class="btn danger-btn" onclick="deleteUser('${u.username}')">Delete</button>`}</div></div>`).join("")}
function selectedPermissions(){return Array.from(document.querySelectorAll(".perm-check:checked")).map(x=>x.value)}
function addUser(){if(!requirePermission("users"))return;const u=document.getElementById("newUsername").value.trim();const p=document.getElementById("newPassword").value;const r=document.getElementById("newRole").value.trim()||"Secondary Admin";if(!u||!p){alert("Add username and password.");return}const users=getUsers();if(users.some(x=>x.username===u)){alert("Username already exists.");return}users.push({username:u,password:p,role:r,permissions:selectedPermissions()});saveUsers(users);renderUsers();document.getElementById("newUsername").value="";document.getElementById("newPassword").value="";alert("Admin account added.")}
function changePassword(){if(!requirePermission("users"))return;const u=currentUser();const oldP=document.getElementById("oldPassword").value;const newP=document.getElementById("changedPassword").value;if(!newP){alert("Enter new password.");return}const users=getUsers();const me=users.find(x=>x.username===u);if(!me||me.password!==oldP){alert("Old password is wrong.");return}me.password=newP;saveUsers(users);document.getElementById("oldPassword").value="";document.getElementById("changedPassword").value="";alert("Password changed.")}
function deleteUser(username){if(!requirePermission("users"))return;if(confirm("Delete this admin account?")){saveUsers(getUsers().filter(u=>u.username!==username));renderUsers()}}

/* =========================================================
   FIREBASE PRODUCT SYNC — BAHIYA FASHIONOVA
   Step 1: Sync dresses/products across devices
   ========================================================= */

const CLOUD_PRODUCTS_DOC = "products";

function firebaseReady() {
  return typeof window.db !== "undefined" && window.db !== null;
}

async function cloudSaveProducts(products) {
  if (!firebaseReady()) {
    console.warn("Firebase is not ready. Products saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc(CLOUD_PRODUCTS_DOC).set({
      items: products,
      updatedAt: new Date().toISOString()
    });

    console.log("Products saved to Firebase.");
  } catch (error) {
    console.error("Could not save products to Firebase:", error);
    alert("Products saved locally, but could not sync online.");
  }
}

async function cloudLoadProducts() {
  if (!firebaseReady()) {
    console.warn("Firebase is not ready. Loading local products only.");
    return getProducts();
  }

  try {
    const snap = await window.db.collection("store").doc(CLOUD_PRODUCTS_DOC).get();

    if (snap.exists) {
      const data = snap.data();

      if (data && Array.isArray(data.items)) {
        localStorage.setItem("products", JSON.stringify(data.items));
        console.log("Products loaded from Firebase.");
        return data.items;
      }
    }

    const localProducts = getProducts();

    if (localProducts && localProducts.length) {
      await cloudSaveProducts(localProducts);
      console.log("Firebase was empty. Local products uploaded.");
    }

    return localProducts;
  } catch (error) {
    console.error("Could not load products from Firebase:", error);
    return getProducts();
  }
}

const originalSaveProducts = saveProducts;

saveProducts = function (products) {
  originalSaveProducts(products);
  cloudSaveProducts(products);
};

async function syncProductsFromCloudAndRender() {
  await cloudLoadProducts();

  if (document.getElementById("adminDressList")) {
    renderAdminDressList();
  }

  if (document.getElementById("productGrid")) {
    renderProducts();
  }

  if (document.getElementById("featuredGrid")) {
    renderHome();
  }

  if (document.getElementById("productDetail")) {
    renderProductDetail();
  }

  console.log("Product sync complete.");
}

/* =========================================================
   FIREBASE ORDER SYNC — BAHIYA FASHIONOVA
   Step 2: Sync orders across devices
   ========================================================= */

const CLOUD_ORDERS_DOC = "orders";

async function cloudSaveOrders(orders) {
  if (!firebaseReady()) {
    console.warn("Firebase is not ready. Orders saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc(CLOUD_ORDERS_DOC).set({
      items: orders,
      updatedAt: new Date().toISOString()
    });

    console.log("Orders saved to Firebase.");
  } catch (error) {
    console.error("Could not save orders to Firebase:", error);
    alert("Orders saved locally, but could not sync online.");
  }
}

async function cloudLoadOrders() {
  if (!firebaseReady()) {
    console.warn("Firebase is not ready. Loading local orders only.");
    return getOrders();
  }

  try {
    const snap = await window.db.collection("store").doc(CLOUD_ORDERS_DOC).get();

    if (snap.exists) {
      const data = snap.data();

      if (data && Array.isArray(data.items)) {
        localStorage.setItem("orders", JSON.stringify(data.items));
        console.log("Orders loaded from Firebase.");
        return data.items;
      }
    }

    const localOrders = getOrders();

    if (localOrders && localOrders.length) {
      await cloudSaveOrders(localOrders);
      console.log("Firebase orders were empty. Local orders uploaded.");
    }

    return localOrders;
  } catch (error) {
    console.error("Could not load orders from Firebase:", error);
    return getOrders();
  }
}

const originalSaveOrders = saveOrders;

saveOrders = function (orders) {
  originalSaveOrders(orders);
  cloudSaveOrders(orders);
};

async function syncOrdersFromCloudAndRender() {
  await cloudLoadOrders();

  if (document.getElementById("ordersList")) {
    renderOrders();
  }

  if (document.getElementById("customersList")) {
    renderCustomers();
  }

  console.log("Order sync complete.");
}

/* =========================================================
   FIREBASE ADMIN + CUSTOMER ACCOUNT SYNC — BAHIYA FASHIONOVA
   Step 3: Sync admin users and customer accounts
   ========================================================= */

function bahiyaFirebaseReady() {
  return typeof window.db !== "undefined" && window.db !== null;
}

/* ---------- ADMIN USERS SYNC ---------- */

async function cloudSaveAdminUsers(users) {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Admin users saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc("adminUsers").set({
      items: users,
      updatedAt: new Date().toISOString()
    });

    console.log("Admin users saved to Firebase.");
  } catch (error) {
    console.error("Could not save admin users to Firebase:", error);
    alert("Admin users saved locally, but could not sync online.");
  }
}

async function cloudLoadAdminUsers() {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Loading local admin users only.");
    return getUsers();
  }

  try {
    const snap = await window.db.collection("store").doc("adminUsers").get();

    if (snap.exists) {
      const data = snap.data();

      if (data && Array.isArray(data.items)) {
        localStorage.setItem("adminUsers", JSON.stringify(data.items));
        console.log("Admin users loaded from Firebase.");
        return data.items;
      }
    }

    return getUsers();
  } catch (error) {
    console.error("Could not load admin users from Firebase:", error);
    return getUsers();
  }
}

const originalSaveUsers = saveUsers;

saveUsers = function (users) {
  originalSaveUsers(users);
  cloudSaveAdminUsers(users);
};

/* Run this once from your MAIN laptop to upload your current admin users */
async function uploadCurrentAdminUsersToFirebase() {
  const users = getUsers();
  await cloudSaveAdminUsers(users);
  alert("Current admin users uploaded to Firebase.");
}

/* ---------- CUSTOMER ACCOUNTS SYNC ---------- */

async function cloudSaveCustomerAccounts(accounts) {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Customer accounts saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc("customerAccounts").set({
      items: accounts,
      updatedAt: new Date().toISOString()
    });

    console.log("Customer accounts saved to Firebase.");
  } catch (error) {
    console.error("Could not save customer accounts to Firebase:", error);
    alert("Customer accounts saved locally, but could not sync online.");
  }
}

async function cloudLoadCustomerAccounts() {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Loading local customer accounts only.");
    return getCustomerAccounts();
  }

  try {
    const snap = await window.db.collection("store").doc("customerAccounts").get();

    if (snap.exists) {
      const data = snap.data();

      if (data && Array.isArray(data.items)) {
        localStorage.setItem("customerAccounts", JSON.stringify(data.items));
        console.log("Customer accounts loaded from Firebase.");
        return data.items;
      }
    }

    const localAccounts = getCustomerAccounts();

    if (localAccounts && localAccounts.length) {
      await cloudSaveCustomerAccounts(localAccounts);
      console.log("Firebase customer accounts were empty. Local customer accounts uploaded.");
    }

    return localAccounts;
  } catch (error) {
    console.error("Could not load customer accounts from Firebase:", error);
    return getCustomerAccounts();
  }
}

const originalSaveCustomerAccounts = saveCustomerAccounts;

saveCustomerAccounts = function (accounts) {
  originalSaveCustomerAccounts(accounts);
  cloudSaveCustomerAccounts(accounts);
};

/* ---------- CUSTOMER ACCOUNT PAGE FIX ---------- */

function createCustomerAccount() {
  const name = document.getElementById("createName")?.value.trim();
  const email = document.getElementById("createEmail")?.value.trim().toLowerCase();
  const password = document.getElementById("createPassword")?.value;

  if (!name || !email || !password) {
    alert("Please fill in name, email, and password.");
    return;
  }

  const accounts = getCustomerAccounts();

  if (accounts.find((a) => a.email === email)) {
    alert("This email already has an account.");
    return;
  }

  const account = {
    id: "CUST-" + Date.now(),
    name,
    email,
    password,
    createdAt: new Date().toISOString()
  };

  accounts.push(account);
  saveCustomerAccounts(accounts);

  localStorage.setItem("activeCustomerEmail", email);

  alert("Account created successfully.");
  renderAccount();
}

function loginCustomer() {
  const email = document.getElementById("loginEmail")?.value.trim().toLowerCase();
  const password = document.getElementById("loginPassword")?.value;

  const accounts = getCustomerAccounts();
  const account = accounts.find((a) => a.email === email && a.password === password);

  if (!account) {
    alert("Wrong email or password.");
    return;
  }

  localStorage.setItem("activeCustomerEmail", email);

  alert("Login successful.");
  renderAccount();
}

function logoutCustomer() {
  localStorage.removeItem("activeCustomerEmail");
  renderAccount();
}

function renderAccount() {
  applySite();
  updateCartCount();
  renderHeaderPageLinks();

  const forms = document.getElementById("accountForms");
  const dash = document.getElementById("accountDashboard");

  if (!forms || !dash) return;

  const email = currentCustomer();

  if (!email) {
    forms.classList.remove("hidden");
    dash.classList.add("hidden");
    dash.innerHTML = "";
    return;
  }

  const account = getCustomerAccounts().find((a) => a.email === email);
  const orders = getOrders().filter((o) => {
    const orderEmail = String(o.customer?.email || "").toLowerCase();
    return orderEmail && orderEmail === email;
  });

  forms.classList.add("hidden");
  dash.classList.remove("hidden");

  dash.innerHTML = `
    <div class="box">
      <h2>Welcome ${account ? account.name : email}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <button class="btn danger-btn" onclick="logoutCustomer()">Logout</button>
    </div>

    <div class="box">
      <h2>My Orders</h2>
      ${
        orders.length
          ? orders.map((o) => `
              <div class="admin-item">
                <div>
                  <strong>${o.id}</strong><br>
                  Status: ${o.status || "Pending"}<br>
                  Total: ${money(o.total)}<br>
                  Tracking: ${o.trackingNumber || "Not added yet"}
                  ${
                    o.trackingLink
                      ? `<br><a class="btn light-btn" href="${o.trackingLink}" target="_blank">Track Package</a>`
                      : ""
                  }
                </div>
                <a class="btn main-btn" href="order.html?id=${o.id}">View Order</a>
              </div>
            `).join("")
          : `<p class="note">No orders found yet.</p>`
      }
    </div>
  `;
}

/* ---------- LOAD CLOUD ACCOUNTS ON PAGE LOAD ---------- */

async function syncAccountsFromCloudAndRender() {
  await cloudLoadAdminUsers();
  await cloudLoadCustomerAccounts();

  if (document.getElementById("accountDashboard")) {
    renderAccount();
  }

  if (document.getElementById("usersList")) {
    renderUsers();
  }

  console.log("Account sync complete.");
}

window.addEventListener("load", function () {
  setTimeout(syncAccountsFromCloudAndRender, 1000);
});
/* =========================================================
   FIREBASE WEBSITE SETTINGS SYNC — BAHIYA FASHIONOVA
   Step 4: Sync website settings + prepare logo support
   ========================================================= */

async function cloudSaveSiteSettings(site) {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Site settings saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc("siteSettings").set({
      data: site,
      updatedAt: new Date().toISOString()
    });

    console.log("Site settings saved to Firebase.");
  } catch (error) {
    console.error("Could not save site settings to Firebase:", error);
    alert("Website settings saved locally, but could not sync online.");
  }
}

async function cloudLoadSiteSettings() {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Loading local site settings only.");
    return getSite();
  }

  try {
    const snap = await window.db.collection("store").doc("siteSettings").get();

    if (snap.exists) {
      const data = snap.data();

      if (data && data.data) {
        localStorage.setItem("site", JSON.stringify(data.data));
        console.log("Site settings loaded from Firebase.");
        return data.data;
      }
    }

    const localSite = getSite();
    await cloudSaveSiteSettings(localSite);
    console.log("Firebase site settings were empty. Local site settings uploaded.");

    return localSite;
  } catch (error) {
    console.error("Could not load site settings from Firebase:", error);
    return getSite();
  }
}

const originalSaveSite = saveSite;

saveSite = function (site) {
  originalSaveSite(site);
  cloudSaveSiteSettings(site);
};

/* Logo support */
function applyLogoIfExists() {
  const site = getSite();
  const logoUrl = site.logoUrl || "";

  document.querySelectorAll(".logo").forEach((logo) => {
    if (logoUrl) {
      logo.innerHTML = `<img src="${logoUrl}" alt="${site.siteName || "Bahiya Fashionova"}" style="max-height:48px;max-width:180px;object-fit:contain;">`;
    } else {
      logo.textContent = site.siteName || "Bahiya Fashionova";
    }
  });
}

const originalApplySite = applySite;

applySite = function () {
  originalApplySite();
  applyLogoIfExists();
};

async function syncSiteSettingsFromCloudAndRender() {
  await cloudLoadSiteSettings();

  applySite();

  if (document.getElementById("featuredGrid")) {
    renderHome();
  }

  if (document.getElementById("productGrid")) {
    renderProducts();
  }

  if (document.getElementById("productDetail")) {
    renderProductDetail();
  }

  if (document.getElementById("siteName")) {
    loadSiteForm();
  }

  console.log("Site settings sync complete.");
}

window.addEventListener("load", function () {
  setTimeout(syncSiteSettingsFromCloudAndRender, 1200);
});
/* =========================================================
   FIREBASE PAYMENT / CONTACT SETTINGS SYNC
   Sync WhatsApp, Zelle, PayPal, Stripe publishable key, tax
   ========================================================= */

async function cloudSavePaymentSettings(settings) {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Payment settings saved locally only.");
    return;
  }

  try {
    await window.db.collection("store").doc("paymentSettings").set({
      data: settings,
      updatedAt: new Date().toISOString()
    });

    console.log("Payment/contact settings saved to Firebase.");
  } catch (error) {
    console.error("Could not save payment settings to Firebase:", error);
    alert("Payment settings saved locally, but could not sync online.");
  }
}

async function cloudLoadPaymentSettings() {
  if (!bahiyaFirebaseReady()) {
    console.warn("Firebase is not ready. Loading local payment settings only.");
    return getSettings();
  }

  try {
    const snap = await window.db.collection("store").doc("paymentSettings").get();

    if (snap.exists) {
      const data = snap.data();

      if (data && data.data) {
        localStorage.setItem("settings", JSON.stringify(data.data));
        console.log("Payment/contact settings loaded from Firebase.");
        return data.data;
      }
    }

    const localSettings = getSettings();
    await cloudSavePaymentSettings(localSettings);
    console.log("Firebase payment settings were empty. Local settings uploaded.");

    return localSettings;
  } catch (error) {
    console.error("Could not load payment settings from Firebase:", error);
    return getSettings();
  }
}

const originalSaveSettingsData = saveSettingsData;

saveSettingsData = function (settings) {
  originalSaveSettingsData(settings);
  cloudSavePaymentSettings(settings);
};

async function syncPaymentSettingsFromCloud() {
  await cloudLoadPaymentSettings();

  if (document.getElementById("settingWhatsapp")) {
    const s = getSettings();

    document.getElementById("settingWhatsapp").value = s.whatsapp || "";
    document.getElementById("settingZelleName").value = s.zelleName || "";
    document.getElementById("settingZelleContact").value = s.zelleContact || "";
    document.getElementById("paypalLink").value = s.paypalLink || "";
    document.getElementById("creditCardLink").value = s.creditCardLink || "";
    document.getElementById("stripePublishableKey").value = s.stripePublishableKey || "";
    document.getElementById("settingGoogleApiKey").value = s.googleApiKey || "";
    document.getElementById("settingTax").value = s.taxPercent || 0;

    document.getElementById("enableCreditCard").checked = !!s.enableCreditCard;
    document.getElementById("enablePayPal").checked = !!s.enablePayPal;
    document.getElementById("enableZelle").checked = !!s.enableZelle;
    document.getElementById("enableCash").checked = !!s.enableCash;
    document.getElementById("settingAllowPayLater").checked = !!s.allowPayLater;
  }

  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.href = "https://wa.me/" + (getSettings().whatsapp || "");
  }

  console.log("Payment/contact settings sync complete.");
}

window.addEventListener("load", function () {
  setTimeout(syncPaymentSettingsFromCloud, 1400);
});
/* =========================================================
   FIREBASE SITE + PAGES + PAYMENT FULL SYNC FIX
   ========================================================= */

async function cloudSavePages(pages) {
  if (!bahiyaFirebaseReady()) return;

  await window.db.collection("store").doc("pages").set({
    items: pages,
    updatedAt: new Date().toISOString()
  });

  console.log("Pages saved to Firebase.");
}

async function cloudLoadPages() {
  if (!bahiyaFirebaseReady()) return getPages();

  const snap = await window.db.collection("store").doc("pages").get();

  if (snap.exists) {
    const data = snap.data();

    if (data && Array.isArray(data.items)) {
      localStorage.setItem("pages", JSON.stringify(data.items));
      console.log("Pages loaded from Firebase.");
      return data.items;
    }
  }

  const localPages = getPages();
  await cloudSavePages(localPages);
  return localPages;
}

const originalSavePages = savePages;

savePages = function (pages) {
  originalSavePages(pages);
  cloudSavePages(pages);
};

async function syncEverythingVisualFromCloud() {
  try {
    if (typeof cloudLoadSiteSettings === "function") {
      await cloudLoadSiteSettings();
    }

    if (typeof cloudLoadPaymentSettings === "function") {
      await cloudLoadPaymentSettings();
    }

    await cloudLoadPages();

    applySite();

    if (document.getElementById("featuredGrid")) {
      renderHome();
      renderPublicNavPages();
    }

    if (document.getElementById("productGrid")) {
      renderProducts();
    }

    if (document.getElementById("headerPageLinks")) {
      renderHeaderPageLinks();
    }

    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.href = "https://wa.me/" + (getSettings().whatsapp || "");
    }

    console.log("Full visual/site sync complete.");
  } catch (error) {
    console.error("Full visual/site sync failed:", error);
  }
}

/* Run after other Firebase syncs */
window.addEventListener("load", function () {
  setTimeout(syncEverythingVisualFromCloud, 2000);
});

/* One-time helper: upload current laptop settings/pages/payment to Firebase */
async function uploadCurrentWebsiteSettingsToFirebase() {
  if (typeof cloudSaveSiteSettings === "function") {
    await cloudSaveSiteSettings(getSite());
  }

  if (typeof cloudSavePaymentSettings === "function") {
    await cloudSavePaymentSettings(getSettings());
  }

  await cloudSavePages(getPages());

  alert("Current website settings, pages, and payment/contact settings uploaded to Firebase.");
}
/* =========================================
   MASTER WEBSITE STARTUP LOADER
========================================= */

window.addEventListener("load", async function () {

  try {

    // LOAD PRODUCTS
    await syncProductsFromCloudAndRender();

    // LOAD ORDERS
    await syncOrdersFromCloudAndRender();

    // LOAD ADMIN USERS
    await cloudLoadAdminUsers();

    // LOAD CUSTOMER ACCOUNTS
    await cloudLoadCustomerAccounts();

    // APPLY FINAL SITE SETTINGS
    applySite();

    // UPDATE CART
    updateCartCount();

    // RENDER PUBLIC NAV
    renderPublicNavPages();

    // HOME PAGE
    if (document.getElementById("featuredGrid")) {
      renderHome();
    }

    // PRODUCTS PAGE
    if (document.getElementById("productGrid")) {
      renderProducts();
    }

    // PRODUCT DETAIL PAGE
    if (document.getElementById("productDetail")) {
      renderProductDetail();
    }

  } catch (error) {

    console.error("Startup loading error:", error);

  }

  // SHOW WEBSITE
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");

});
