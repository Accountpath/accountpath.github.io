document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".global-nav");
  const toTop = document.querySelector(".to-top");

  // --- スクロールでヘッダーを白背景に切り替え ---
  const onScroll = () => {
    const scrolled = window.scrollY > 60;
    header?.classList.toggle("scrolled", scrolled);
    toTop?.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- モバイルナビ開閉 ---
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
      document.body.style.overflow = expanded ? "" : "hidden";
    });
    // メニュー内リンクを押したら閉じる
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  // --- ページトップへ ---
  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- スクロール出現アニメーション ---
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // --- 実績数字のカウントアップ ---
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const duration = 1600;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          countIo.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => countIo.observe(el));
  }

  // --- お問い合わせフォーム(デモ: 送信先未設定のためメッセージ表示のみ) ---
  const form = document.querySelector(".contact-form form");
  const status = document.querySelector(".form-status");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent =
        "お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。";
      status.classList.add("show");
      form.reset();
    });
  }
});
