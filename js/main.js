$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });

  $("#search").keyup(function() {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");

    $.getJSON("json/sortiment.json", function(data) {
      $.each(data, function(key, value) {
        if (
          value.name.search(expression) != -1 ||
          value.location.search(expression) != -1
        ) {
          $("#result").append(
            '<li class="list-group-item link-class"><img src="' +
              value.image +
              '" height="40" width="40" class="img-thumbnail" /> ' +
              value.name +
              ' | <span class="text-muted">' +
              value.location +
              "</span></li>"
          );
        }
      });
    });
  });

  $("#result").on("click", "li", function() {
    var click_text = $(this)
      .text()
      .split("|");
    click_text = $.trim(click_text[0]);
    $("#search").val(click_text);
    $("#result").html("");
    // YOUR CUSTOM URL HERE:
    window.location.href = "searchresult.html" + click_text;

  });
  $('.Add-btn').click(function() {
  $('body').css({ backgroundColor: 'blue' });
});
});
