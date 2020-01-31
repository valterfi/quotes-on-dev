(function($) {

    $(function () {

        //getRandomQuote();

        $('#new-quote-button').click(function() {
            getRandomQuote();
        });

        function getRandomQuote() {
            jQuery.ajax({
                url: qodVars.rest_url + 'wp/v2/posts/?&filter[orderby]=rand',
                context: document.body
            }).done(function(data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    window.location.href = data[0].link;
                }
            });
        }

        $('.wpcf7-form').submit(function( event ) {
            event.preventDefault();
            console.log(event);
        });

    });

})( jQuery );
