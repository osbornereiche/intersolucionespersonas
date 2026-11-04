const EMAIL = "bryanmyers5942@gmail.com";

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
}

const form = document.querySelector("#contacto-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const ciudad = String(data.get("ciudad") || "").trim();
    const interes = String(data.get("interes") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const texto = `Hola, soy ${nombre} de ${ciudad}. Tema: ${interes}. ${mensaje}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Contacto Mi Juguetería")}&body=${encodeURIComponent(texto)}`;
    const notice = document.querySelector(".notice");
    if (notice) notice.style.display = "block";
  });
}

(function cookies() {
  const key = "mj-cookies";
  if (document.getElementById("cookie-banner")) return;

  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Aviso de cookies");
  banner.innerHTML = `
    <p>Este portal web únicamente utiliza cookies propias con finalidad técnica, no recaba ni cede datos de carácter personal de los usuarios sin su conocimiento. Sin embargo, contiene enlaces a sitios de terceros con políticas de privacidad ajenas a las de Mi Juguetería, que usted podrá decidir si acepta o no cuando acceda a ellos. <a href="cookies.html">Ver cookies</a>.</p>
    <div class="cookie-actions">
      <button class="btn" type="button" data-cookie="accept">Aceptar</button>
    </div>
  `;
  document.body.appendChild(banner);

  const saved = localStorage.getItem(key);
  const show = () => {
    banner.classList.add("open");
    document.body.classList.add("cookies-open");
  };
  const hide = () => {
    banner.classList.remove("open");
    document.body.classList.remove("cookies-open");
  };

  if (!saved) show();

  banner.addEventListener("click", (event) => {
    const choice = event.target.getAttribute("data-cookie");
    if (!choice) return;
    localStorage.setItem(key, choice);
    document.cookie = "cookie_notice_accepted=true;path=/;max-age=31536000;SameSite=Lax";
    document.cookie = "mj_consent=" + choice + ";path=/;max-age=31536000;SameSite=Lax";
    hide();
  });
})();
