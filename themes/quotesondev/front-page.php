<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
				$args = array( 'post_type' => 'post', 'posts_per_page' => '1', 'orderby' => 'rand' );
				$quotes = new WP_Query( $args ); // instantiate our object
			?>

			<?php while ( $quotes->have_posts() ) : $quotes->the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<?php endwhile; // End of the loop. ?>

			<?php wp_reset_postdata(); ?>

			<button type="button" id="new-quote-button">Show Me Another!</button>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
