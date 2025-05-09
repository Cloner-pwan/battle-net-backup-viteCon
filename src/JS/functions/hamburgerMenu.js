let hamburgerMenu = () => {
  const hamburgerMenu = document.querySelector("#hamburgerMenubtn");
  const hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
  const closeBtnTimes = document.querySelector("#closeBtnTimes");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenuItems.style.left = "0";
  });

  closeBtnTimes.addEventListener("click", () => {
    hamburgerMenuItems.style.left = "-100%";
  });
};

export default hamburgerMenu;