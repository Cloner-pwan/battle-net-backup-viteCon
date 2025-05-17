let activation = () => {
  const searchField = document.querySelector("#searchField");
  searchField.addEventListener("focus", () => {
    document.querySelector(".searchBar").classList.remove("bg-[#292b33]");
    document.querySelector(".searchBar").classList.add("bg-[#383b45]");
  });
  searchField.addEventListener("blur", () => {
    document.querySelector(".searchBar").classList.remove("bg-[#383b45]");
    document.querySelector(".searchBar").classList.add("bg-[#292b33]");
  });
};
export default activation;
