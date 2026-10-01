const cartData = [];

const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const whatsappOrder = document.getElementById("whatsappOrder");

function renderCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cartData.forEach((item, index) => {
    total += item.price;

    const row = document.createElement("div");

    row.className = "cart-row";

    row.innerHTML = `
      <span>${item.name}</span>

      <span>
        PKR ${item.price.toLocaleString()}
        <button onclick="removeItem(${index})">×</button>
      </span>
    `;

    cartItems.appendChild(row);
  });

  cartCount.textContent = cartData.length;

  cartTotal.textContent = total.toLocaleString();

  const message = cartData.length
    ? `Hello MANIAX, I want to order: ${cartData
        .map(item => item.name)
        .join(", ")}. Total: PKR ${total.toLocaleString()}`
    : "Hello MANIAX, I want to place an order.";

  whatsappOrder.href =
    "https://wa.me/923000000000?text=" +
    encodeURIComponent(message);
}

function removeItem(index) {
  cartData.splice(index, 1);

  renderCart();
}

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {

    cartData.push({
      name: button.dataset.name,
      price: Number(button.dataset.price)
    });

    renderCart();

    cartPanel.classList.add("open");
  });
});

cartButton.addEventListener("click", () => {
  cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

renderCart();


// ================= HERO INTERACTION =================

const hero = document.querySelector(".hero");
const heroBottle = document.querySelector(".hero-bottle");

if (hero && heroBottle) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 20;

        heroBottle.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroBottle.style.transform =
            "translate(0, 0)";

    });

// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".intro, .collection, .features, .story, .quote, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
} 