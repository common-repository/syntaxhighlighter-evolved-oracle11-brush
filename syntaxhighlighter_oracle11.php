<?php
/**
* Plugin Name: SyntaxHighlighter Evolved: oracle11 Brush
* Description: Adds support for the oracle11 language to the SyntaxHighlighter Evolved plugin.
* Author: Chris B. Kerndter
* Version: 0.1
* Author URI: http://www.kerndter.net
* Plugin URI: http://www.kerndter.net/syntaxhighlighter_oracle11
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_oracle11_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_oracle11_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_oracle11_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-oracle11', plugins_url( 'shBrushOracle11.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.4' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_oracle11_addlang( $brushes ) {
    $brushes['oracle11'] = 'oracle11';

    return $brushes;
}