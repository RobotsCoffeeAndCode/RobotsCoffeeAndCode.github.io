document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = "intro";
  const tabs = document.querySelectorAll(".nav-link");
  const panels = document.querySelectorAll(".tab-panel");

  function switchTab(targetId) {
    const cleanId = targetId.replace("#", "") || defaultTab;
    const activePanel = document.getElementById(cleanId);

    if (!activePanel) {
      // Fallback if an invalid hash was entered
      switchTab(defaultTab);
      return;
    }

    // Toggle active state on panels
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === cleanId);
    });

    // Toggle active state on nav links
    tabs.forEach((tab) => {
      const href = tab.getAttribute("href").replace("#", "");
      tab.classList.toggle("active", href === cleanId);
    });

    // Scroll to top of content when tab changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle URL hash changes (back/forward navigation or link clicking)
  window.addEventListener("hashchange", () => {
    switchTab(window.location.hash);
  });

  // Initialize on page load
  switchTab(window.location.hash || defaultTab);
});