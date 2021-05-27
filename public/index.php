<?php includeWithVariables('components/c-header.php', array(
    'title' => 'Boilerplate',
    'description' => 'Description Boilerplate',
));
?>
<main>
  <?php includeWithVariables('components/c-title.php', 
    array('children' => 'Boilerplate'));
  ?>
</main>
<?php include 'components/c-footer.php'; ?>

<?php
    function includeWithVariables($filePath, $variables = array() , $print = true) {
        $output = NULL;
        if (file_exists($filePath)) {
            extract($variables);
            ob_start();
            include $filePath;
            $output = ob_get_clean();
        }
        if ($print) {
            print $output;
        }
        return $output;
    }
?>