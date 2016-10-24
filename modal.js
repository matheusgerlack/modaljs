//START MODAL

  //appends the overlay to the body
  $('.overlay').appendTo('body');

  //show mobile navigation when click the button
  $("#open-modal").click(function(event){

    event.preventDefault();

    $('.overlay').fadeIn();
   
  });


  //close navigation
  $(".btn-close").click(function(event){

    event.preventDefault();
    $('.overlay').fadeOut('fast');

  });

  //END MODAL
