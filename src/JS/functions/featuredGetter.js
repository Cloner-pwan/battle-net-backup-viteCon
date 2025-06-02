let featuredGetter = async () => {
  try {
    function discount(price) {
      if (typeof price !== "string" || price.trim() === "Play For Free") {
        return null;
      }
      let numericPrice = parseFloat(price.replace("$", ""));
      if (isNaN(numericPrice)) {
        return null;
      }
      return Math.trunc(numericPrice);
    }
    let req = await fetch("http://localhost:3001/games");
    let res = await req.json();
    let filteredGames = res.filter(
      (feature) => Number(feature.id) > 10 && Number(feature.id) <= 20
    );
    let data = filteredGames.map((elem) => {
      let discountValue = discount(elem.price);
      return `<div class="card w-[300px] h-[400px] bg-[#292b33] cursor-pointer flex flex-col">
      <img src="${elem.image}" alt="pic" class="w-full h-[169.19px]">
      <div class="w-full h-[230.42px] p-6 flex flex-col gap-2 hover:bg-[#383b45] hover:rounded-b-lg duration-300 relative group">
        <p class="text-[12px] text-[#ffffffB8] group-hover:translate-y-[-5px] duration-300 font-[object-sans]"> ${
          elem.gameName
        } </p>
        <p class="title text-[16px] text-[#ffffffD6] font-[object-sans] group-hover:translate-y-[-5px] duration-300">${
          elem.title
        }</p>
        <p class="desc text-[12px] text-[#ffb400] font-[nato-sans-reg] line-clamp-2 group-hover:translate-y-[-5px] duration-300">${
          elem.desc
        }</p>
        <p class="category text-[12px] text-[#ffffffB8] font-[nato-sans-reg] group-hover:translate-y-[-5px] duration-300">${
          elem.categorization
        }</p>
        <div class="price w-full h-fit mt-4 flex justify-between items-center absolute bottom-2 left-0 px-6">
          <p class="text-[16px] text-[#6cdb00] font-[object-sans] inline-block">${
            elem.price
          }</p>
          ${
            discountValue !== null
              ? `<div class="discount w-[45.38px] h-[20.5px] bg-[#6CDB00] rounded-[4px] flex justify-center items-center">
              <p class="text-[12px] text-[#1a1c21] font-[object-sans]">${discountValue}%</p>
            </div>`
              : ""
          }
        </div>
    </div>
    </div>`;
    });
    document
      .querySelector("#FeaturedGames")
      .insertAdjacentHTML("beforeend", data.join(""));
  } catch (error) {
    console.log(`Error occured! : ${error}`);
  }
};

export default featuredGetter;
