<?php
/**
 * Template part for displaying single posts.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->

	<div class="entry-meta">
		<h2 class="entry-title entry-title-inline">— <?php the_title()?></h2>
		<span class="source">

		<?php  $source = get_post_meta($post->ID, '_qod_quote_source', true); ?>
		<?php  $sourceUrl = get_post_meta($post->ID, '_qod_quote_source_url', true); ?>

		<?php if (!empty($source)) : ?>

			<?php if (!empty($sourceUrl)) : ?>	
				, <a href="<?php echo $sourceUrl?>"><?php echo $source?></a></span>
			<?php else : ?>
				, <?php echo $source?></span>
			<?php endif; ?>

		<?php endif; ?>

			
	</div>

</article><!-- #post-## -->
