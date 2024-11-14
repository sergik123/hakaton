<?php 
/**
 * Main controller. Generate view page.
 *
 * @author sergey
 */
	class IndexController extends ViewController{
		private $view;
		private $addmodel;
		/*метод вызывает ViewController и подключает файл index.php*/
		public function splashAction(){
			$this->generateviewAction('splash');
		}

		public function mainAction(){
			//$_COOKIE['login']=21;
		
				if(isset($_COOKIE['login'])){
				$this->model=new AllTable;
				
				$result=array();
				
				array_push($result, $this->model->getCount('stat','id'));
				array_push($result, $this->model->getCountDetails('stat','reserve'));
				array_push($result, $this->model->getCountDetails('stat','disability'));
				array_push($result, $this->model->getTableFromDate('2','id'),date('Y')-2);
				array_push($result, $this->model->getCountDetailsFromDate('2','reserve'));
				array_push($result, $this->model->getCountDetailsFromDate('2','disability'));

				array_push($result, $this->model->getTableFromDate('1','id'),date('Y')-1);
				array_push($result, $this->model->getCountDetailsFromDate('1','reserve'));
				array_push($result, $this->model->getCountDetailsFromDate('1','disability'));

				array_push($result, $this->model->getTableFromDate('0','id'),date('Y'));
				array_push($result, $this->model->getCountDetailsFromDate('0','reserve'));
				array_push($result, $this->model->getCountDetailsFromDate('0','disability'));

				array_push($result, $this->model->getTableFromTck());
				array_push($result, $this->model->getTableReserveFromTck());
				array_push($result, $this->model->getTableDisabilityFromTck());
				$this->generateviewAction('index',$result);
			}else{
				//$this->model=new AllTable;
				//$result=array();
				//array_push($result, $this->model->getCount('stat','id'));
				$this->generateviewAction('registration',$result);
			}
			
		}
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
       
        if(isset($_POST['datetimeopt1']) && isset($_POST['datetimeopt2'])){
           $string1=$_POST['datetimeopt1'];
	       $pattern1="/(\d+).(\d+).(\d+)/i";
	       $replacement1="\$3-\$2-\$1";
	       $datetimepicker1=preg_replace($pattern1, $replacement1, $string1);

	       $string2=$_POST['datetimeopt2'];
	       $pattern2="/(\d+).(\d+).(\d+)/i";
	       $replacement2="\$3-\$2-\$1";
	       $datetimepicker2=preg_replace($pattern2, $replacement2, $string2);

	        array_push($result, $this->model->getDataFromDate($datetimepicker1,$datetimepicker2,$number_tck));
        }

           if($date1!='' || $date2!=''){
           	array_push($result, $this->model->getDataFromDate($date1,$date2,$number_tck));
           }
           if($number_tck!='' && $date1=='' && $date2=='' && $main=='' && $dop==''){
            array_push($result, $this->model->getTableFromCurrentYear($number_tck));
            // $this->generateviewAction('analytics',$result,$number_tck);
           }
            $this->generateviewAction('analytics',$result,$number_tck);
      
    }

		public function analyticsAction(){
			
			if(isset($_COOKIE['login'])){
					$this->model=new AllTable;
					$result=array();
					array_push($result, $this->model->getTableFromTck());
					//sort($result);
					$this->generateviewAction('analytics',$result);
			}else{
				$this->generateviewAction('404');
			}
		}

		public function detailsAction(){
			if(isset($_COOKIE['login'])){
				$result=array();
				$res=array();
				if(isset($_POST['allfilterbtn'])){
					$this->model=new AllTable;
					$res=$this->model->getInfoFromWorker();
				   $this->generateviewAction('details',$this->model->getInfoFromUser(),$res);
				     
				}
				 
				$this->generateviewAction('details',$result);
			}else{
				$this->generateviewAction('404');
			}
			
		}

		public function showAction($id){

			if($id[0]!=''){
				$this->model=new AllTable;
				$result=array();
				array_push($result, $this->model->getTableUnit('worker','id',$id[0]));
				array_push($result, $this->model->getTableUnitFromYear('stat','id_tck',$id[0]));
				
			}
			$this->generateviewAction('show',$result,'1');
			
		}

		public function numberAction($id){

			if($id[0]!=''){
				$this->model=new AllTable;
				$result=array();
				$res=$this->model->getTableUnit('worker','id',$id[0]);
				array_push($result, $res);
				array_push($result, $this->model->getTableUnit('stat','id',$id[0]));
				
			}
			$this->generateviewAction('show',$result,'2');
			
		}

		public function clearcookieAction(){
	     unset($_COOKIE['login']);
		setcookie('login', null, -1, '/');
	    header("Location: ".$_SERVER['HTTP_REFERER']);
	    exit();
    	}

    	public function tableAction($id){
    		if(isset($_COOKIE['login'])){
    			$this->model=new AllTable;
				$result=array();
			
				if($id[0]!=''){
					$res=$this->model->getTableUnit('stat','YEAR(`date_create`)',$id[0]);
				}else{
					$res=$this->model->getTableUnit('stat','YEAR(`date_create`)','YEAR(CURDATE())');
				}
				
				array_push($result, $res);
				$this->generateviewAction('table',$result);
    		}else{
    			$this->generateviewAction('404');
    		}
    		
    	}

    	public function EnterAction(){
    		if(isset($_COOKIE['login'])){
    			$this->model=new AllTable;
				$this->model=new AllTable;
				$result=array();
				$res=$this->model->getEnterWorker();
				array_push($result, $res);
				$this->generateviewAction('enter',$result);
    		}else{
    			$this->generateviewAction('404');
    		}
    		
    	}
	}
 ?>