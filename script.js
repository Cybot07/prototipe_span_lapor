const screens = [
  {
    id: "dashboard",
    label: "Dashboard"
  },
  {
    id: "form",
    label: "Buat Laporan"
  },
  {
    id: "status",
    label: "Status"
  },
  {
    id: "notif",
    label: "Notifikasi"
  },
  {
    id: "admin",
    label: "Admin"
  },
  {
    id: "petugas",
    label: "Petugas"
  }
];

const nav = document.getElementById("nav");

screens.forEach(screen => {

  const button = document.createElement("button");

  button.textContent = screen.label;

  button.onclick = () => {
    go(screen.id);
  };

  button.dataset.id = screen.id;

  nav.appendChild(button);

});

function go(id){

  document.querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  document.querySelector(
    `[data-screen="${id}"]`
  ).classList.add("active");

  document.querySelectorAll("#nav button")
    .forEach(btn => {

      btn.classList.remove("active");

      if(btn.dataset.id === id){
        btn.classList.add("active");
      }

    });

}

go("dashboard");
