<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/main.css">
  <link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/bootstrap-datetimepicker.min.css" />
  <script type="text/javascript" src="/<?=Router::FOLDER;?>js/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="/<?=Router::FOLDER;?>js/bootstrap.min.js"></script> 

 <style>
   img {
    width: 100%;
   }
   body{
    background-color: #faebd7;
   }
   #bg{
    opacity: 0;
    display: none;
   }
   #btn{
    opacity: 0;
    display: none;
   }
   #spn{
    opacity: 0;
    display: none;
    color: #0c0e10;
    background-color: #cccc14;
    text-align: center;
    text-align: -webkit-center;
   }
   #spn a{
    color: #9a0606;
   }
  </style>
 </head>
 <body>
<!-- <div id="hide">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Повідомлення</h4>
      </div>
      <div class="modal-body">
        <p>Ми створили групу в viber. Якщо ви бажаєте, то можете вступити в цю групу. В цій групі будуть опубліковані новини пов'язяні з цією програмою.</p>
        <p>Вступити в групу ви можете по цьому посиланню</p> <a href="https://invite.viber.com/?g2=AQArY%2BAfeP3FRUlFLZlL8Xswzj56Jw6LZ8hNg0QPgBxUnoO9ftbnzYP3tKbRFrM9">вступити</a>
        <hr>
        <p>Також ви можете написати мені в viber. Я додам вас в групу. Мій номер в viber: <b>+380509864962</b></p>
      </div>
      <div class="modal-footer">
        <button id="test" type="button" class="btn btn-secondary" data-dismiss="modal" name="close">Close</button>
      </div>
    </div> 
  </div> 
</div> -->

 	<div class="container-fluid" id="show1" style="display:none;">
 		<div class="row">
 			<div class="col-sm-7 col-sm-offset-3">
        <form role="form" method="post" action="/<?=Router::FOLDER;?>index/main">
           <div class="form-group">
               <h2></h2>
          <img src="../img/bg3.jpg" id="bg" class="img-rounded center-block"> 
          <div id="spn"><h3>Програма для аналізу даних</h3></div>
          <button id="btn" type="submit" class="btn btn-primary btn-lg btn-block">Розпочати роботу</button>
        </div>
        </form>
 			</div>
 		</div>
 	</div>

  <script>
    function showform(){
     // $( "#test" ).click(function() {
     //   $( "#hide" ).hide();
        $( "#show1" ).show();
    //  });

    }
    function cycleSlider(){
 
      var map = $("#bg");
        
        map.stop(); // stop animation if running
        
        if(map.is(':visible')) {
            map.animate({ right:493, opacity: 0 }, 3800, function() {
                $(this).hide();
            });
        }
        else
            map.show().animate({ right:193, opacity: 1 }, 3800);  
 
   }

    function cycleSlider2(){
 
      var map = $("#btn");
        
        map.stop(); // stop animation if running
        
        if(map.is(':visible')) {
            map.animate({ right:493, opacity: 0 }, 3800, function() {
                $(this).hide();
            });
        }
        else
            map.show().animate({ right:193, opacity: 1 }, 3800);  
 
   }
   function cycleSlider3(){
 
      var map = $("#spn");
        
        map.stop(); // stop animation if running
        
        if(map.is(':visible')) {
            map.animate({ right:493, opacity: 0 }, 3800, function() {
                $(this).hide();
            });
        }
        else
            map.show().animate({ opacity: 1 }, 3800);  
 
   }
   showform();
   cycleSlider();  
   cycleSlider2();     
  cycleSlider3(); 
</script>

 </body>
</html>
