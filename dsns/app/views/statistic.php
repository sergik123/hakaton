<?php require_once('header.php'); ?>

		<div class="row">
				<div class="col-lg-offset-5 col-lg-2">
				<h2 style="color: #8b0000;">Статистичні дані</h2>
				</div>
		</div>

		<form method="post" action="../demo/demo_merge.php">
			<div class="row">
				<br>
				<div class="col-lg-offset-5 col-lg-2">
					<input type="hidden" name="tpl" value="stat.ods">
					<input class="btn btn-primary" type="submit" name="save_statistic" value="Завантажити файл статистики">
				</div>
			</div>
		</form>


 <?php require_once('footer.php'); ?>