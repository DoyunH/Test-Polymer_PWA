<?php
    function korean_hello(){
        echo "안녕";
    }

    add_action('init', 'korean_hello');