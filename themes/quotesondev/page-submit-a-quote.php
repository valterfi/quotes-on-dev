<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		    <?php if (is_user_logged_in()) : ?>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', 'page' ); ?>

				<?php endwhile; // End of the loop. ?>
				
			<?php else :?>

				<?php get_template_part( 'template-parts/content-page-login' ); ?>

			<?php endif ?>	

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
