//readjust for better values;
//masonry
console.log("init");
$(document).ready(function(){
	var $grid =$('.photography-grid').masonry({
		columnWidth:'.photography-grid-sizer',
		itemSelector:('.photography-grid-item'),
		gutter:10,
		percentPosition:true

	});
// init images loaded
	$grid.imagesloaded().progress(function(){
	$grid.masonry('layout');
});
});

