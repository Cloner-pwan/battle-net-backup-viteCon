let panelItems = () => {
  document.querySelectorAll(".panelItems").forEach((panelItem) => {
    panelItem.addEventListener("click", () => {
      document.querySelectorAll(".panelItems .items").forEach((item) => {
        item.classList.remove("max-h-[56px]");
        item.classList.remove("p-3");
        item.classList.add("max-h-0");
      });

      panelItem.querySelectorAll(".items").forEach((item) => {
        item.classList.toggle("max-h-0");
        item.classList.toggle("max-h-[56px]");
        item.classList.toggle("p-3");
      });
    });
  });
};

export default panelItems;