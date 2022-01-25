<?php
/**
* Plugin Name: New Todo
* Description: Make New Todo!
*/

function newTodo(){
    echo "New Todo Plugin On";
}

add_action('init', 'newTodo');