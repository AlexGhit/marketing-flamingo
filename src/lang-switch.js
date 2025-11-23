// go to french (/fr/)
document.addEventListener('click', function (e) {
  const elFr = e.target.closest('[data-go-french]');
  if (elFr) {
    const url = window.location.pathname;
    window.location.href = '/fr' + url;
  }
});

// go to english (remove /fr)
document.addEventListener('click', function (e) {
  const elEn = e.target.closest('[data-go-english]');
  if (elEn) {
    const url = window.location.pathname.replace(/^\/fr/, '');
    window.location.href = url || '/';
  }
});
