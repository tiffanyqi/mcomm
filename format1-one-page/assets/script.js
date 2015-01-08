$(document).ready(function() {
    $("#navbar a").click(function() {
        var topHeight = $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });
});