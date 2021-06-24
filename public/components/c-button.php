<a class="c-button <?php if($secondary) echo 'c-button__secondary'?>" <?php if($href) echo "href='{$href}'"?>
  <?php if(!$samePage) echo 'target="_blank" rel="noopnener" ' ?>>
  <?php echo $children; ?>
</a>