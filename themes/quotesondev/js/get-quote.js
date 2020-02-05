(function($) {

    $(function () {

        function isNotEmpty(data) {
            if (data !== null && data !== '') {
                return true;
            }
            return false;
        }

        $('#new-quote-button').click(function() {
            $.ajax({
                url: qodVars.rest_url + 'wp/v2/posts/?filter[post_per_page]=1&filter[orderby]=rand',
                context: document.body
            }).done(function(data) {
                if (typeof data !== 'undefined' && data.length > 0) {
                    window.history.pushState('', '', '/' + data[0].slug + '/');

                    $('.entry-content').html(data[0].content.rendered);
                    $('.entry-title').text('— ' + data[0].title.rendered)

                    let source = $('.source');
                    
                    source.html('');
                    if (isNotEmpty(data[0]._qod_quote_source)) {
                        if (isNotEmpty(data[0]._qod_quote_source_url)) {
                            source.append(', <a href="'+ data[0]._qod_quote_source_url +'">'+ data[0]._qod_quote_source +'</a>');
                        } else {
                            source.append(', ' + data[0]._qod_quote_source);
                        }    
                    }

                }
            });
        });

        document.addEventListener( 'wpcf7mailsent', function( event ) {
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

        }, false );

    });

})( jQuery );
