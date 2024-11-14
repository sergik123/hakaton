<?php require_once('header.php'); ?>

<h3>Сторінка аналізу даних</h3>
<div class="container-fluid">
	<form role="form" method="post" action="/<?=Router::FOLDER;?>index/details" >
		<div class="col-lg-2">
			<label style="color: #000; font-weight: bold;"></label><br>
					<input type="submit" class="btn btn-success btn-block" name="allfilterbtn" value="Аналізувати дані">
			</div>
	</form>
</div>
<hr>
<div  class="container-fluid">
<?php 
	if($_POST['allfilterbtn']!=''){
		$sum=0;
	for($i=0; $i<count($id);$i++){
		$sum+=$id[$i]['kartka'];
	}
	$res_avg=$sum/count($id);

	for($i=0; $i<count($id);$i++){
		
		if($id[$i]['kartka']>($res_avg*2)){
			echo "<span class='badge bg-primary text-wrap'> <a href=/index/show/".$id[$i]['tck']." style='color:white;'>Співробітник ТЦК з номером ".$id[$i]['tck']." ввів значно більшу кількість карток за інших.</a> </span> <br>";
		}
	}

	echo "<hr>";
	for ($i=0; $i <count($template); $i++) { 
		echo "<span class='badge bg-primary text-wrap'> <a href=/index/number/".$template[$i]['id']." style='color:white;'>Співробітник ТЦК з номером ".$template[$i]['id_tck']." виконав редагування однієї картки більше п'яти раз.</a> </span> <br>";
	}
	}
	
	


	$res=json_encode($id);
	
	
?> 
</div>

 <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	
      	var tempArray = <?php echo $res; ?>;

      	var tmp=[];
      	var tmp2=['№_ТЦК','Кількість карток'];
      	tmp.push(tmp2);
      	for (const element of tempArray){
      		if(element!=null){
      			var tmp_cnt=[element.tck,element.kartka];
      		tmp.push(tmp_cnt);
      		}
      		
      	}
      	
	       var data = new google.visualization.arrayToDataTable(tmp);
        var options = {
          chart: {
            title: 'Аналітична довідка по кожному співробітнику ТЦК',
            subtitle: 'довідка по кожному співробітнику ТЦК'
          },
             

        };
        
        var chart = new google.charts.Bar(document.getElementById('columnchart_material6'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
      var res=document.getElementsByTagName("line");
      for(var i=0; i<res.lenght; i++){
        if(res[i].getAttribute("y1")=='117.36046511627907'){
        res[i].getAttribute("stroke")="red";
      }
      }
      
    </script>
    <div id="columnchart_material6" style="width: 900px; height: 500px;"></div>		
<?php require_once('footer.php'); ?>