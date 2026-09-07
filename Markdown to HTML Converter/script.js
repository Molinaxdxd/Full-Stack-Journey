const mdInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
  let html = mdInput.value;

  // Headings (h3 first to avoid conflicts)
  html = html.replace(/^\s*### (.*)/gm, "<h3>$1</h3>");
  html = html.replace(/^\s*## (.*)/gm, "<h2>$1</h2>");
  html = html.replace(/^\s*# (.*)/gm, "<h1>$1</h1>");

  // Bold 
  html = html.replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.*)__/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*)\*/g, "<em>$1</em>");
  html = html.replace(/_(.*)_/g, "<em>$1</em>");

  // Images 
  html = html.replace(/!\[(.*)\]\((.*)\)/g, "<img alt='$1' src='$2'>")

  // Links
  html = html.replace(/\[(.*)\]\((.*)\)/g, "<a href='$2'>$1</a>");

  // Blockquote
  html = html.replace(/^\s*> (.*)/gm, "<blockquote>$1</blockquote>");

  return html;
}

function translateHTML() {
  let result = convertMarkdown();
  htmlOutput.textContent = result;
  htmlPreview.innerHTML = result;
}

mdInput.addEventListener("input", translateHTML);