$ (document).ready(function () {
  $("button#meow").click(function (){
    $("ul#cat").prepend("<li>MEEEEOOOOOOOW!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    });
  $("button#bark").click(function (){
    $("#dog").prepend("<li>Arf-Arf-Arf-Arf-Arf-Arf-Arf!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
  });
});
