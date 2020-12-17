/* REFERENCES */
const cardFooter = document.getElementById("card-footer");
const cardInfo = document.getElementById("card-info");
const mobileSocial = document.getElementById("mobile-social");
const mobileSocialBtn = document.getElementById("mobile-social-btn");

const desktopSocial = document.getElementById("desktop-social");
const desktopSocialBtn = document.getElementById("desktop-social-btn");

/* EVENT LISTENERS */
mobileSocialBtn.addEventListener("click", (e) => {
  document.activeElement.blur();

  cardFooter.classList.toggle("bg-dark-grayish-blue");
  mobileSocial.classList.toggle("hidden");
  cardInfo.classList.toggle("hidden");

  const isSocialClosed = mobileSocialBtn.classList.contains(
    "bg-light-grayish-blue"
  );

  const btnSvg = mobileSocialBtn.children[0];

  if (isSocialClosed) {
    mobileSocialBtn.classList.remove("bg-light-grayish-blue");
    mobileSocialBtn.classList.add("bg-grayish-blue");
    mobileSocialBtn.classList.remove("focus:ring-dark-grayish-blue");
    mobileSocialBtn.classList.add("focus:ring-white");
    btnSvg.classList.remove("text-gray-500");
    btnSvg.classList.add("text-white");
  } else {
    mobileSocialBtn.classList.remove("bg-grayish-blue");
    mobileSocialBtn.classList.add("bg-light-grayish-blue");
    mobileSocialBtn.classList.remove("focus:ring-white");
    mobileSocialBtn.classList.add("focus:ring-dark-grayish-blue");
    btnSvg.classList.remove("text-white");
    btnSvg.classList.add("text-gray-500");
  }
});

desktopSocialBtn.addEventListener("click", () => {
  document.activeElement.blur();
  desktopSocial.classList.toggle("sm:block");
});
