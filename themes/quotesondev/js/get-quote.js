(function($) {

    $(function () {

        $('#new-quote-button').click(function() {
            $.ajax({
                url: qodVars.rest_url + 'wp/v2/posts/?filter[post_per_page]=1&filter[orderby]=rand',
                context: document.body
            }).done(function(data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    window.location.replace(qodVars.site_url + '/' + data[0].slug);
                }
            });
        });

        $('.wpcf7-form').on('submit', function(event) {

            event.preventDefault();

            let newQuote = {
                'title': $( 'input[name=\'your-author\']' ).val(),
                'content': $( 'textarea[name=\'quote\']' ).val(),
                '_qod_quote_source': $( 'input[name=\'your-find-quote\']' ).val(),
                '_qod_quote_source_url': $( 'input[name=\'your-url\']' ).val(),
                'status': 'publish'
            };

            $.ajax({
                method: 'POST',
                url: qodVars.rest_url + 'wp/v2/posts',
                context: document.body,
                data: newQuote,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', qodVars.wpapi_nonce);
                }
            }).done(function(data) {
                window.location.href = data.link;
            });

        });


    });

})( jQuery );
