//START MODAL

  //show mobile navigation when click the button
  $("#open-modal").click(function(event){

    event.preventDefault();

    $('.menu-overlay').fadeIn();
   
  });


  //close navigation
  $(".btn-close").click(function(event){

    event.preventDefault();
    $('.menu-overlay').fadeOut('fast');

  });

  //END MODAL