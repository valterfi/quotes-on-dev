(function($) {

    $(function () {

        $('#new-quote-button').click(function() {
            $.ajax({
                url: qodVars.rest_url + 'wp/v2/posts/?&filter[orderby]=rand',
                context: document.body
            }).done(function(data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    window.location.href = data[0].link;
                }
            });
        });

        $('input.wpcf7-submit[type="submit"]').click(function() {

            console.log({
                'your-author': $( "input[name='your-author']" ).val(),
                'quote': $( "textarea[name='quote']" ).val(),
                'your-find-quote': $( "input[name='your-find-quote']" ).val(),
                'your-url': $( "input[name='your-url']" ).val()
            });

            return false;
        })

    });

})( jQuery );
