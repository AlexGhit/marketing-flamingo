const base = "https://cdn.jsdelivr.net/gh/AlexGhit/marketing-flamingo";

// Load JS file
function loadJS(file) {
  const s = document.createElement("script");
  s.src = `${base}/src/${file}`;
  s.defer = true;
  document.body.appendChild(s);
}

// Load CSS file
function loadCSS(file) {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = `${base}/src/${file}`;
  document.head.appendChild(l);
}

// Files to load globally
const files = [
  { type: "js", file: "lang-switch.js" },
  { type: "css", file: "btn-animate.css" },
  { type: "js", file: "btn-animate.js" },
  { type: "js", file: "loader.js" }, // optional
];

// Load everything
files.forEach(item => {
  if (item.type === "js") loadJS(item.file);
  if (item.type === "css") loadCSS(item.file);
});
