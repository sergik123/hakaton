<?php require_once('header.php'); ?>
<a href="/index/table/<?=date('Y')-2; ?>"><?=date('Y')-2; ?></a>
<a href="/index/table/<?=date('Y')-1; ?>"><?=date('Y')-1; ?></a>
<a href="/index/table/<?=date('Y'); ?>"><?=date('Y'); ?></a>

<div class="row" style="margin-top: 40px;">
			<div class="col-sm-12 table-responsive">
				<table class="table" id="myTable">
					<thead>
						<tr>
						
							<th>№</th>
							<th>Прізвище</th>
							<th>Ім'я</th>
							<th>email</th>
							<th>phone</th>
							<th>№ співробітника ТЦК</th>
							<th>Заброньована особа</th>
							<th>Особа з інвалідністю</th>
							<th>Кількість виправлень</th>
							<th>Дата внесення даних</th>
							<th>Перевірка по ЄДЕБО</th>
							<th>Додати на перевірку</th>
						</tr>
					</thead>
					<tbody>
						

				  			<?php for ($i=0; $i<count($id[0]); $i++): ?>
				  			<?php if($id[0][$i]['count_change']>4): ?>
								<tr style="border: 2px solid red;">
									<td><?=$i+1; ?></td>
									<td><?=$id[0][$i]['firstname'];?></td>
									<td><?=$id[0][$i]['lastname'];?></td>
									<td><?=$id[0][$i]['email'];?></td>
									<td><?=$id[0][$i]['phone'];?></td>
									<td><?=$id[0][$i]['id_tck'];?></td>
									<td><?=$id[0][$i]['reserve'];?></td>
									<td><?=$id[0][$i]['disability'];?></td>
									<td><?=$id[0][$i]['count_change'];?></td>
									<td><?=$id[0][$i]['date_create'];?></td>
									<td><input type="button" value="ЄДЕБО"> </td>
									<td><a href="#">Відправити на перевірку</a> </td>
								</tr>
							
						<?php else: ?>
							<tr>
								
									<td><?=$i+1; ?></td>
									<td><?=$id[0][$i]['firstname'];?></td>
									<td><?=$id[0][$i]['lastname'];?></td>
									<td><?=$id[0][$i]['email'];?></td>
									<td><?=$id[0][$i]['phone'];?></td>
									<td><?=$id[0][$i]['id_tck'];?></td>
									<td><?=$id[0][$i]['reserve'];?></td>
									<td><?=$id[0][$i]['disability'];?></td>
									<td><?=$id[0][$i]['count_change'];?></td>
									<td><?=$id[0][$i]['date_create'];?></td>
									<td><input type="button" value="ЄДЕБО"> </td>
									<td><a href="#">Відправити на перевірку</a> </td>
								</tr>
								<?php endif; ?>
							 	<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
		
<?php require_once('footer.php'); ?>