


// Smooth scrolling
$(document).ready(function(){
   
    // Add smooth scrolling to all links
    $("#btn1" ).on('click', function(event) {
     
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    // Add smooth scrolling to all links
    $("#btn2").on('click', function(event) {
     
     
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("#btn3").on('click', function(event) {
     
     
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
       
        event.preventDefault();
  
      
        var hash = this.hash;
  
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });

  // submitting the form

  var config = {
    apiKey: "AIzaSyAIGW6oXu8vtDRhfyhobsSu4tyLOHD1vYk",
    authDomain: "my-portfolio-project-a39a6.firebaseapp.com",
    databaseURL: "https://my-portfolio-project-a39a6.firebaseio.com",
    projectId: "my-portfolio-project-a39a6",
    storageBucket: "",
    messagingSenderId: "451849436154"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
   //  Button for adding Email
   $("#add-email").on("click", function (event) {
    // event.preventDefault();
    var name = $("#yourName").val().trim();
    var email = $("#yourEmail").val().trim();
    var message = $("#yourMessage").val().trim();

    var newEmail = {
      name: name,
      email: email,
      message: message
    };

    database.ref().push(newEmail);
     //clear text boxes 
     $("#yourName").val("");
     $("#yourEmail").val("");
     $("#yourMessage").val("");
    
  
   });

   

