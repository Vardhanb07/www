import projects from "../data/projects.json" with { type: "json" };
import {
  CreateLinkAndAppendToParent,
  CreatePAndAppendToParent,
} from "../utils";

/**
 *  @param {HTMLDivElement} parent
 *  @param {{name: string, href: string}[]?} frameworks
 *  @param {{name: string, href: string}[]?} databases
 *  @param {Map<string, string>?} attributes
 */
function createTechAndAppend(parent, frameworks, databases, attributes) {
  if (!frameworks && !databases) {
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Built with ";
  if (frameworks) {
    frameworks.forEach((framework, idx) => {
      const a = document.createElement("a");
      a.textContent = framework.name;
      a.href = framework.href;
      a.setAttribute("data-name", framework.name.toLowerCase());
      a.setAttribute("target", "_blank");
      p.appendChild(a);
      if (databases) {
        p.append(", ");
      } else if (idx != frameworks.length - 1) {
        p.append(", ");
      }
    });
  }
  if (databases) {
    databases.forEach((database, idx) => {
      const a = document.createElement("a");
      a.textContent = database.name;
      a.href = database.href;
      a.setAttribute("data-name", database.name.toLowerCase());
      a.setAttribute("target", "_blank");
      p.appendChild(a);
      if (idx != databases.length - 1) {
        p.append(", ");
      }
    });
  }
  parent.appendChild(p);
  if (attributes) {
    for (const [k, v] of attributes) {
      p.setAttribute(k, v);
    }
  }
}

export function AddProjects() {
  const projectsContainer = document.querySelector(".projects");
  projects.forEach((project, idx) => {
    const projectElement = document.createElement("div");
    projectElement.setAttribute("class", "project");

    CreateLinkAndAppendToParent(
      projectElement,
      project.name,
      project.href,
      new Map([
        ["class", "project_name"],
        ["target", "_blank"],
      ]),
    );

    const langs = document.createElement("p");
    project.langs.forEach((lang) => {
      CreateLinkAndAppendToParent(
        langs,
        lang.name,
        lang.href,
        new Map([
          ["class", "project_lang_link"],
          ["data-lang", lang.name.toLowerCase()],
          ["target", "_blank"],
        ]),
      );
    });
    projectElement.appendChild(langs);

    CreatePAndAppendToParent(projectElement, project.desc);

    projectsContainer.appendChild(projectElement);

    createTechAndAppend(
      projectsContainer,
      project.frameworks,
      project.database,
    );

    if (idx != projects.length - 1) {
      projectsContainer.appendChild(document.createElement("hr"));
    }
  });
}
