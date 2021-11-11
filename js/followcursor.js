$(document).mousemove(function(e) {
    $('.project-thumbnail').offset({
        left: e.pageX,
        top: e.pageY + 10
    });
});
