<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section>

				<div>
					<h2>Quote Authors</h2>

					<?php
						$args = array( 'post_type' => 'post', 'order' => 'ASC', 'numberposts' => -1 );
						$quotes = get_posts( $args ); // returns an array of posts
					?>

					<ul>
						<?php foreach ( $quotes as $quote ) : setup_postdata( $quote ); ?>
							<li><a href="<?php echo get_permalink($quote)?>"><?php echo $quote->post_title?></a></li>
						<?php endforeach; wp_reset_postdata(); ?>
					</ul>

				</div>

				<div>
					<h2>Categories</h2>

					<?php
						$args = array( 'orderby' => 'name', );
						$categories = get_categories( $args ); // returns an array of categories
					?>

					<ul>
						<?php foreach ( $categories as $category ) : setup_postdata( $category ); ?>
							<li><a href="<?php echo get_category_link($category)?>"><?php echo $category->name?></a></li>
						<?php endforeach; wp_reset_postdata(); ?>
					</ul>

				</div>

				<div>
					<h2>Tags</h2>

					<?php
						$args = array( 'orderby' => 'name', );
						$tags = get_tags( $args ); // returns an array of categories
					?>

					<ul>
						<?php foreach ( $tags as $tag ) : setup_postdata( $tag ); ?>
							<li><a href="<?php echo get_tag_link($tag)?>"><?php echo $tag->name?></a></li>
						<?php endforeach; wp_reset_postdata(); ?>
					</ul>

				</div>

			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
