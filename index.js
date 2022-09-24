const languageBtn = document.querySelectorAll(".language-btn");
const langaugeDivider = document.querySelector(".language-divider");
const arrowDown = document.querySelector(".arrow-down");

languageBtn.forEach((btn) => {
  btn.onclick = () => {
    // chosenLanguage = btn.parentElement.dataset.language;
    // console.log(chosenLanguage);
    location.assign("/" + btn.parentElement.dataset.language + ".html");
  };
});

document.addEventListener("alpine:init", () => {
  Alpine.store("title", {
    value: "Node",
    change() {
      this.value = "PHP" ? "NODE" : "PHP";
    },
    getTitle() {
      return `Aung Moe Oo's Profile ${this.value}`;
    },
  });
});

langaugeDivider.onscroll = () => {
  if (langaugeDivider.scrollTop === 0) {
    arrowDown.classList.remove("rotate");
  } else if (
    langaugeDivider.scrollTop * 2 - 2 ===
    langaugeDivider.scrollHeight
  ) {
    arrowDown.classList.add("rotate");
  }
};

arrowDown.onclick = () => {
  if (langaugeDivider.scrollTop === 0) {
    langaugeDivider.scrollTop = langaugeDivider.scrollHeight / 1.5;
    return;
  }
  langaugeDivider.scrollTop = 0;
};
