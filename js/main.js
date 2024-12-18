//nav bar
$("#open ,.fa-xmark").on("click", function () {
  $(".contain").animate({
    width: "toggle"
  }, 1000)
  console.log("hello");

})

//navbar scroll nice
$(".navbar a").on("click", function (e) {
  let section = $(e.target).attr("href")
  let sectionOfsset = $(section).offset().top;
  $("html , body").animate({
    scrollTop: sectionOfsset
  }, 1000)
  console.log(sectionOfsset)

})

//navbar scroll

$(window).on("scroll",function(){
 let x= ($("#details").offset().top)/2;
 let y=$(window).scrollTop()
 console.log(y);
 if(y>x){
  $("#open").css("color","blue")
 }
 else
 {
  $("#open").css("color","white")
 }
 
  
})
//details

$(".title").on("click", function () {
  $(this).next().animate({
    height: "toggle"
  });
  $(".no-padd").not($(this).next()).slideUp()

})

//textarea

$("textarea").on("keyup", function () {
  let length = $(this).val().length;
  $("#remain").text(100 - length <= 0 ? "Your Available Character Finished" : 100 - length)

  console.log();

})

