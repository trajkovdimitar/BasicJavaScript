let userData = [
    {
      email: 'knorr@live.com',
      password: 'ksGuQbzYPpW'
    },
    {
      email: 'rddesign@msn.com',
      password: '9Q6urHqy'
    },
    {
      email: 'chaffar@yahoo.ca',
      password: '4xaz2pyk'
    },
    {
      email: 'fatelk@mac.com',
      password: 'TAePJSb2ACX'
    },
    {
      email: 'luebke@me.com',
      password: 'EyFY8uhX'
    },
    {
      email: 'amichalo@mac.com',
      password: 'c7muQ6bxcA9QJKS'
    },
    {
      email: 'mallanmba@yahoo.ca',
      password: 'NqCGLmGtcFU'
    },
    {
      email: 'isaacson@att.net',
      password: 'PMjRGUug7Ff73Kt'
    },
    {
      email: 'aracne@aol.com',
      password: 'sBJU7JJR7Qx6f55'
    },
    {
      email: 'boser@comcast.net',
      password: 'DMXQRNj7BHZ'
    },
    {
      email: 'gtaylor@verizon.net',
      password: 'AbefrKfkbxHbP3u'
    },
    {
      email: 'firstpr@comcast.net',
      password: 'PGWPUtcwP'
    },
    {
      email: 'sumdumass@sbcglobal.net',
      password: '2DrCpjkk9mm8bjW'
    },
    {
      email: 'campbell@yahoo.com',
      password: 'ZmYZgaDq6'
    },
    {
      email: 'wetter@me.com',
      password: 'ppTG3pGAe'
    },
    {
      email: 'british@verizon.net',
      password: '67SbpGYvPJ2'
    }
  ]

  
//   Validation
let attempt = 3;

$(document).ready(function(){
$("#loginBtn").click(function(){
    let loginUser = null;
    for (const user of userData) {
     if( $("#email").val() == user.email && $("#pass").val() == user.password){
         loginUser = user;
     }   
    }
    if(loginUser === null){
        $("#email").css("border-color", "red");
        $("#pass").css("border-color", "red");
            // bonus
        attempt --;
        if(attempt === 1){
            $("button").click(function(){
                $("#loginBtn").prop("disabled", true);
                });
        }

        alert("You have entered the wrong email or password! You have left "+attempt+" attempt;");
    }
    else{
        $("#root").hide();
        $('body').append("<h5> You have successefully entered the email and password!<h5/>");
        // bonus 
        $('body').append(`<button id="logout">Logout</button>`);
        $("#logout").click(function(){
            $("#root").show();
            $("#logout").hide();
            $("h5").hide();
        })
    }
})

})