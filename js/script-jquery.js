// let sliderItems = $(".marks-slider-box-item.normal");
// let sliderBox = $(".marks-slider-box");
// let now = 0;
// let sliderBullets = $(".marks-slider-bullets-item");
// let siID = setInterval(function(){
//     $(".marks-slider-arrow-item.right").click();
// }, 2000);
// sliderBox.css("width", (sliderItems.length + 2) * 100 + "%");

// console.dir(sliderItems);

// $(".slider-arrow-item.left").click(function(event){
//     clearInterval(siID)

//     siID = setInterval(function(){
//         $(".slider-arrow-item.right").click();
//     }, 2000);
//     if( now ===  0 ){
//         now --;
//         sliderBox.animate({
//             left: -100 * (now + 1 ) + "%"
//         },500, function(){
//             now = sliderItems.length - 1;
//             sliderBox.css("left", -100 *( now + 1 ) + "%");
//             sliderBullets.removeClass("active");
//             sliderBullets.eq(now).addClass("active");
//         });
//     }else{
//         now--;
//         sliderBox.animate({
//             left: -100 * (now + 1 ) + "%"
//         })   
//         sliderBullets.removeClass("active");
//         sliderBullets.eq(now).addClass("active");
//     }
// });

// $(".slider-arrow-item.right").click(function(event){
//     clearInterval(siID)

//     siID = setInterval(function(){
//         $(".slider-arrow-item.right").click();
//     }, 2000);

//     if( now == sliderItems.length - 1 ){
//         now++;
//         sliderBox.animate({
//             left: -100 * (now + 1) + "%"
//         }, 500, function(){
//             now = 0;
//             sliderBox.css("left", -100 * (now + 1 ) + "%")
            
//             sliderBullets.removeClass("active");
//             sliderBullets.eq(now).addClass("active");
//         });
//     }else{
//         now++;
//         sliderBox.animate({
//             left: -100 * (now + 1 ) + "%"
//         });
//         sliderBullets.removeClass("active");
//         sliderBullets.eq(now).addClass("active");
//     }
// });

// sliderBullets.click(function(event){
//     clearInterval(siID)

//     siID = setInterval(function(){
//         $(".slider-arrow-item.right").click();
//     }, 2000);

//     let clickNum = sliderBullets.index( $(this) );
//     now = clickNum;
//     sliderBox.animate({
//         left: -100 * (now + 1) + "%"
//     });
//     sliderBullets.removeClass("active");
//     $(this).addClass("active");
// });