let scroll = () => {
  window.addEventListener("scroll", () => {
    let container = document.querySelector(".search_container");
    if (window.scrollY > 50) {
        container.classList.add("duration-200");
        container.classList.add("translate-y-[-85px]");
    } else {
        container.classList.remove("translate-y-[-85px]");
        container.classList.add("duration-200");
    }
  });
};

export default scroll;