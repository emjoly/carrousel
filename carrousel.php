<?php

/**
 * Plugin Name: Carrousel
 * Description: Plugin pour afficher un carrousel d'images controlés par des boutons radios
 * Version: 1.0.0
 * Author: Emily
 */

function em_enqueue()
{
  $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
  $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
  wp_enqueue_style(
    'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css
  );

  wp_enqueue_script(
    'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) . "js/carrousel.js",
    array(),
    $version_js,
    true
  ); // true permet d'ajouter le script a la fin du doc
}

add_action('wp_enqueue_scripts', 'em_enqueue');
/**
 * Ajoute un shortcode pour afficher le carrousel
 * dans header.php:
 * wp_header() juste avant balise de fermeture de </head>
 * dans footer.php:
 * wp_footer() juste avant balise de fermeture de </body>
 */

function genere_html()
{
  $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
    <div class="carrousel">
      <button class="carrousel__x">X</button>
      <figure class="carrousel__figure"></figure>
      <form class="carrousel__form"></form>
    </div>';
  return $contenu;
}
add_shortcode('mon_html', 'genere_html');
