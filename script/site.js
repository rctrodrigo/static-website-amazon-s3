// Set title tag content
const author = "Raven Rodrigo";
const projectTitle = "Portfolio Static Website";
const titleTagContent = author + " | " + projectTitle;
document.title = titleTagContent;

/* Footer */
let footer = document.querySelector("footer");
let copyrightYear = new Date().getFullYear();
const footerSpan = `<span id="copyright">© ${copyrightYear} ${author}</span>`;
footer.innerHTML = footerSpan;

const footerElement = document.createElement("footer");
