let accountBtn = () => {
  let accountBtn = document.querySelector("#accountBtn");
  let accountBtnPanel = document.querySelector("#accountBtnPanel");
  let hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
  accountBtn.addEventListener("click", () => {
    if (hamburgerMenuItems.classList.contains("left-[0]")) {
        hamburgerMenuItems.classList.remove("left-[0]");
        hamburgerMenuItems.classList.add("left-[-100%]");
    }  
    accountBtnPanel.classList.add("right-[0]");
    console.log(hamburgerMenuItems);
  });
};

export default accountBtn;
