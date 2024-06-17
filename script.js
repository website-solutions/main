$(document).ready(function() {
    // Add visible class to trigger initial animation
    $(".welcome-animation").addClass("visible");
});


$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();

    // Select elements with the desired animation classes
    var fadeIns = $(".fade-in");
    var slideIns = $(".slide-in");

    // Function to check visibility and add/remove animation classes
    function checkVisibility(elements) {
        elements.each(function() {
            var elementTop = $(this).offset().top;
            if (elementTop < pageBottom) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    // Check visibility for each animation type
    checkVisibility(fadeIns);
    checkVisibility(slideIns);
});
