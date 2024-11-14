<!-- <?php //header('Refresh: 4; url=http://'.$_SERVER['SERVER_NAME'].'/'.Router::FOLDER);?> -->
<h1 style="text-align:center; color: #3f5296;">Вітаю! Ви завантажили Pogstat.</h1>
<h3 style="text-align:  center;">Через <span id="timer" style="color:#ff0000">3</span> секунди ви будете перенаправлені на головну сторінку</h3>
<script type="text/javascript">
	var time=3;
	var timerId = setInterval(function() {
  		document.getElementById('timer').innerHTML=time;
  		if(time>0){
  			time--;
  		}else{
  			window.location.assign("<?='http://'.$_SERVER['SERVER_NAME'].'/'.Router::FOLDER?>");
  		}
}, 1000);

</script>
