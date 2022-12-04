console.log("init");


const elements = document.querySelectorAll('.titleProject');
elements.forEach(elem =>{
	elem.addEventListener("mouseenter",function(event){
		const bg = document.querySelector('.backchange')
		const color = event.target.getAttribute("data-color");
		bg.style.backgroundColor= color;
	},false)
});

document.getElementById("bchange").style.transition ="all .5s"