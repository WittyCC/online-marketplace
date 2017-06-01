$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var usernameInput = $("input#username").val();
    var useraddressInput = $("input#useraddress").val();
    var beverage = $("select#beverage").val();

    $('.name').hide();
    $('.address').hide();
    $('.form-group').hide();
    $('#postcard').show();
    $('.username').text(usernameInput);
    $('.useraddress').text(useraddressInput);
    $('.beverage').text(beverage);
  });
});
