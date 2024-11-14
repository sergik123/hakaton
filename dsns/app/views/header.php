<!DOCTYPE html>
<html lang="uk">
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/main.css">
  <link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="/<?=Router::FOLDER;?>css/bootstrap-datetimepicker.min.css" />
  <script type="text/javascript" src="/<?=Router::FOLDER;?>js/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="/<?=Router::FOLDER;?>js/bootstrap.min.js"></script> 

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <link rel="stylesheet" href="/<?=Router::FOLDER;?>css/style.css">
  <script type="text/javascript">

$(function() {

 $(window).scroll(function() {

 if($(this).scrollTop() != 0) {

 $('#toTop').fadeIn();
 
 } else {

 $('#toTop').fadeOut();

 }

 });
 
 $('#toTop').click(function() {

 $('body,html').animate({scrollTop:0},800);

 });
 
});

</script>
</head>
<?php 
  $uri=trim($_SERVER['REQUEST_URI'],'/');
  $main="style=\"color:#d6d66c;\"";
  if(Router::FOLDER!=''){
    $tmp=2;
  }else{
    $tmp=1;
  }
  
   if(!empty($uri)){
   // $main='';
     $str= explode('/', $uri);
     if($str[$tmp]=="analytics" || $str[$tmp]=="details" || $str[$tmp]=="main" || $str[$tmp]=="change" || $str[$tmp]=="table" || $str[$tmp]=="callback" || $str[$tmp]=="enter"){
      $active="style=\"color:#d6d66c;\"";
      $main='';
     }
   }else{
    //  $main="style=\"color:#f5f5dc;\"";
   }
 ?>
<body>
<nav class="navbar navbar-inverse">
  
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <?php if (!isset($_COOKIE['admin'])): ?>
      <ul id="tabs" class="nav navbar-nav">
        <li class="menuactive"><a href="/<?=Router::FOLDER;?>index/main"<?php if($str[$tmp]==NULL || $str[$tmp]=='main'){echo $active;}else{echo '';};?>>Головна сторінка</a> </li>
         <li class="menuactive">
            <a href="/<?=Router::FOLDER;?>index/analytics"  <?php if($str[$tmp]=='analytics' || $str[$tmp]=="change"){echo $active;}else{echo '';};?>>Детальна інформація</a>
          </li>
           <li class="menuactive">
            <a href="/<?=Router::FOLDER;?>index/details"  <?php if($str[$tmp]=='details'){echo $active;}else{echo '';};?>>Аналіз даних</a>
          </li>
          <li class="menuactive">
            <a href="/<?=Router::FOLDER;?>index/table"  <?php if($str[$tmp]=='table'){echo $active;}else{echo '';};?>>Таблиця даних</a>
          </li>
           <li class="menuactive">
            <a href="/<?=Router::FOLDER;?>index/enter"  <?php if($str[$tmp]=='enter'){echo $active;}else{echo '';};?>>Аналітика входу працівників</a>
          </li>
         <li><a class="menuactive" href="/<?=Router::FOLDER;?>page/callback"  <?php if($str[$tmp]=='callback'){echo $active;}else{echo '';};?>>Зворотній зв'язок</a></li>
      </ul>
    <?php endif; ?>
    <ul class="nav navbar-nav navbar-right">
        <li class="dropdown"><a href="/<?=Router::FOLDER;?>page/reg"><span class="glyphicon glyphicon-user"></span><?php if(isset($_COOKIE['login'])){echo $_COOKIE['login'];}else{echo 'Вхід';}?></a>
           <ul class="dropdown-menu">
            <li><a class="menuactive" href="/index/clearcookie">Вихід</a></li>
          </ul> 
        </li>
      </ul>
    </div>

</nav>
  