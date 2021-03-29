  $(document).ready(function(){
    $("#sandmail").click(function(e){
    var name =$("#name").val().trim();
    var epasts=$("#email").val().trim();
    var subject =$("#subject").val().trim();
    var mass = $("#message").val().trim();
  if(name ==""){
          $("#errorname").text("Your name");
          $('#errorname').removeClass('hidden');
        }
        else {
          $("#errorname").text("");
           $('#errorname').addClass('hidden');
        }
  if(subject==""){
          $("#errormulic").text("*Email");
          $('#errormulic').removeClass('hidden');
        }
        else {
          $("#errormulic").text("");
          $('#errormulic').addClass('hidden'); }
  if(mass =="") {
          $("#errorphone").text("*Телефон");
          $('#errorphone').removeClass('hidden');
                }
        else {
          $("#errorphone").text("");
          $('#errorphone').addClass('hidden');
       }
if(epasts.split("@").length - 1 == 0|| epasts.split(".").length - 1 ==0){
         $("#erroremail").text("*Введите е-mail");
         $('#erroremail').removeClass('hidden');
         epasts = "";
       } else{
         $("#erroremail").text("");
         $('#erroremail').addClass('hidden');
      }
    if ((name !="") && (subject!="") && (mass!="") && (epasts!=""))
        {
       		$.ajax({
              url: "/forms",
        		  type: "POST",
              cahse:  false,
              processData: false,
              contentType: false,
              data: {
                "name": name,
                "subject": subject,
                "mass": mass,
                "epasts": epasts
              },
              beforeSend: function(){
              $('#sandmail').attr ("disabled", "disabled");
              $(".retbutton").css('background-color','#FF0000');
              },
              success: function(data){
                if (data) {
                				$('#name').val ("");
                				$('#email').val ("");
                				$('#subject').val ("");
                        $('#mass').val ("");
                    		$('#sandmail').removeAttr("disabled");
                        $(".retbutton").val(function (){
                          $(".retbutton").css('background-color','#ff9700');
                          $(".retbutton").css('color','#fff');
                          $("#sandmail").html("Отправлено");
                        });
                        $(".retbutton").click(function (){
                          $(".retbutton").css('background-color','#fff');
                          $(".retbutton").css('color','#44b5c4');
                          $("#sandmail").html("Получить");
                        });
                        $('.js-overlay-campaign').fadeOut();
                    } else {
                          alert("");
                          $('#sandmail').removeAttr("disabled");
                      }
                  }
      			}) ;
          }
      });
      return false;
  });
