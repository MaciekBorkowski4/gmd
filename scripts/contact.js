
$(document).ready(function () {
    var $contactElements = $('.contact-element');
    var $windowContact = $(window);
    $windowContact.on('scroll', check_if_in_view2);

    function check_if_in_view2() {
        var windowContactHeight = $windowContact.height();
        var windowContactTopPosition = $windowContact.scrollTop();
        var windowContactBottomPosition = (windowContactTopPosition + windowContactHeight);

        $.each($contactElements, function () {
            var $elementC = $(this);
            var elementCHeight = $elementC.outerHeight();
            var elementCTopPosition = $elementC.offset().top;
            var elementCBottomPosition = (elementCTopPosition + elementCHeight);

//check to see if this current container is within viewport*/
            if ((elementCBottomPosition >= windowContactTopPosition) &&
                (elementCTopPosition <= windowContactBottomPosition)) {
                $elementC.addClass('in-view2');
            } else {
                // $elementC.removeClass('in-view2');
            }
        });
    }
});