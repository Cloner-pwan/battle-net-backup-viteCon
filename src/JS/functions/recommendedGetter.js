let recommendedGetter = async () => {
  let req = await fetch("http://localhost:3001/games");
  let res = await req.json();
  let data = res.map((elem) => {
    return `<div class="card w-[300px] h-[400px] bg-red-500 flex flex-col relative">
<img src="${elem.image}" alt="${elem.title}" class="w-[300px] h-[170px]">
<div class="square w-full h-full bg-amber-600 p-6 group duration-300">
  <p class="gameName">${elem.gameName}</p>
  <p class="title">${elem.title}</p>
  <p class="description">${elem.desc}</p>
  <div class="w-full h-fit bg-red-400">
    <p class="price absolute bottom-6">${elem.price}</p>
  </div>
</div>
</div>`;
  });
  document
    .querySelector("#recommendedGames")
    .insertAdjacentHTML("beforeend", data.join(""));
};
export default recommendedGetter;