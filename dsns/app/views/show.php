<?php require_once('header.php'); ?>
<?php if($template=="1") : ?>
	 <p class="text-danger">Співробітник ТЦК вніс підозріло багато карток в цю базу. 
	 	Перевірте правильність і актуальність введеної інформації.</p>
	<?php endif; ?>
<?php if($template=="2") : ?>
	 <p class="text-danger">Співробітник ТЦК редагував ці картки багато разів. 
	 	Перевірте правильність і актуальність введеної інформації.</p>
	<?php endif; ?>
<body>
	<table border="1" class="table_blur">
		<th>ПІБ співробітника</th>
		<th>Номер ТЦК</th>
		<th>Дата останього входу</th>
		<th>База ЄДЕБО</th>
		<tr>
			<td><?=$id[0][0]['fullname']; ?></td>
			<td><?=$id[0][0]['number_tck']; ?></td>
			<td><?=$id[0][0]['date_enter']; ?></td>
			<td><a href="https://info.edbo.gov.ua/">Перевірка по базі ЄДЕБО</a></td>
		</tr>
	</table>
	<br><br>

	<div class="col-sm-12 table-responsive">
				<table class="table_blur" border="1">
					<thead>
						<tr>
							<th>№</th>
							<th>Прізвище</th>
							<th>Ім'я</th>
							<th>email</th>
							<th>phone</th>
							
							<th>Заброньована особа</th>
							<th>Особа з інвалідністю</th>
							<th>Особа знята з обліку</th>
							<th>Дата внесення даних</th>
						</tr>
					</thead>
					<tbody>
						

				  			<?php for ($i=0; $i<count($id[1]); $i++): ?>
								<tr>
									<td><?=$i+1; ?></td>
									<td><?=$id[1][$i]['firstname'];?></td>
									<td><?=$id[1][$i]['lastname'];?></td>
									<td><?=$id[1][$i]['email'];?></td>
									<td><?=$id[1][$i]['phone'];?></td>
							
									<td><?=$id[1][$i]['reserve'];?></td>
									<td><?=$id[1][$i]['disability'];?></td>
									<td><?=$id[1][$i]['dismissed'];?></td>
									<td><?=$id[1][$i]['date_create'];?></td>
								</tr>
							 	<?php endfor; ?>
					</tbody>
				</table>
			</div>

			<?php if($template=="2") : ?>
	 <p class="text-danger">
<ul>
<li>1. Поле 'reserve' було змінено на інше значення</li>
<li>2. Поле 'phone' було додано при останьому редагувані</li>
</ul>
	 </p>
	<?php endif; ?>
			<style type="text/css">
.table_blur {
  background: #f5ffff;
  border-collapse: collapse;
  text-align: left;
}
.table_blur th {
  border-top: 1px solid #777777;  
  border-bottom: 1px solid #777777; 
  box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
  background: linear-gradient(#9595b6, #5a567f);
  color: white;
  padding: 10px 15px;
  position: relative;
}
.table_blur th:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 25%;
  height: 25%;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255,.08));
}
.table_blur tr:nth-child(odd) {
  background: #ebf3f9;
}
.table_blur th:first-child {
  border-left: 1px solid #777777; 
  border-bottom:  1px solid #777777;
  box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
}
.table_blur th:last-child {
  border-right: 1px solid #777777;
  border-bottom:  1px solid #777777;
  box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
}
.table_blur td {
  border: 1px solid #e3eef7;
  padding: 10px 15px;
  position: relative;
  transition: all 0.5s ease;
}
.table_blur tbody:hover td {
  color: transparent;
  text-shadow: 0 0 3px #a09f9d;
}
.table_blur tbody:hover tr:hover td {
  color: #444444;
  text-shadow: none;
}
			</style>
<?php require_once('footer.php'); ?>