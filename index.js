
$(document).ready(function() {
  $(".formInputText").on('focus', function() {
    $(this).prev().animate({top:'3px' , fontSize: '24px',left:'9px',opacity:'0.7'},200);
  })
  $(".formInputText").on('blur', function() {
    if(!$(this).val()){
    $(this).prev().animate({top:'32px' , fontSize: '28px',left:'0',opacity:'1'},200);
    }
  })
  $("#fullName").on('blur', function() {
    const hebrewRegex = /^[א-ת\s]*$/
    let currentValue = $(this).val();

    if (currentValue) {
      if (!hebrewRegex.test(currentValue)) {
          $("[order='error1']").text("אנא הכנס אותיות בעברית בלבד");
          $("[order='error1']").stop(true, true).fadeIn(200);
      } else {
          $("[order='error1']").stop(true, true).fadeOut(200);
      }
  
  }
  });
  $("#email").on('blur', function() {
    const hebrewRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    let currentValue = $(this).val();

    if (currentValue) {
      if (!hebrewRegex.test(currentValue)) {
          $("[order='error2']").text("אנא הכנס כתובת תקינה");
          $("[order='error2']").stop(true, true).fadeIn(200);
      } else {
          $("[order='error2']").stop(true, true).fadeOut(200);
      }
  
  }
  });
  $("#phoneNum").on('blur', function() {
    const hebrewRegex = /^05\d{8}$/;
    let currentValue = $(this).val();

    if (currentValue) {
      if (!hebrewRegex.test(currentValue)) {
          $("[order='error3']").text("אנא הכנס מספר תקין");
          $("[order='error3']").stop(true, true).fadeIn(200);
      } else {
          $("[order='error3']").stop(true, true).fadeOut(200);
      }
  
  }
  });

  $("input[name='times']").on("change", function () {
    console.log("event fires");
    console.log($(this).val());

    // Remove the class from all parent elements
    $("input[name='times']").parent().removeClass("active");

    // Add the class to the checked element's parent
    $("input[name='times']:checked").parent().addClass("active");
});

 $("#sendBtn").on('click', function(){

    if(!$("#fullName").val()){
      $("[order='error1']").text("זהו שדה חובה");
          $("[order='error1']").stop(true, true).fadeIn(200);
    }
    else if(!$("#email").val()){
        $("[order='error2']").text("זהו שדה חובה");
            $("[order='error2']").stop(true, true).fadeIn(200);
    }
    else if(!$("#phoneNum").val()){
      $("[order='error3']").text("זהו שדה חובה");
      $("[order='error3']").stop(true, true).fadeIn(200);
    }
    else{
      $("[order='error1']").stop(true, true).fadeOut(200);
      $("[order='error2']").stop(true, true).fadeOut(200);
      $("[order='error3']").stop(true, true).fadeOut(200);
     let params = {
      fullName: $("#fullName").val(),
      time: $("input[name='times']:checked").val(),
      phoneNum: $("#phoneNum").val(),
      details: $("#addDetails").val(),
      email:$("#email").val()
     }

   emailjs.send("service_0lfqosw","template_r9an6sq",params).then(alert("!!אימייל נשלח"));
    }

    $("#fullName").val('');
    $("#email").val('');
    $("#phoneNum").val('');
    $("input[name='times']").prop('checked', false);
    $("#addDetails").val('');
 });

});