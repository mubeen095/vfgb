var timer = '';
$(document).ready(function(){
    $("#reg-resend1").hide();
   // document.title = "ho";
    if(typeof showreg !== 'undefined'){
        $("#modal-signup").addClass("is-active");
    }
});
/*hamburger trigger*/
$(".trigger1").on("click", function(){
        $(".trigger1").removeClass("hide");
        $(this).addClass('hide');
        if($(".menu-card").hasClass("in")){
            $(".menu-card").slideDown("slow");
            $(".menu-card").removeClass("in")
        }
        else{
            $(".menu-card").slideUp("slow");
            $(".menu-card").addClass("in");
        }
});
/*Drowp Down*/
function drpFunct() {
    if (window.innerWidth >= 992) {
$(".drp-down").hover(function(){
  $(".drp-menu").toggle();
});
    }else{
$(".drp-draw").click(function(){
  $(".drp-menu").slideToggle("slow");
  $(this).find(".fa-solid").toggleClass('fa-minus');
  $(this).find(".fa-solid").toggleClass('fa-plus');
});
}
}
$(function(){
    if (window.innerWidth >= 992) {
     $(".item-group").hover(function(){
      $(this).find(".sub-menu").fadeIn();
      $(this).find(".sub-menu").css("display","flex");
    }
    ,function(){
        $(this).find(".sub-menu").fadeOut();
    }
  );}else{

    $(".item-group").click(function(){
      $(this).find(".sub-menu").slideToggle("slow");
    }
    ,function(){
        $(this).find(".sub-menu").slideToggle("slow");
  $(this).find(".fa-solid").toggleClass('fa-minus');
  $(this).find(".fa-solid").toggleClass('fa-plus');
    }
  );
}
}

);
/*Login Modal*/
$("#btn-log").click(function(){
    $("#modal-signup").addClass("is-active");
});
$(".modal-close").click(function(){
     closeall()
});

function closeall(){
    $("#email").attr("disabled", false);
    $("#mobile").attr("disabled", false);
    $("#passw").attr("disabled", false);
    $(".otp-sent-msg").css('display','none');
    $("#fnumber").attr("disabled", false);
    $(".email-grp").css("background-color","#fff");
    $(".mobile-grp").css("background-color","#fff");
    $(".passw-grp").css("background-color","#fff");
    $(".frp-gp").css("background-color","#fff");
    $("#uemail").css("background-color","#fff");
    $("#uemail").attr("disabled", false);
    $('#uemail').val('');
    $('#upassw').val('');
    $("#email").val('');
    $("#mobile").val('');
    $("#passw").val('');
    $(".verify-form").css("display","none");
    $(".otploginonly").css("display","none");
    $("#reg-resend1").css("display","none");
    $("#bt-login-step2otp").css("display","none");
    $("#bt-login-step2pass").css("display","none");
    $(".passloginonly").css("display","none");
    $("#bt-login-step1").css("display","flex");
    $("#bt-login-step1").html('Next');
    $(".frp-err").html("");
    $(".err-msg").html("");
    $(".errormsg").html("");
    $("#btn-fp").html("Generate OTP");
    $(".btn-otpgrp").css("display","flex");
    $(".modal").removeClass("is-active");
    $(".fp-form").removeClass("bl-active");
    $(".otp-grp").removeClass("bl-active");
    $(".new-passw").removeClass("bl-active");
    $(".sign-form").css("display","block");
    $(".Login-form").css("display","none");
    $("#btn-sign").css("display","flex");
    $("#fnumber").val('');
    $("#fotp").val('');
    $("#pass-n").val('');
    $("#pass-r").val('');
};
$("#btn-login").click(function(){
    $(".Login-form").css("display","block");
    $(".sign-form").css("display","none");
    $(".passloginonly").css("display","none");
    $(".otploginonly").css("display","none");
    $("#reg-resend1").css("display","none");
    $("#bt-login-step2pass").css("display","none");
    $("#bt-login-step2otp").css("display","none");
    $("#bt-login-step1").show();
    $("#uemail").css("background-color","#fff");
    $("#uemail").attr("disabled", false);
});
$("#btn-register").click(function(){
    $(".Login-form").css("display","none");
    $(".sign-form").css("display","block");
    $(".otp-sent-msg").css("display","none");
});

/*page loader*/
function pageloader(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
    },500);
};

/*scroll to top*/
$(".content-group").scroll(function() {
    if ($(this).scrollTop() > $(window).height() - 500) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    } 
});
 
var anchor = $("#reg-resend");

//validation
$("#btn-sign").on("click", function(){
    $("#btn-sign").html("Please wait...");
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var passw = $("#passw").val();
    $(".errormsg").css("display","block");
    
    if(email !='' && mobile !='' && passw !='') {
     var efilter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
     var pfilter = /^\d{10}$/;
         $("#btn-sign").html("Sign Up");
	 if(!efilter.test(email)){
	     $('.errormsg').html('Enter Valid Email Address'); 
	}
	 else if(!pfilter.test(mobile)){
	     $('.errormsg').html('Enter Valid Phone Number (10 digits)');
	 }
	 else{
	     var url = "/cgi/register.cgi";      
	     var data = {};
	     data["email"] = email;
	     data["mobile"] = mobile;
	     data["passw"] = passw;
	     $.post(url, data, function(result){
		 var result = result.trim();
		 if(result == "1"){
		    $("#email").attr("disabled", true);
		    $("#mobile").attr("disabled", true);
		    $("#passw").attr("disabled", true);
	            $(".verify-form").css("display","block");
	            $("#btn-sign").css("display","none");
	            $(".email-grp").css("background-color","aliceblue");
	            $(".mobile-grp").css("background-color","aliceblue");
	            $(".passw-grp").css("background-color","aliceblue");
		    $('.errormsg').html('');
          anchor.addClass('disabled'); // Apply disabled class

             // Enable the anchor tag after 60 seconds
          setTimeout(function() {
            anchor.removeClass('disabled'); // Remove disabled class
          }, 60000);

          // Start a 60-second countdown timer
          var countdown = 60;
          if(timer != ''){
              clearInterval(timer);
          }
          timer = setInterval(function() {
            countdown--;
            if (countdown <= 0) {
              clearInterval(timer);
              anchor.html("Resend OTP"); // Reset the anchor tag text
            } else {
              anchor.html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
            }
          }, 1000);

		}
		else{
		    $('.errormsg').html(result);
		}
	    });
	}
    }
    else{
	 $("#btn-sign").html("SignUp");
	 $('.errormsg').html('Fields cannot be empty');
    }
});

/*Login*/
$("#bt-login").on("click", function(){
    $("#bt-login").html("Please wait...");
    var udata = $("#uemail").val();
    var passw = $("#upassw").val();
    $(".err-msg").css("display","block");
   
    if(udata !='' && passw !='') {
	     var url = "/cgi/login.cgi";      
	     var data = {};
	     data["userdata"] = udata;
	     data["passw"] = passw;
	     $.post(url, data, function(result){
		 var result = result.trim();
		 if(result == "1"){
		    $('.err-msg').html("");
		    $('#uemail').val('');
		    $('#upassw').val('');
	            $("#bt-login").html("Sign In");
    		    $("#modal-signup").removeClass("is-active");
		    window.location.href= redurl;
		 }else{
	            $("#bt-login").html("Sign In");
		    $('.err-msg').html(result);
		 }
	     });
	}
    else{
	 $("#bt-login").html("Sign In");
	 $('.err-msg').html('Fields cannot be empty');
    }

});


/*OTP validation*/
$("#submit-otp").on("click", function(){
    $("#submit-otp").html("Please wait...");
    var otp = $("#otp").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var passw = $("#passw").val();
    $(".lbl-err").css("display","block");
    var ofilter = /^\d{6}$/;
    var ostatus = ofilter.test(otp);
    if(otp != ''){
	var url = "/cgi/otpregister.cgi";	
	var data = {};
	data["mobile"] = mobile;
	data["userotp"] = otp;
	data["email"] = email;
	data["passw"] = passw;
    data["reftag"] = reftag;
        console.log(data);
	$.post(url, data, function(result){
	   var result = result.trim();
	   if(result == "1"){
		    $("#email").val('');
		    $('#mobile').val('');
    		    $("#passw").val('');
    		    $("#otp").val('');
		    $('.lbl-err').html('');
		    $("#submit-otp").html("Submit");
    		    $("#modal-signup").removeClass("is-active");
		    window.location.href = redurl;
           }
	   else{
		$("#submit-otp").html("Submit");
		$('.lbl-err').html("Enter Valid OTP");
           }
	})
    }
    else{
	$("#submit-otp").html("Submit");
	$('.lbl-err').html('Please Enter OTP');
    }
});

/*Enter Key Function*/
$('.signup').keypress(function (e) {
  var st = $(".verify").is(":hidden");
  if (e.which == 13) {
    if(st){
    	document.getElementById("btn-sign").click();
    }
    else{
	document.getElementById("submit-otp").click();
    }
  }
});
$('.verify').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("submit-otp").click();
  }
});
$('#otplogin').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("bt-login-step2otp").click();
  }
});

$('#uemail').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("bt-login-step1").click();
  }
});
$('.modal').keypress(function (e) {
  if (e.which == 27) {
    document.getElementByClass("modal-close").click();
  }
});
$('.fpwd').keypress(function (e) {
  var st = $(".otp-grp").is(":hidden");
  if (e.which == 13) {
    if(st){
    	document.getElementById("btn-fp").click();
    }
    else{
	document.getElementById("btn-fotp").click();
    }
  }
});
$('.votp').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("btn-fotp").click();
  }
});
$('.rpassw').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("new-pass").click();
  }
});
var anchor1 = $("#login-resend");
var numb;
var otp;
/*forgot password*/
$("#btn-fp").on("click", function(){
    $("#btn-fp").html("Please wait...");
    var mobile = $("#fnumber").val();
    numb = mobile;
    $(".frp-err").css("display","block");
    var mfilter = /^\d{10}$/;
    if(mobile != ''){
	if(!mfilter.test(mobile)){
	    $('.frp-err').html('Enter Valid Phone Number (10 digits)');
	}
	else{
		var url = "/cgi/resetpass.cgi";
		var data = {};
		data["mobile"] = mobile;
		$.post(url, data, function(result){
		   var result = result.trim();
		   if(result == "1"){
			$(".otp-grp").addClass("bl-active");
			$(".new-passw").addClass("bl-active");
    			$(".btn-otpgrp").css("display","none");
    			$("#btn-fotp").css("display","none");
    			$(".frp-gp").css("background-color","aliceblue");
		    	$("#fnumber").attr("disabled", true);
            $(".frp-err").html("OTP Sent Successfully");
            $(".frp-err").css("color", "#008000");
                
               // Enable the anchor tag after 60 seconds
                anchor1.addClass('disabled'); // Apply disabled class
               setTimeout(function() {
                anchor1.removeClass('disabled'); // Remove disabled class
                }, 60000);

                var countdown = 60;
               if(timer != ''){clearInterval(timer);}
                timer = setInterval(function() {
                countdown--;
                if (countdown <= 0) {
                    clearInterval(timer);
                anchor1.html("Resend OTP"); // Reset the anchor tag text
                }else {
                anchor1.html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
                }
            }, 1000);

		   }
		   else{
			$("#btn-fp").html("Generate OTP");
			$('.frp-err').html(result);
            $(".frp-err").css("color", "red");
		   }
		})
	    }
    }
    else{
	$("#btn-fp").html("Generate OTP");
	$('.frp-err').html("Required Fields cannot be empty !!!");
	$('.frp-err').css("color","red");
    }
});

$(".reset-fp").on("click", function(){
     $(".fp-form").addClass("bl-active");
     $(".Login-form").css("display","none");
});


$(document).keydown(function(event) { 
     var rp = $(".fp-form").is(":hidden");	
  if(rp){
  if (event.keyCode == 27) { 
     $("#modal-signup").removeClass("is-active");
     closeall();
  }
  }
});

$(".modal-background").on("click", function(){
     var st = $(".new-passw").is(":hidden");	
     if(st){
     closeall();
     }
})
$("#btn-fpcl").on("click", function(){
     $(".Login-form").css("display","block");
     $(".fp-form").removeClass("bl-active");
     $(".new-passw").removeClass("bl-active");
});
$("#new-pass").on("click", function(){
    $("#new-pass").html("Please wait...");
    var passw = $("#pass-n").val();
    var mobile = $("#fnumber").val();
    var otp = $("#fotp").val();
    if(passw != '' ){
		var url = "/cgi/otpvalidation.cgi";
		var data = {};
		data["passw"] = passw;
		data["mobile"] = numb;
		data["userotp"] = otp;
		$.post(url, data, function(result){
		   var result = result.trim();
		   if(result == "1"){
			$('.frp-err').html("");
			$(".new-passw").removeClass("bl-active");
			$("otp-grp").addClass("bl-active");
			$("#fnumber").val('');
			$("#fotp").val('');
			$("#btn-fotp").html("Submit");
			$("#fnumber").attr("disabled",false);
			$(".frp-gp").css("background-color","#fff");
			$("#btn-fp").html("Generate OTP");
			$(".btn-otpgrp").css("display","flex")
			$(".otp-grp").removeClass("bl-active")
			$(".fp-form").removeClass("bl-active")
			$("#new-pass").html("Submit");
    			$(".modal").removeClass("is-active");
		    	window.location.href = redurl;
		   }
		   else{
			$("#new-pass").html("Submit");
			$('.frp-err').html(result);
		   }
		});
	}

    else{
	$("#new-pass").html("Submit");
	$('.frp-err').html("Required Fields cannot be empty !!!");
	$('.frp-err').css("color","red");
    }
});


  $("#logsnow").click(function(){
    $(".sign-form").css("display","none");
    $("#modal-signup").addClass("is-active");
    $(".Login-form").css("display","block");
  });
  $("#btn-sl").click(function(){
    $("#modal-signup").addClass("is-active");
    $(".sign-form").addClass("is-active");
  });


/*Resend OTP*/
$("#login-resend").on("click", function() {
  var mobile = $("#fnumber").val();
  var numb = mobile;
  $(".frp-err").css("display", "block");
  var mfilter = /^\d{10}$/;
  if (mobile != '') {
    if (!mfilter.test(mobile)) {
      $('.frp-err').html('Enter Valid Phone Number (10 digits)');
    } else {
      var url = "/cgi/resetpass.cgi";
      var data = {};
      data["mobile"] = mobile;
      $.post(url, data, function(result) {
        var result = result.trim();
        if (result == "1") {
          $(".frp-err").html("OTP Resent Successfully");
          $(".frp-err").css("color", "#008000");

          anchor1.addClass('disabled'); // Apply disabled class

          // Enable the anchor tag after 60 seconds
          setTimeout(function() {
            anchor1.removeClass('disabled'); // Remove disabled class
          }, 60000);

          // Start a 60-second countdown timer
          var countdown = 60;
          if(timer != ''){clearInterval(timer);}
          timer = setInterval(function() {
            countdown--;
            if (countdown <= 0) {
              clearInterval(timer);
              anchor1.html("Resend OTP"); // Reset the anchor tag text
            } else {
              anchor1.html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
            }
          }, 1000);
        } else {
          $('.frp-err').html(result);
        }
      });
    }
  }
});

/*Resend OTP*/
$("#reg-resend").on("click", function() {
  var mobile = $("#mobile").val();
  var numb = mobile;
  $(".errormsg").css("display", "block");
  var mfilter = /^\d{10}$/;
  if (mobile != '') {
    if (!mfilter.test(mobile)) {
      $('.errormsg').html('Enter Valid Phone Number (10 digits)');
    } else {
      var url = "/cgi/reg-resend.cgi";
      var data = {};
      data["mobile"] = mobile;
      $.post(url, data, function(result) {
        var result = result.trim();
        if (result == "1") {
          $(".errormsg").html("OTP Resent Successfully");
          $(".errormsg").css("color", "#008000");
          
          anchor.addClass('disabled'); // Apply disabled class

          // Enable the anchor tag after 60 seconds
          setTimeout(function() {
            anchor.removeClass('disabled'); // Remove disabled class
          }, 60000);

          // Start a 60-second countdown timer
          var countdown = 60;
          if(timer != ''){clearInterval(timer);}
          timer = setInterval(function() {
            countdown--;
            if (countdown <= 0) {
              clearInterval(timer);
              anchor.html("Resend OTP"); // Reset the anchor tag text
            } else {
              anchor.html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
            }
          }, 1000);
        } else {
          $('.errormsg').html(result);
        }
      });
    }
  }
});
$(".drp-down1").click(function(){
        $(".drp-menu1").toggle();
    });

var umobile = '';
/*Login*/
$("#bt-login-step1").on("click", function(){

    $("#bt-login").html("Please wait...");
    var udata = $("#uemail").val();
    $(".err-msg").css("display","block");

    if(udata !='') {
        $("#bt-login-step1").html("Please wait...");
        var url = "/cgi/loginstep1.cgi";      
        var data = {};
        data["userdata"] = udata;
        $.post(url, data, function(result){
            var result = result.trim();
            if(result.startsWith('otplogin')){
                $(".otploginonly").show();
                $("#reg-resend1").show();
                $("#bt-login-step2otp").show();
                $("#bt-login-step1").css("display", "none");
                $("#uemail").attr("disabled", true);
                $(".err-msg").html('');
                $("#uemail").css("background-color","aliceblue");
                $("#bt-login-step1").html("Next");
                $("#reg-resend1").addClass('disabled'); // Apply disabled class
                $(".otp-sent-msg").css("display","flex");
                umobile = result.split(':')[2];
                $(".otp-sent-msg").text("OTP Sent to Mobile Number: " + result.split(":")[1]);

             // Enable the anchor tag after 60 seconds
          setTimeout(function() {
            $("#reg-resend1").removeClass('disabled'); // Remove disabled class
          }, 60000);

          // Start a 60-second countdown timer
          var countdown = 60;
          if(timer != ''){clearInterval(timer);}
          timer = setInterval(function() {
            countdown--;
            if (countdown <= 0) {
              clearInterval(timer);
              $("#reg-resend1").html("Resend OTP"); // Reset the anchor tag text
            } else {
              $("#reg-resend1").html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
            }
          }, 1000);



            }else if(result == 'passwlogin'){
                $(".passloginonly").show();
                $("#bt-login-step2pass").show();
                $(".err-msg").html('');
                $("#bt-login-step1").css("display", "none");
                $("#uemail").attr("disabled", true);
                $("#uemail").css("background-color","aliceblue");
                $("#bt-login-step1").html('Next');
            }else{
                $("#bt-login").html("Sign In");
                $('.err-msg').html(result);
                $("#bt-login-step1").html('Next');
            }
        });
    }
    else{
        $("#bt-login").html("Sign In");
        $('.err-msg').html('Fields cannot be empty');
        $("#bt-login-step1").html('Next');
    }

});

//otp login
$("#bt-login-step2otp").on("click", function(){
    $("#bt-login-step2otp").html("Please wait...");
    var otp = $("#otplogin").val();
    var udata = $("#uemail").val();
    var ofilter = /^\d{6}$/;
    var ostatus = ofilter.test(otp);
    modalback = false;
    $('.lbl-err').html("");
    if(otp != ''){
        var url = "/cgi/loginstep2otp.cgi";	
        var data = {};
        data["userdata"] = udata;
        data["userotp"] = otp;
        $('.err-msg').html("");
        $.post(url, data, function(result){
           var result = result.trim();
           if(result == "1"){
                $('.err-msg').html("");
                window.location.href = redurl;
           }else{
                $("#bt-login-step2otp").html("Submit");
                $('.err-msg').html("Enter Valid OTP");
           }
        });
    }
    else{
        $("#bt-login-step2otp").html("Submit");
        $('.err-msg').html('Please Enter OTP');
    }
});
/*Login*/

$("#bt-login-step2pass").on("click", function(){
    $("#bt-login-step2pass").html("Please wait...");
    var udata = $("#uemail").val();
    var passw = $("#upassw").val();
    $(".err-msg").css("display","block");
   
    if(udata !='' && passw !='') {
        //loginstep2pass == login.cgi
	     var url = "/cgi/login.cgi";      
	     var data = {};
	     data["userdata"] = udata;
	     data["passw"] = passw;
	     $.post(url, data, function(result){
		 var result = result.trim();
		 if(result == "1"){
		    $('.err-msg').html("");
		    $('#uemail').val('');
		    $('#upassw').val('');
	            $("#bt-login-step2pass").html("Sign In");
    		    $("#modal-signup").removeClass("is-active");
		    window.location.href= redurl;
		 }else{
	            $("#bt-login-step2pass").html("Sign In");
		    $('.err-msg').html(result);
		 }
	     });
	}
    else{
	 $("#bt-login-step2pass").html("Sign In");
	 $('.err-msg').html('Fields cannot be empty');
    }
});

$('#upassw').keypress(function (e) {
  if (e.which == 13) {
    document.getElementById("bt-login-step2pass").click();
  }
});

/*NEW Resend OTP*/
$("#reg-resend1").on("click", function() {
  var mobile = $("#uemail").val();
  var numb = mobile;
  $(".errormsg").css("display", "block");
  var mfilter = /^\d{10}$/;
  if (mobile == '') {
      return false;
  }
    if (!mfilter.test(mobile) && umobile == '') {
      $('.errormsg').html('Enter Valid Phone Number (10 digits)');
        return false;
    }
    if (!mfilter.test(mobile) && umobile != ''){
        mobile = umobile;
    }
      var url = "/cgi/reg-resend.cgi";
      var data = {};
      data["mobile"] = mobile;
      $.post(url, data, function(result) {
        var result = result.trim();
        if (result == "1") {
          $(".errormsg").html("OTP Resent Successfully");
          $(".errormsg").css("color", "#008000");
          
          $("#reg-resend1").addClass('disabled'); // Apply disabled class

          // Enable the anchor tag after 60 seconds
          setTimeout(function() {
            $("#reg-resend1").removeClass('disabled'); // Remove disabled class
          }, 60000);

          // Start a 60-second countdown timer
          var countdown = 60;
          if(timer != ''){clearInterval(timer);}
          timer = setInterval(function() {
            countdown--;
            if (countdown <= 0) {
              clearInterval(timer);
              $("#reg-resend1").html("Resend OTP"); // Reset the anchor tag text
            } else {
              $("#reg-resend1").html("Resend OTP (" + countdown + "s)"); // Update the anchor tag text with countdown
            }
          }, 1000);
        } else {
          $('.errormsg').html(result);
        }
      });
});
