
//i want all columns to be of equal length after shuffling.
//this is something you can work on for 2022
var cards = $(".grid-item");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

// $(function () {
//     var parent = $(".grid-wrapper");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });