$ (document).ready(function () {
  $("button#cat").click(function (){
    $("ul#catphoto").prepend("<li><img width=250px src=img/cat.jpeg></li>");
    $("ul#catphoto").children("li").first().click(function() {
      $(this).remove();
      });
    });
  $("button#dog").click(function (){
    $("#dogphoto").prepend("<li><img width=250px src=img/dog.jpeg></li>");
    $("ul#dogphoto").children("li").first().click(function() {
      $(this).remove();
      });
  });
});
