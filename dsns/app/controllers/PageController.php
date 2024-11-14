<?php
/**
 * This class receive information from user, include model 
 * and generate need view page
 *
 * @author sergey
 */
class PageController extends ViewController{
    private $view;
    private $model;
    private $id;
    private $path;

    public function changeAction(){
       $this->model=new AllTable;
       $number_tck='';
       $date1='';
       $date2='';
       $main='';
       $dop='';
        $result=array();
        array_push($result, $this->model->getTableFromTck());
        isset($_POST['number_tck']) ? $number_tck=$_POST['number_tck'] : $number_tck='';
       
        $date1=$_POST['datetimeopt1'];
        $date2=$_POST['datetimeopt2'];

        $date1=$_POST['datetimeopt1'];
           $date2=$_POST['datetimeopt2'];

           if($_POST['mainbtn']=='main'){
            $main=' AND `main_dop`=0';
           
           }elseif($_POST['mainbtn']=='dop'){
            $main=' AND `main_dop`!=0';
            $mainch='1';
           }else{
            $main='';
            $mainch='';
           }
           if($number_tck!='' && $date1=='' && $date2=='' && $main=='' && $dop==''){
            array_push($result, $this->model->getTableFromCurrentYear($number_tck));
           }

       $this->generateviewAction('analytics',$result,$number_tck);
    }
   

  
    public function validLoginAction(){
       $this->model=new AllTable;
       $result=array();
       array_push($result, $this->model->getValidLogin());
       echo json_encode($result);
    }

   public function regAction(){
       $this->model=new AllTable;
       $result=array();
       array_push($result, $this->model->getTable('region'));
       array_push($result, $this->model->getValidLogin());
       $this->generateviewAction('registration',$result);
    }
    public function goodAction(){
      if(isset($_FILES['uploadfile']['name'])){
        copy($_FILES['uploadfile']['tmp_name'],'app/uploads/info'.'_'.$_POST['login'].'.db');
        $this->model=new AllTable;
        $this->model->setRegistrationData();
        $this->model->setFilterChange();

      }
      if(isset($_POST['login'])){
        setcookie("login",$_POST['login'],0,'/');
      }
      
       header('Location: http://'.$_SERVER['SERVER_NAME'].'/'.Router::FOLDER);
    }
    public function authAction(){
        $this->model=new AllTable;
        if(isset($_POST['login'])){
          $login=$_POST['login'];
        }
        if(isset($_POST['password'])){
          $password=$_POST['password'];
        }
      
        if(isset($_POST['sendlogin'])){
          
               $res=$this->model->authData($login,$password);
               
                if($res=="1"){
                   setcookie ("admin", "", time() - 3600);
                   header('Location: http://'.$_SERVER['SERVER_NAME'].'/'.Router::FOLDER.'/index/main');
                   if(isset($_POST['check'])){
                    setcookie("login",$_POST['login'],time()+60*60*24*30,'/');
                   }else{
                    setcookie("login",$_POST['login'],0,'/');
                   }
                }
                if($res=="2"){
                 $result="логін чи пароль не співпадають";
                 $this->generateviewAction('registration',$result);
              }
           
        }
    }
    public function callbackAction(){
        $this->model=new AllTable;
        $result=array();
        array_push($result, $this->model->getTable('emailadmin'));
     $this->generateviewAction('callback',$result);
    }
  
    
   
    public function sendemailAction(){
      if(isset($_POST['form-submit'])){
         $this->model=new AllTable;
      $emailadmin=$this->model->getEmailAdmin();
      $emailadm=$emailadmin[0]['email'];
        $name=$_POST['name'];
        $emailuser=$_POST['email'];
        $messageuser=$_POST['message'];

         $to  = "$name &lt;$emailadm> "; 

                $subject = "Повідомлення від користувача $name"; 

                $message = " 
                <html> 
                    <head> 
                        <title>Текст повідомлення</title> 
                    </head> 
                    <body> 
                        <p>$messageuser</p> 
                    </body> 
                </html>"; 

                $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
                $headers .= "From: Користувач $name <$emailuser>\r\n";

                mail($to, $subject, $message, $headers); 

         $this->generateviewAction('sendadmin');
      }
    }

}
