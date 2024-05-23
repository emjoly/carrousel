<?php

/**
 * Plugin Name: Carrousel
 * Description: Affiche un carrousel d'images contrôlé par des boutons radio
 * Author: Emily Joly
 * Version: 1.0.0
 */

function ej_enqueue()
{

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        'ej_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'ej_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    ); /// true permet d'ajouter le script à la fin du document
}

add_action('wp_enqueue_scripts', 'ej_enqueue');

function genere_html()
{
    $contenu = '
       <div class="carrousel">
        <button class="carrousel__x">X</button>
        <button class="carrousel__prev">&lt;</button>
        <button class="carrousel__next">&gt;</button>
        <figure class="carrousel__figure"></figure>
        <form class="carrousel__form"></form>
       </div>';
    return $contenu;
}
add_shortcode('carrousel', 'genere_html');
