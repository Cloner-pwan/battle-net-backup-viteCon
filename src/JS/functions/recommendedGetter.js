let recommendedGetter = async () => {
  let req = await fetch("http://localhost:3001/games");
  let res = await req.json();
  let data = res.map((elem) => {
    return `<div class="card w-[300px] h-[400px] bg-[#292b33] flex flex-col">
      <img src="${elem.image}" alt="pic" class="w-full h-[169.19px]">
      <div class="w-full h-[230.42px] p-6 flex flex-col gap-2 relative">
        <p class="text-[12px] text-[#ffffffB8] font-[object-sans]"> ${elem.gameName} </p>
        <p class="title text-[16px] text-[#ffffffD6] font-[object-sans]">${elem.title}</p>
        <p class="desc text-[12px] text-[#ffb400] font-[nato-sans-reg] line-clamp-2">${elem.desc}</p>
        <p class="category text-[12px] text-[#ffffffB8] font-[nato-sans-reg]">${elem.Category}</p>
        <div class="price w-full h-fit mt-4 flex justify-between items-center absolute bottom-2 left-0 px-6">
          <p class="text-[16px] text-[#6cdb00] font-[object-sans] inline-block">${elem.price}</p>
          <div class="discount w-[45.38px] h-[20.5px] bg-[#6CDB00] rounded-[4px] flex justify-center
          items-center">
        <p class="text-[12px] text-[#1a1c21] font-[object-sans]">-40%</p></div>
        </div>
    </div>
    </div>`;
  });
  document
    .querySelector("#recommendedGames")
    .insertAdjacentHTML("beforeend", data.join(""));
};
export default recommendedGetter;