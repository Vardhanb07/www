import hobbies from "../data/hobbies.json" with { type: "json" };

/**
 *
 * @param {HTMLDivElement} parent
 * @param {string} desc
 * @param {string} href
 * @param {string} keyword
 */
function createHobbyAndAppend(parent, desc, href, keyword) {
  const p = document.createElement("p");
  const words = desc.split(" ");
  words.forEach((word) => {
    if (keyword.toLowerCase() === word.toLowerCase()) {
      const a = document.createElement("a");
      a.textContent = word;
      a.href = href;
      p.append(a);
      p.append(" ");
    } else {
      p.append(word);
      p.append(" ");
    }
  });
  parent.append(p);
}

export function AddHobbies() {
  const hobbiesContainer = document.querySelector(".hobbies");
  hobbies.forEach((hobby) => {
    createHobbyAndAppend(
      hobbiesContainer,
      hobby.desc,
      hobby.href,
      hobby.keyword,
    );
  });
}
