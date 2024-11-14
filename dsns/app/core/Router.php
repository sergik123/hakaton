<?php
/**
 * Class Router create new controller and action 
 *
 * @author sergey
 */
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0); 
class Router {
  const FOLDER='';
    public static function  start(){
      if(self::FOLDER!=""){
           $url=trim($_SERVER['REQUEST_URI'],'/');
        $str=explode('/', $url);
        foreach ($str as $value) {
            if($value=="nuczu"){
               $nuczu= array_shift($str);
             

                if(!empty($str)){
              //$str= explode('/', $uri);
              $controller= array_shift($str);
              $filecontroller= ucfirst($controller).'Controller'; 
              if(!empty($str)){
                  $action= array_shift($str);
                  $fileaction= lcfirst($action).'Action'; 
              }
              if(!empty($str)){
                  $params=$str;
              }else{
                  $params='';
              }
            
             if(!file_exists("controllers/$filecontroller".'.php')){

                 $contr=new $filecontroller;
               
                 if(method_exists($contr,$fileaction)){
                     $contr->$fileaction($params);
                 }
             }
          }else{
            $contr= new IndexController;
            $contr->mainAction();
          }
            }
        }
      }else{
          $uri=trim($_SERVER['REQUEST_URI'],'/');
          if(!empty($uri)){
              $str= explode('/', $uri);
              $controller= array_shift($str);
              $filecontroller= ucfirst($controller).'Controller'; 
              if(!empty($str)){
                  $action= array_shift($str);
                  $fileaction= lcfirst($action).'Action'; 
              }
              if(!empty($str)){
                  $params=$str;
              }else{
                  $params='';
              }
            
             if(!file_exists("controllers/$filecontroller".'.php')){

                 $contr=new $filecontroller;
               
                 if(method_exists($contr,$fileaction)){
                     $contr->$fileaction($params);
                 }
             }
          }else{
            $contr= new IndexController;
            $contr->splashAction();
          }
      } 
    }
}
