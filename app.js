const screenNodes = document.querySelectorAll(".screen");
const viewNodes = document.querySelectorAll(".view");
const navNodes = document.querySelectorAll(".nav-item");
const viewTitle = document.getElementById("viewTitle");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const profileToggle = document.getElementById("profileToggle");
const profilePanel = document.getElementById("profilePanel");

const viewTitles = {
  dashboard: "Dashboard operativo",
  appointments: "Citas medicas",
  patients: "Pacientes e historias clinicas",
  inventory: "Inventario integral",
  sales: "Registro de venta",
  "sales-history": "Historial de ventas",
  billing: "Facturacion electronica",
  reports: "Reportes y analisis",
  settings: "Configuracion general",
};

function setScreen(targetScreen) {
  screenNodes.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === targetScreen);
  });
}

function setView(targetView) {
  viewNodes.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === targetView);
  });

  navNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.view === targetView);
  });

  if (viewTitle && viewTitles[targetView]) {
    viewTitle.textContent = viewTitles[targetView];
  }

  sidebar?.classList.remove("open");
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.go;
    setScreen(target);
    if (target === "dashboard") {
      setView("dashboard");
    }
  });
});

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.nav));
});

navNodes.forEach((node) => {
  node.addEventListener("click", () => setView(node.dataset.view));
});

menuToggle?.addEventListener("click", () => {
  sidebar?.classList.toggle("open");
});

profileToggle?.addEventListener("click", () => {
  profilePanel?.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (
    profilePanel &&
    profileToggle &&
    !profilePanel.contains(event.target) &&
    !profileToggle.contains(event.target)
  ) {
    profilePanel.classList.remove("open");
  }
});
