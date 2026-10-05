document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  if (document.getElementById("injected-footer-styles")) return;

  const footerCSS = `
    <style id="injected-footer-styles">
      .site-footer {
        width: 100%; max-width: none; margin: 60px 0 0; padding: 45px 22px 35px;
        text-align: center; font-family: 'Inter', system-ui, sans-serif;
        color: #4b5563; background: #ffffff; border-top: 1px solid #e5e7eb;
        box-sizing: border-box; display: block;
      }
      .site-footer, .site-footer * { box-sizing: border-box; }
      .site-footer .footer-brand {
        display: inline-block; font-size: 20px; font-weight: 700; letter-spacing: 2.5px;
        color: #111827; text-decoration: none; margin-bottom: 18px; text-transform: uppercase;
      }
      .site-footer .footer-brand span { color: #3B4A3F; }
      .site-footer .footer-links {
        width: 100%; max-width: 920px; display: flex; justify-content: center;
        align-items: center; flex-wrap: wrap; gap: 14px 24px; margin: 0 auto 22px;
      }
      .site-footer .footer-links a {
        color: #4b5563; text-decoration: none; font-size: 12.5px; font-weight: 400;
        transition: color 0.2s ease;
      }
      .site-footer .footer-links a:hover { color: #3B4A3F; }
      .site-footer .footer-links a.highlight-link { color: #3B4A3F; font-weight: 500; }
      .site-footer > p:not(.disclaimer) {
        width: 100%; margin: 0 auto 12px; font-size: 12px; color: #1f2937; font-weight: 500;
      }
      .site-footer .disclaimer {
        width: 100%; max-width: 720px; margin: 12px auto 0; font-size: 11px;
        font-weight: 300; color: #6b7280; line-height: 1.65; text-align: center;
      }
      .site-footer .disclaimer a { color: #4b5563; text-decoration: underline; }
      .site-footer .disclaimer a:hover { color: #3B4A3F; }
      @media (max-width: 650px) {
        .site-footer { margin-top: 40px; padding: 32px 16px 24px; }
      }
    </style>
  `;

  document.head.insertAdjacentHTML("beforeend", footerCSS);
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <a href="index.html" class="footer-brand">HAVEN <span>BEDDING</span></a>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="minimalist-frames.html">Minimalist Frames</a>
        <a href="organic-linens.html">Organic Linens</a>
        <a href="platform-beds.html">Platform Beds</a>
        <a href="mattresses.html">Mattresses</a>
        <a href="sanctuary-collection.html" class="highlight-link">Sanctuary Collection</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="disclaimer.html">Disclaimer</a>
      </div>
      <p>&copy; ${currentYear} Haven Bedding. Calm, Minimalist Sleep Environments. All rights reserved.</p>
      <p class="disclaimer">Haven curates peaceful platform bed designs, organic cotton textiles, and minimalist Scandinavian styling. <a href="disclaimer.html">Disclaimer</a></p>
    </footer>
  `);
});