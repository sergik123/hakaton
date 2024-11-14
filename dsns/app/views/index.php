<?php require_once('header.php'); ?>
<?php 
$count=$id[0][0]["COUNT(id)"]; 
$reserve=$id[1][0]["COUNT(reserve)"];  
$disability=$id[2][0]["COUNT(disability)"];

$year2022=$id[3][0]["year"];
$year_cnt=$id[4];
$year2022_reserve=$id[5][0]["detail"];
$year2022_disability=$id[6][0]["detail"];

$year2023=$id[7][0]["year"];
$year_cnt2=$id[8];
$year2023_reserve=$id[9][0]["detail"];
$year2023_disability=$id[10][0]["detail"];

$year2024=$id[11][0]["year"];
$year_cnt3=$id[12];
$year2024_reserve=$id[13][0]["detail"];
$year2024_disability=$id[14][0]["detail"];
$ar1=[];
$ar2=[];
$res=json_encode($id[15]);
$res2=json_encode($id[16]);
$res3=json_encode($id[17]);




//$number_tck1=$id[15][1]['number_tck'];
//$count_tck1=$id[15][1]['details'];
?>


    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	  var count = "<?php echo $count ?>";
      	  var reserve="<?php echo $reserve ?>";
      	  var disability="<?php echo $disability ?>";
      	 
        var data = google.visualization.arrayToDataTable([
           ['Внесено карток', count],
		    ['Інвалідність', disability],
		    ['Заброньовано', reserve],
		     ['Всього', count],
        ]);

        var options = {
          chart: {
            title: 'Аналітична довідка',
            subtitle: 'Аналітична довідка за весь час внесення карток',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>

    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	var year= "<?php echo $year_cnt ?>";
      	var year22= "<?php echo $year2022 ?>";
      	var year22_reserve= "<?php echo $year2022_reserve ?>";
      	var year22_disability= "<?php echo $year2022_disability ?>";

      	var year2= "<?php echo $year_cnt2 ?>";
      	var year23= "<?php echo $year2023 ?>";
      	var year23_reserve= "<?php echo $year2023_reserve ?>";
      	var year23_disability= "<?php echo $year2023_disability ?>";

      	var year3= "<?php echo $year_cnt3 ?>";
      	var year24= "<?php echo $year2024 ?>";
      	var year24_reserve= "<?php echo $year2024_reserve ?>";
      	var year24_disability= "<?php echo $year2024_disability ?>";
        var data = google.visualization.arrayToDataTable([
          ['Довідка по рокам', 'Заброньовано', 'Інвалідність','Усього'],
          [year, year22_reserve, year22_disability,year22],
          [year2, year23_reserve, year23_disability, year23],
          [year3, year24_reserve, year24_disability, year24]
        ]);

        var options = {
          chart: {
            title: 'Аналітична довідка за окремий рік',
            subtitle: 'Аналітична довідка за кожен окремий рік внесення карток',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>

     <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	
      	var tempArray = <?php echo $res; ?>;
      	var tmp=[];
      	var tmp2=['Номер ТЦК','Всього'];
      	tmp.push(tmp2);
      	for (const element of tempArray){
      		var tmp_cnt=[element.number_tck, element.one];
      		tmp.push(tmp_cnt);
      	}
	       var data = new google.visualization.arrayToDataTable(tmp);
        var options = {
          chart: {
            title: 'Аналітична довідка по кожному ТЦК',
            subtitle: 'довідка по кожному ТЦК всього внесено осіб',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>

     <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	
      	var tempArray = <?php echo $res2; ?>;
      	var tmp=[];
      	var tmp2=['Номер ТЦК','Заброньовано'];
      	tmp.push(tmp2);
      	for (const element of tempArray){
      		var tmp_cnt=[element.number_tck, element.reserve];
      		tmp.push(tmp_cnt);
      	}
	       var data = new google.visualization.arrayToDataTable(tmp);
        var options = {
          chart: {
            title: 'Аналітична довідка по кожному ТЦК',
            subtitle: 'довідка по кожному ТЦК заброньованих осіб',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>

     <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      	
      	var tempArray = <?php echo $res3; ?>;
      	var tmp=[];
      	var tmp2=['Номер ТЦК','Інвалідність'];
      	tmp.push(tmp2);
      	for (const element of tempArray){
      		var tmp_cnt=[element.number_tck, element.disability];
      		tmp.push(tmp_cnt);
      	}
	       var data = new google.visualization.arrayToDataTable(tmp);
        var options = {
          chart: {
            title: 'Аналітична довідка по кожному ТЦК',
            subtitle: 'довідка по кожному ТЦК інвалідність осіб',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
  </head>
  <body>
    <div id="columnchart_material" style="width: 900px; height: 500px;"></div>
    <div id="columnchart_material2" style="width: 900px; height: 500px;"></div>
      <div id="columnchart_material3" style="width: 900px; height: 500px;"></div>
         <div id="columnchart_material4" style="width: 900px; height: 500px;"></div>
           <div id="columnchart_material5" style="width: 900px; height: 500px;"></div>
  </body>
<?php require_once('footer.php'); ?>