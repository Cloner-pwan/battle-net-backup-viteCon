let hamburgerMenu = () => {
  const hamburgerMenu = document.querySelector("#hamburgerMenubtn");
  const hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
  const closeBtnTimes = document.querySelector("#closeBtnTimes");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenuItems.classList.remove("left-[-100%]");
    hamburgerMenuItems.classList.add("left-[0]");
  });

  closeBtnTimes.addEventListener("click", () => {
    hamburgerMenuItems.classList.remove("left-[0]");
    hamburgerMenuItems.classList.add("left-[-100%]");
  });
};

export default hamburgerMenu;
