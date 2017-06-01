
$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var usernameInput = $("input#username").val();
    var useraddressInput = $("input#useraddress").val();

    $('.name').hide();
    $('.address').hide();
    $('#postcard').show();
    $('.username').text(usernameInput);
    $('.useraddress').text(useraddressInput);

  });
});
