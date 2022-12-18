console.log("init");
const elements = document.querySelectorAll(".titleProject");
elements.forEach((e) => {
    e.addEventListener(
        "mouseenter",
        function (e) {
            let t = document.querySelector(".backchange"),
                l = e.target.getAttribute("data-color");
            t.style.backgroundColor = l;
        }
    );
}),
    (document.getElementById("bchange").style.transition = "all .5s");
