let Rootwriter = (...components) => {
    components.forEach((elems)=>{
        document.querySelector("#root").insertAdjacentHTML("beforeend",elems);
    });
};


export default Rootwriter;