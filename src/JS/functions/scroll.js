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

// export default scroll;
// let scroll = () => {
//   window.addEventListener("scroll", () => {
//     let container = document.querySelector(".search_container");

//     // Check if screen width is at least 1024px (lg breakpoint)
//     if (window.matchMedia("(min-width: 720px)").matches) {
//       if (window.scrollY > 50) {
//         container.classList.add("translate-y-[-75px]");
//         container.classList.add("duration-200");
//       } else {
//           container.classList.add("duration-200");
//         container.classList.remove("translate-y-[-75px]");
//       }
//     }
//   });
// };

export default scroll;