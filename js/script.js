// When the collapse panel is shown, rotate the arrow
$('#accordion').on('show.bs.collapse', function (e) {
    // Find the button's arrow within the current header and change it to "up"
    $(e.target).prev().find('.arrow').html('&#9650;');  // Up arrow
});
    
// When the collapse panel is hidden, rotate the arrow back to "down"
$('#accordion').on('hide.bs.collapse', function (e) {
    // Find the button's arrow within the current header and change it to "down"
    $(e.target).prev().find('.arrow').html('&#9660;');  // Down arrow
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });

  var x = document.getElementsByClassName("both")

  for (var i = 0; i < 1000; i++) {
    x[i].onclick = function() {
        // Delay the alert by 1 second (1000 milliseconds)
        setTimeout(function() {
            alert("تم نسخ النص");
        }, 1000);
    };
}
