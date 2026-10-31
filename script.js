
/*
  PRESTIGE CARD — CLIENT CUSTOMIZATION
  Palitan ang sample information sa ibaba.
  Use real client information and images only.
*/

const BUSINESS = {
  name: "YOUR BUSINESS",
  heroTitle: "Your Business.<br><span>Your Digital Identity.</span>",
  heroDescription: "Discover our story, explore our services, and connect with us through one premium digital experience.",

  aboutTitle: "We make every connection count.",
  aboutText: "We are committed to providing quality products and services while building meaningful relationships with every customer. Our goal is to make every experience simple, professional, and memorable.",
  aboutImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",

  phone: "+639123456789",
  email: "hello@example.com",
  messenger: "https://m.me/yourpage",
  address: "Your complete business address",
  mapEmbed: "",

  // Paste only the YouTube video ID, not the full URL.
  // Example URL: https://www.youtube.com/watch?v=ABC123
  // Video ID: ABC123
  youtubeID: "",

  services: [
    { icon: "✦", title: "Premium Service", description: "Describe your first business service here." },
    { icon: "◇", title: "Professional Solutions", description: "Describe your second business service here." },
    { icon: "◎", title: "Customer Support", description: "Describe your third business service here." }
  ],

  products: [
    {
      name: "Featured Product One",
      description: "Write a short description of this product.",
      price: "Contact for price",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Featured Product Two",
      description: "Write a short description of this product.",
      price: "Contact for price",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Featured Product Three",
      description: "Write a short description of this product.",
      price: "Contact for price",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"
  ],

  features: [
    { icon: "✧", title: "Quality First", description: "We focus on delivering quality in every detail." },
    { icon: "◈", title: "Customer Focused", description: "Your satisfaction and experience matter to us." },
    { icon: "↗", title: "Reliable Service", description: "We aim to make every interaction smooth and dependable." }
  ],

  // Replace these sample entries only with genuine client-approved reviews.
  testimonials: [
    { quote: "Add a real customer review here, with permission.", name: "Customer Name", role: "Verified Customer" },
    { quote: "Add another genuine customer experience here.", name: "Customer Name", role: "Verified Customer" },
    { quote: "Add a third genuine customer review here.", name: "Customer Name", role: "Verified Customer" }
  ],

  faqs: [
    { question: "How can I contact your business?", answer: "You can contact us using the phone, email, or social media links on this page." },
    { question: "Where are you located?", answer: "Our business address and map are listed in the contact section." },
    { question: "How can I learn more about your services?", answer: "Send us a message and our team will be happy to assist you." }
  ],

  socials: [
    { label: "Facebook", url: "https://facebook.com/yourpage" },
    { label: "Instagram", url: "https://instagram.com/yourpage" },
    { label: "TikTok", url: "https://tiktok.com/@yourpage" }
  ],

  footerText: "A better way to connect."
};

// Do not edit below unless you want to change website functionality.

const byId = (id) => document.getElementById(id);
const safe = (value) => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

function renderBusiness() {
  document.title = `${BUSINESS.name} | Digital Business Card`;

  byId("brandName").textContent = BUSINESS.name;
  byId("visualName").textContent = BUSINESS.name;
  byId("footerBrand").textContent = BUSINESS.name;
  byId("copyrightName").textContent = BUSINESS.name;
  byId("whyBrand").textContent = BUSINESS.name + "?";
  byId("footerText").textContent = BUSINESS.footerText;
  byId("heroTitle").innerHTML = BUSINESS.heroTitle;
  byId("heroDescription").textContent = BUSINESS.heroDescription;
  byId("aboutTitle").textContent = BUSINESS.aboutTitle;
  byId("aboutText").textContent = BUSINESS.aboutText;
  byId("aboutImage").src = BUSINESS.aboutImage;
  byId("year").textContent = new Date().getFullYear();

  byId("serviceGrid").innerHTML = BUSINESS.services.map(item => `
    <article class="service-card">
      <div class="card-icon">${safe(item.icon)}</div>
      <h3>${safe(item.title)}</h3>
      <p>${safe(item.description)}</p>
    </article>
  `).join("");

  byId("productGrid").innerHTML = BUSINESS.products.map(item => `
    <article class="product-card">
      <img src="${safe(item.image)}" alt="${safe(item.name)}" loading="lazy">
      <div class="product-info">
        <h3>${safe(item.name)}</h3>
        <p>${safe(item.description)}</p>
        <div class="product-price">${safe(item.price)}</div>
      </div>
    </article>
  `).join("");

  byId("galleryGrid").innerHTML = BUSINESS.gallery.map((image, index) => `
    <div class="gallery-item">
      <img src="${safe(image)}" alt="Business gallery image ${index + 1}" loading="lazy">
    </div>
  `).join("");

  byId("featuresGrid").innerHTML = BUSINESS.features.map(item => `
    <article class="feature-card">
      <div class="card-icon">${safe(item.icon)}</div>
      <h3>${safe(item.title)}</h3>
      <p>${safe(item.description)}</p>
    </article>
  `).join("");

  byId("testimonialGrid").innerHTML = BUSINESS.testimonials.map(item => `
    <article class="testimonial-card">
      <div class="quote-mark">“</div>
      <p>${safe(item.quote)}</p>
      <div class="person">${safe(item.name)}</div>
      <div class="role">${safe(item.role)}</div>
    </article>
  `).join("");

  byId("faqList").innerHTML = BUSINESS.faqs.map(item => `
    <div class="faq-item">
      <button class="faq-question" type="button">
        ${safe(item.question)} <span>+</span>
      </button>
      <div class="faq-answer">${safe(item.answer)}</div>
    </div>
  `).join("");

  const phoneNumber = BUSINESS.phone.replace(/[^\d+]/g, "");
  byId("contactActions").innerHTML = `
    ${BUSINESS.phone ? `<a class="contact-link" href="tel:${safe(phoneNumber)}">☎ Call Us</a>` : ""}
    ${BUSINESS.email ? `<a class="contact-link" href="mailto:${safe(BUSINESS.email)}">✉ Email Us</a>` : ""}
    ${BUSINESS.messenger ? `<a class="contact-link" href="${safe(BUSINESS.messenger)}" target="_blank" rel="noopener">↗ Messenger</a>` : ""}
  `;

  byId("socialLinks").innerHTML = BUSINESS.socials.map(item => `
    <a class="social-link" href="${safe(item.url)}" target="_blank" rel="noopener">${safe(item.label)} ↗</a>
  `).join("");

  if (BUSINESS.mapEmbed) {
    byId("mapWrap").innerHTML = `
      <iframe src="${safe(BUSINESS.mapEmbed)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    `;
  } else {
    byId("mapWrap").innerHTML = BUSINESS.address
      ? `<p class="map-address">📍 ${safe(BUSINESS.address)}</p>`
      : "";
  }

  if (BUSINESS.youtubeID) {
    byId("videoFrame").innerHTML = `
      <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(BUSINESS.youtubeID)}"
        title="Business video showcase" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    `;
  }
}

byId("faqList").addEventListener("click", (event) => {
  const button = event.target.closest(".faq-question");
  if (!button) return;

  const item = button.closest(".faq-item");
  item.classList.toggle("active");
  button.querySelector("span").textContent = item.classList.contains("active") ? "−" : "+";
});

byId("menuToggle").addEventListener("click", () => {
  byId("navMenu").classList.toggle("open");
});

byId("navMenu").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    byId("navMenu").classList.remove("open");
  }
});

renderBusiness();
