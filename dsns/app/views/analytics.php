<?php require_once('header.php'); ?>


<h3>Сторінка аналітики</h3>

<div class="container-fluid">
	<form role="form" method="post" action="/<?=Router::FOLDER;?>index/change" >
		<div class="col-lg-2">
						<span style="font-weight: bold;">Вибрати номер ТЦК</span><br>
						<select class="form-control" id="selnumber" name="number_tck">
							<option value=""></option>
							<?php foreach ($id[0] as $value): ?>
								<option value="<?=$value['number_tck'];?>"><?=$value['number_tck']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
		<div class="col-lg-2">
						 <label for="datetimeopt1">Вибрати період починаючи з</label>
						<div class="input-group" id="datetimeopt1">
					   		<input type="text" name="datetimeopt1" id="datetimeopt1" class="form-control"  value=""/>
					    <span class="input-group-addon">
					      <span class="glyphicon glyphicon-calendar"></span>
					    </span>

		</div>
	</div>
		<div class="col-lg-2">
						
						 <label for="datetimeopt2">до</label>
						<div class="input-group" id="datetimeopt2">
					   <input type="text" name="datetimeopt2" id="datetimeopt2" class="form-control"  value=""/>
					    <span class="input-group-addon">
					      <span class="glyphicon glyphicon-calendar"></span>
					    </span>
					  </div>
		</div>
	
		<div class="col-lg-2">
			<label style="color: #000; font-weight: bold;"></label><br>
					<input type="submit" class="btn btn-success btn-block" name="allfilterbtn" value="Пошук">
				
			</div>
	</form>
</div>
<hr>

<?php if($_POST['mainbtn']=='main' || $_POST['datetimeopt1']!=''): ?>
	<div class="row" style="margin-top: 40px;">
			<div class="col-sm-12 table-responsive">
				<table class="table">
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
									<td><?=$id[1][$i]['id_tck'];?></td>
									<td><?=$id[1][$i]['reserve'];?></td>
									<td><?=$id[1][$i]['disability'];?></td>
									<td><?=$id[1][$i]['date_create'];?></td>
								</tr>
							 	<?php endfor; ?>
					</tbody>
				</table>
			</div>
		</div>
	<?php endif; ?>
<hr>

	<?php $res=json_encode($id[2]);?> 
	<span>Ви вибрали наступний номер ТЦК: <b><?=$template; ?></b></span>
	<hr>
	 <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	
      	var tempArray = <?php echo $res; ?>;
      	var tmp=[];
      	var tmp2=['Місяць','Кількість карток'];
      	tmp.push(tmp2);
      	for (const element of tempArray){
      		var tmp_cnt=[element.date_m, element.count_id];
      		tmp.push(tmp_cnt);
      	}
	       var data = new google.visualization.arrayToDataTable(tmp);
        var options = {
          chart: {
            title: 'Аналітична довідка по вибраному ТЦК',
            subtitle: 'довідка по вибраному ТЦК кількість осіб',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material6'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
		<div id="columnchart_material6" style="width: 900px; height: 500px;"></div>		
<?php require_once('footer.php'); ?>