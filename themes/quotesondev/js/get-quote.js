(function($) {

    $(function () {

        $('#new-quote-button').click(function() {
            jQuery.ajax({
                url: qodVars.rest_url + 'wp/v2/posts/?&filter[posts_per_page]=1&filter[orderby]=rand',
                context: document.body
            }).done(function(data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    $('.entry-content').html(data[0].content.rendered);
                }
            });
        });

    });

})( jQuery );
