jQuery(function () {

    jQuery('#new-quote-button').click(function() {
        jQuery.ajax({
            url: "http://localhost:3000/wp-json/wp/v2/posts/?&filter[posts_per_page]=1&filter[orderby]=rand",
            context: document.body
          }).done(function(data) {
            if (typeof data !== 'undefined' && data.length > 0) {
                jQuery('.entry-content').html(data[0].content.rendered);
            }
        });
    });

});
