const base = "https://cdn.jsdelivr.net/gh/AlexGhit/marketing-flamingo";

// Utility to load JS
function loadJS(file) {
  const s = document.createElement("script");
  s.src = `${base}/src/${file}`;
  s.defer = true;
  document.body.appendChild(s);
}

// Auto-load all files in /src
const files = [
  "lang-switch.js",
  "lang-switch.js",
  "btn-txt-anim.js",
];

files.forEach(file => loadJS(file));
