let languageBtn = document.querySelectorAll(".language-btn");

let chosenLanguage;

languageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // chosenLanguage = btn.parentElement.dataset.language;
    // console.log(chosenLanguage);
    location.assign("/" + btn.parentElement.dataset.language + ".html");
  });
});

console.log("default: " + chosenLanguage);

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
