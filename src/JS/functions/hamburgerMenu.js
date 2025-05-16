let hamburgerMenu = () => {
  const hamburgerMenu = document.querySelector("#hamburgerMenubtn");
  const hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
  const closeBtnTimes = document.querySelector("#closeBtnTimes");
  const accountBtnPanel = document.querySelector("#accountBtnPanel");
  hamburgerMenu.addEventListener("click", () => {
    if (accountBtnPanel.classList.contains("right-[0]")) {
      accountBtnPanel.classList.remove("right-[0]");
      accountBtnPanel.classList.add("right-[-100%]");
      hamburgerMenuItems.classList.add("left-[0]");
    }
    hamburgerMenuItems.classList.add("left-[0]");
  });

  closeBtnTimes.addEventListener("click", () => {
    hamburgerMenuItems.classList.remove("left-[0]");
    hamburgerMenuItems.classList.add("left-[-100%]");
  });
};

export default hamburgerMenu;
