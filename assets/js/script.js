$(document).ready(function() {
    $("#navbar a").click(function() {
        var topHeight = $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // social media icons change color, no longer applies
    // $(".icon").hover(
    //     function() {
    //         this.src = "assets/img/contact/" + this.id + "-logo-hover.png"; 
    //     }, function() {
    //         this.src = "assets/img/contact/" + this.id + "-logo.png";
    //     });

});