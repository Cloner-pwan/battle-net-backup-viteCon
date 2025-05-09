let panelItems = () => {
  document.querySelectorAll(".panelItems").forEach((panelItem) => {
    panelItem.addEventListener("click", () => {
      // Hide all panelItems
      document.querySelectorAll(".panelItems .items").forEach((item) => {
        item.classList.add("hidden");
      });
      panelItem.querySelectorAll(".items").forEach((item) => {
        item.classList.toggle("hidden");
      });
    });
  });
};

export default panelItems;