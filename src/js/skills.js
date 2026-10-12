import skills from "../data/skills.json" with { type: "json" };

/**
 *
 * @param {HTMLDivElement} parent
 * @param {string[]} fields
 */
function createFieldsAndAppend(parent, fields) {
  const p = document.createElement("p");
  p.textContent = "Fields";
  parent.append(p);
  p.style.marginBottom = "4px";
  p.style.fontSize = "16px";
  p.style.color = "#ee82ee";
  fields.forEach((field) => {
    const p2 = document.createElement("p");
    p2.textContent = field;
    p2.style.fontSize = "14px";
    parent.append(p2);
  });
}

/**
 *
 * @param {HTMLDivElement} parent
 * @param {{name: string, href: string}[]} langs
 */
function createLangsAndAppend(parent, langs) {
  const p = document.createElement("p");
  p.textContent = "Programming languages";
  p.style.marginTop = "4px";
  p.style.marginBottom = "4px";
  p.style.fontSize = "16px";
  p.style.color = "#1ee291";
  parent.append(p);
  langs.forEach((lang) => {
    const p2 = document.createElement("p");
    const a = document.createElement("a");
    a.textContent = lang.name;
    a.href = lang.href;
    a.setAttribute("target", "_blank");
    a.setAttribute("data-lang", lang.name.toLowerCase());
    p2.append(a);
    parent.append(p2);
  });
}

/**
 *
 * @param {HTMLDivElement} parent
 * @param {{name: string, href: string}[]} tech
 */
function createTechAndAppend(parent, tech) {
  const p = document.createElement("p");
  p.textContent = "Tech I have used so far";
  p.style.marginTop = "4px";
  p.style.marginBottom = "4px";
  p.style.color = "#ffa500";
  p.style.fontSize = "16px";
  parent.append(p);
  tech.forEach((t) => {
    const p2 = document.createElement("p");
    const a = document.createElement("a");
    a.textContent = t.name;
    a.href = t.href;
    a.setAttribute("target", "_blank");
    a.setAttribute("data-name", t.name.toLowerCase());
    p2.append(a);
    parent.append(p2);
  });
}

export function AddSkills() {
  const skillsContainer = document.querySelector(".skills");

  createFieldsAndAppend(skillsContainer, skills.fields);

  createLangsAndAppend(skillsContainer, skills.langs);

  createTechAndAppend(skillsContainer, skills.tech);
}
