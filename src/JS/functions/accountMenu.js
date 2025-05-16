let accountBtn = () => {
  const accountBtn = document.querySelector("#accountBtn");
  const accountBtnPanel = document.querySelector("#accountBtnPanel");
  const hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
  const closebtnAccount = document.querySelector("#closebtnAccount");
  accountBtn.addEventListener("click", () => {
    if (hamburgerMenuItems.classList.contains("left-[0]")) {
      hamburgerMenuItems.classList.remove("left-[0]");
      hamburgerMenuItems.classList.add("left-[-100%]");
    }
    accountBtnPanel.classList.add("right-[0]");
    console.log(hamburgerMenuItems);
  });
  closebtnAccount.addEventListener("click", () => {
    accountBtnPanel.classList.remove("right-[0]");
    accountBtnPanel.classList.add("right-[-100%]");
  });
};

export default accountBtn;
