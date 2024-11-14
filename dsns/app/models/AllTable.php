<?php 
class AllTable{
	public $link;
	public $connect;
	public function __construct(){
		
		$this->connect=Connectdb::config();
	}
	public function __destruct(){
		
		mysqli_close($this->connect);
	}

	public function getTable($table_name=" "){
		 $sql_select_raion="SELECT * FROM $table_name ";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}
	public function getTableUnit($table_name=" ",$field=" ",$id=" "){
		 $sql_select_raion="SELECT * FROM $table_name WHERE $field=$id ORDER BY `count_change` DESC";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}

	public function getTableUnitFromYear($table_name=" ",$field=" ",$id=" "){
		 $sql_select_raion="SELECT * FROM $table_name WHERE $field=$id AND YEAR(`date_create`)= YEAR(CURDATE())";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}

	public function getCount($table_name=" ",$id=" "){
		 $sql_select_raion="SELECT COUNT($id) FROM $table_name ";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}

	public function getCountDetails($table_name=" ",$id=" "){
		 $sql_select_raion="SELECT COUNT($id) FROM $table_name WHERE $id=1";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}

	public function getCountDetailsFromDate($date1=" ",$id=" "){
		 $sql_select_raion="SELECT COUNT($id) as 'detail' FROM `stat` WHERE YEAR(`date_create`)= YEAR(CURDATE())-$date1  AND $id=1";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
			// mysqli_close($this->connect);
	}


	public function getTableFromDate($date1=" ", $id=" "){

		 $sql_select_raion="SELECT COUNT($id) as 'year' FROM `stat` WHERE YEAR(`date_create`)= YEAR(CURDATE())-$date1 ";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	 public function getTableFromCurrentYear($id=" ")
	{
		$sql_select_raion="SELECT EXTRACT(MONTH FROM `date_create`) as 'date_m',COUNT(`id`) as 'count_id' FROM `stat` WHERE YEAR(`date_create`)= YEAR(CURDATE()) AND `number_tck`=$id GROUP BY date_m ORDER BY `count_id` ASC ";
		$result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
	}

	public function getTableFromTck(){

		 $sql_select_raion="SELECT `number_tck`,COUNT(`id`) as 'one'  FROM `stat` GROUP BY `number_tck` ORDER BY `one` ASC";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	public function getTableReserveFromTck(){

		 $sql_select_raion="SELECT `number_tck`,COUNT(`reserve`) as 'reserve'  FROM `stat` WHERE `reserve`=1 GROUP BY `number_tck` ORDER BY `reserve` ASC";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	public function getTableDisabilityFromTck(){

		 $sql_select_raion="SELECT `number_tck`,COUNT(`disability`) as 'disability'  FROM `stat` WHERE `disability`=1 GROUP BY `number_tck` ORDER BY `disability` ASC";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	public function getTableFromMonth($id=" "){

		 $sql_select_raion="SELECT * FROM `stat` WHERE MONTH(`date_create`)= MONTH(CURDATE()) AND `number_tck`=$id";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	public function getDataFromDate($date1=" ", $date2=" ",$id=" "){

		 $sql_select_raion="SELECT * FROM `stat` WHERE (`date_create` >=\"$date1\" AND `date_create`<=\"$date2\") AND `number_tck`=$id";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
		//	 mysqli_close($this->connect);
	}

	public function getInfoFromUser($id=" "){
		$sql_select_raion="SELECT `id_tck` as 'tck', COUNT(`id`) as 'kartka' FROM `stat` WHERE YEAR(`date_create`)= YEAR(CURDATE()) GROUP BY `id_tck` ASC ORDER BY `kartka` ASC";
		$result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
	}

	public function getInfoFromWorker(){
		$sql_select_raion="SELECT * FROM `stat` WHERE `count_change`>4;";
		$result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				
				}
				return $result_array;
			 }else{
				return $result_array['error']=1;
			 }
	}

	public function getEnterWorker(){
		  $sql_select_raion="SELECT *,EXTRACT(HOUR FROM `date_enter`) as 'date_m' FROM `worker` WHERE YEAR(`date_ENTER`)= YEAR(CURDATE());";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;

			 }else{
				return $result_array['error']=1;
			 }

		//	 mysqli_close($this->connect);

	}

	
	public function getValidLogin(){
		  $sql_select_raion="SELECT login FROM `reg_user` ";
		 $result_array=array();
		  $res= mysqli_query($this->connect,$sql_select_raion);
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;

			 }else{
				return $result_array['error']=1;
			 }

		//	 mysqli_close($this->connect);

	}

	public function setRegistrationData(){
		 $table_name='reg_user';

		 $email=$_POST['email'];
		 $login=$_POST['login'];
		 $password=$_POST['password'];

		 $sql_insert_user="INSERT INTO $table_name   (email, 
			                                         login,
			                                         password) 
			                 VALUES('$email','$login','$password')";

		 $res= mysqli_query($this->connect,$sql_insert_user);
			//mysqli_close($this->connect);
			
	}

	public function authData($login=" ", $password=" "){

		 $sql_select_raion="SELECT * FROM `reg_user` WHERE `login`=\"$login\" AND `password`=\"$password\"";


		 $res= mysqli_query($this->connect,$sql_select_raion);
		
			$count=  mysqli_num_rows($res);

			 $auth="";
			 if($count>0){
			 	$auth="1";
			 }else{
			 	$auth="2";
			 }
			 return $auth;
			// mysqli_close($this->connect);

	}


	public function authLogin($login=" "){

		 $sql_select_raion="SELECT * FROM `reg_user` WHERE `login`=\"$login\"";
		 $result_array=array();

		 $res= mysqli_query($this->connect,$sql_select_raion);
			
			 if($res!=NULL){
				 while($r=$res->fetch_assoc()){
				array_push($result_array, $r);
				}
				return $result_array;

			 }else{
				return $result_array['error']=1;
			 }
		// mysqli_close($this->connect);

	}

	

}

 ?>