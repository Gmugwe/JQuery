  $(document).ready(function() {
     $("p").click(function() {
       $("img").fadeToggle();
     });
   });

    $(document).ready(function() {
        $(".clickable").click(function() {
          $("#initially-showing").toggle();
          $("#initially-hidden").toggle();
          });
        });
