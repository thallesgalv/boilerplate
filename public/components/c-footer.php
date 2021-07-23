<footer class="c-footer"></footer>
<script src="js/main.js"></script>
<?php if ($pageJS) { 
foreach($pageJS as $item) { ?>
<script src="js/<?php echo $item; ?> "></script>
<?php }} ?>
</body>

</html>