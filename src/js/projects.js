import projects from "../data/projects.json" with { type: "json" };
import {
  CreateLinkAndAppendToParent,
  CreatePAndAppendToParent,
} from "../utils";

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

    if (idx != projects.length - 1) {
      projectsContainer.appendChild(document.createElement("hr"));
    }
  });
}
