const screens = [
  {id:'dashboard', label:'Dashboard Pelapor', url:'lapor.go.id/dashboard'},
  {id:'form', label:'Buat Laporan', url:'lapor.go.id/laporan/baru'},
  {id:'status', label:'Status & Antrean', url:'lapor.go.id/laporan/A-042'},
  {id:'notif', label:'Notifikasi', url:'lapor.go.id/notifikasi'},
  {id:'admin', label:'Verifikasi Admin', url:'admin.lapor.go.id/verifikasi'},
  {id:'petugas', label:'Dashboard Petugas', url:'instansi.lapor.go.id/tugas'}
];

const nav = document.getElementById('nav');

screens.forEach(s => {
  const btn = document.createElement('button');
  btn.textContent = s.label;
  btn.dataset.id = s.id;

  btn.addEventListener('click', () => {
    go(s.id);
  });

  nav.appendChild(btn);
});

function go(id){

  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const activeScreen =
      document.querySelector(`[data-screen="${id}"]`);

  activeScreen.classList.add('active');

  document.querySelectorAll('.nav-pills button')
    .forEach(btn=>{
      btn.classList.toggle(
        'active',
        btn.dataset.id === id
      );
    });

  const current =
      screens.find(x => x.id === id);

  document.getElementById('frame-url')
    .textContent = current.url;
}

/* Animasi angka statistik */
window.addEventListener('load', () => {

  document.querySelectorAll('.stat-card .num')
  .forEach(el => {

    const value = el.textContent.trim();

    if(!/^\d+$/.test(value)) return;

    let start = 0;

    const end = parseInt(value);

    const timer = setInterval(() => {

      start++;

      el.textContent = start;

      if(start >= end){
        clearInterval(timer);
      }

    }, 40);

  });

});

/* Simulasi notifikasi realtime */
setInterval(() => {

  const notifPage =
    document.querySelector('[data-screen="notif"]');

  if(!notifPage) return;

  document.title =
    document.title.includes('🔔')
      ? 'Prototipe SPAN Lapor+'
      : '🔔 Prototipe SPAN Lapor+';

}, 3000);

go('dashboard');
