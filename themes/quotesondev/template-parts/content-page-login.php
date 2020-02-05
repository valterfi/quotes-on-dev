<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package QOD_Starter_Theme
 */

?>

<article>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title()?></h1> 
	</header>
    <!-- .entry-header -->

	<p>Sorry, you must be logged in to submit a quote!</p>

	<?php $returnPath = get_settings('siteurl') . '/wp-login.php/?redirect_to=' . urlencode($_SERVER['REQUEST_URI']); ?>

	<p><a href="<?php echo $returnPath;?>">Click here to login.</a></p>
</article><!-- #post-## -->
