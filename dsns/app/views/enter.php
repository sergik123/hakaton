<?php require_once('header.php'); ?>
<div class="row" style="margin-top: 40px;">
			<div class="col-sm-12 table-responsive">
				<table class="table" id="myTable">
					<thead>
						<tr>
						
							<th>№</th>
							<th>ПІБ</th>
							<th>№ співробітника ТЦК</th>
							<th>Дата входу</th>
							<th>Перевірити</th>
						</tr>
					</thead>
					<tbody>
						

				  			<?php for ($i=0; $i<count($id[0]); $i++): ?>
				  			<?php if($id[0][$i]['date_m']>=0 && $id[0][$i]['date_m']<=6): ?>
								<tr>
									<td><?=$i+1; ?></td>
									<td><?=$id[0][$i]['fullname'];?></td>
									<td><?=$id[0][$i]['number_tck'];?></td>
									<td><?=$id[0][$i]['date_enter'];?></td>
									<td><a href="/index/show/<?=$id[0][$i]['id'];?>">Додати на перевірку</a> </td>
								</tr>
							<?php endif; ?>
							 	<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
<?php require_once('footer.php'); ?>