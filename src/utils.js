/**
 * @description creates a link and appends it as a child to the parent
 *
 * @param {HTMLDivElement} parent - parent element
 * @param {string} name - name of the link
 * @param {string} href - href of the link
 * @param {Map<string, string>} attributes - attributes of the link
 */
export function CreateLinkAndAppendToParent(parent, name, href, attributes) {
  const a = document.createElement("a");
  a.textContent = name;
  a.href = href;
  if (attributes) {
    for (const [k, v] of attributes) {
      a.setAttribute(k, v);
    }
  }
  parent.appendChild(a);
}

/**
 * @description creates a paragraph and appends it as a child to the parent
 *
 * @param {HTMLDivElement} parent
 * @param {string} content
 * @param {Map<String, String>?} attributes
 */
export function CreatePAndAppendToParent(parent, content, attributes) {
  const p = document.createElement("p");
  p.textContent = content;
  if (attributes) {
    for (const [k, v] of attributes) {
      p.setAttribute(k, v);
    }
  }
  parent.appendChild(p);
}
