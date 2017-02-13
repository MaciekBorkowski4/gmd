
$(document).ready(function () {
    var $contactElements = $('.contact-element');
    var $windowContact = $(window);
    $windowContact.on('scroll load', check_if_in_view2);

    function check_if_in_view2() {
        var windowHeight = $windowContact.height();
        var windowTopPosition = $windowContact.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($contactElements, function () {
            var $elementC = $(this);
            var elementCHeight = $elementC.outerHeight();
            var elementCTopPosition = $elementC.offset().top;
            var elementCBottomPosition = (elementCTopPosition + elementCHeight);

//check to see if this current container is within viewport*/
            if ((elementCBottomPosition >= windowTopPosition) &&
                (elementCTopPosition <= windowBottomPosition)) {
                $elementC.addClass('in-view2');
            } else {
                // $element.removeClass('in-view');
            }
        });
    }
});