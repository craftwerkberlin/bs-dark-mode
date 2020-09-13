<?php
/*Plugin Name: bS Dark Mode
Plugin URI: https://bootscore.me/plugins/dark-mode/
Description: This plugin adds a dark mode to bootScore theme. Use shortcode [dark-mode] to show the switch where you want.
Version: 1.0.0
Author: Bastian Kreiter
Author URI: https://crftwrk.de
License: GPLv2
*/



// Register Styles and Scripts
function dm_scripts() {

    wp_enqueue_script( 'darkmode-js', plugins_url( '/js/dark-mode.js', __FILE__ ));
    
    
    wp_register_style( 'darkmode-css', plugins_url('css/dark-mode.css', __FILE__) );
        wp_enqueue_style( 'darkmode-css' );
        
        }
    
add_action('wp_enqueue_scripts','dm_scripts');



// Add Shortcode to show the switch
function dark_mode_shortcode() {
    return '<div class="dark-mode-switch">

        <div class="d-inline small text-muted">
            <i class="fas fa-sun"></i>
        </div>

        <div class="custom-control custom-switch d-inline">
            <input type="checkbox" class="custom-control-input btn-toggle" id="dark-mode">
            <label class="custom-control-label" for="dark-mode"></label>
        </div>

        <div class="d-inline small text-muted ml-n2">
            <i class="fas fa-moon"></i>
        </div>

    </div>';
}
add_shortcode( 'dark-mode', 'dark_mode_shortcode' );
