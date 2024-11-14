	var id_cur2="";
	var id_cur3="";
	var id_cur4="";
	var field="";
	var field2="";
	var field4="";
	var id_curchange="";
	function setInput(id=" ",id_val=" ", id_text=" "){
		try{
			document.getElementById(id_val).style.backgroundColor='#fff';
		document.getElementById(id_val).style.color='#000';

		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
			if(val!=""){
				document.getElementById(id_val).value=val;
				var txt=sel.options[sel.selectedIndex].innerHTML;
				
				if(id!="code_zahodi1"){
					var txt2=txt.split(';');
					document.getElementById(id_text).value=txt2[1];
					//document.getElementById(id_text).focus();
				}
			}
		}catch(e){

		}
	}
	function setInput6(id=" ",id_val=" "){
		try{
			document.getElementById(id_val).style.backgroundColor='#fff';
		document.getElementById(id_val).style.color='#000';

		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
			if(val!=""){
				if(val=="1"){
					document.getElementById(id_val).value="м.";
				}else if(val=="2"){
					document.getElementById(id_val).value="смт";
				}else if(val=="3"){
					document.getElementById(id_val).value="с.";
				}else if(val=="4"){
					document.getElementById(id_val).value="поза межами мнп";
				}else if(val=="5"){
					document.getElementById(id_val).value="поза межами снп";
				}else if(val=="6"){
					document.getElementById(id_val).value="відселена зона";
				}
			}
		}catch(e){

		}
	}
	function setInput6Click(id=" ",id_val=" "){
		try{
			document.getElementById(id_val).style.backgroundColor='#fff';
		document.getElementById(id_val).style.color='#000';

		var sel=document.getElementById(id);
		var val=sel.value;
			if(val!=""){
				if(val=="1"){
					document.getElementById(id_val).value="м.";
				}else if(val=="2"){
					document.getElementById(id_val).value="смт";
				}else if(val=="3"){
					document.getElementById(id_val).value="с.";
				}else if(val=="4"){
					document.getElementById(id_val).value="поза межами мнп";
				}else if(val=="5"){
					document.getElementById(id_val).value="поза межами снп";
				}else if(val=="6"){
					document.getElementById(id_val).value="відселена зона";
				}
			}
		}catch(e){

		}
	}

	function validfield58(field="",val=""){
		var value=field.value;
		if(value!=""){
			if(value!=val){
				field.style.backgroundColor='#8b0000';
			 	field.style.color='#fff';
			 	field.focus();
			 	field.value="";
			 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
				$('#myModal').modal();
			}
		}
	}
	function validfield59(field="",first="",last=""){
		var value=field.value;
		var flag=false;
		if(value!=""){
			for (var i = first; i <= last; i++) {
				if(i==value){
					flag=true;
				}
			}
			if(flag==false){
				field.style.backgroundColor='#8b0000';
				 	field.style.color='#fff';
				 	field.focus();
				 	field.value="";
				 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
					$('#myModal').modal();
			}	
		}
	}
	function validfield74(val){
		var value=val.value;
		if(value!=""){
			if(value!=1 && value!=2 && value!=3){
				val.style.backgroundColor='#8b0000';
			 	val.style.color='#fff';
			 	val.focus();
			 	val.value="";
			 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
				$('#myModal').modal();
			}
		}
	}
	function validfield74_2(val){
		var value=val.value;
		if(value!=""){
			if(value!=4 && value!=5 && value!=6){
			val.style.backgroundColor='#8b0000';
		 	val.style.color='#fff';
		 	val.focus();
		 	val.value="";
		 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
			$('#myModal').modal();
		}
		}
	}
	function clickfield(val){
		val.style.backgroundColor='#fff';
		val.style.color='#000';
	}
	function getStatya(statya){
		var val=document.getElementById(statya).value;

		if(val==4){
			document.getElementById("dop_stati").value="ч.2 ст. 194 ККУ";
		}
		if(val==5){
			document.getElementById("dop_stati").value="ст. 270 ККУ";
		}
		if(val==6){
			document.getElementById("dop_stati").value="";
		}
	}
	function funcSuccess(data){

		var jsonObj = $.parseJSON(data);
		var html="";
		document.getElementById(id_cur2).innerHTML='';
		var s=document.getElementById(id_cur2).options;
		s[0]=new Option("","",true);
		 jsonObj.forEach(function(el){
		 	for (var i = 0; i < el.length; i++) {
		 		  
		 		 s[s.length]=new Option(el[i].fire_code+';'+el[i].fire_item,el[i].fire_code,true); 
		 	}
    	});
	}
	function funcSuccessch(data){
		var jsonObj = JSON.parse(data);
		var html="";
		document.getElementById(id_curchange).innerHTML='';
		var s=document.getElementById(id_curchange).options;
		s[0]=new Option("","",true);
		 jsonObj.forEach(function(el){
		 	for (var i = 0; i < el.length; i++) {
		 		  
		 		 s[s.length]=new Option(el[i].fire_code+';'+el[i].fire_item,el[i].fire_code,true); 
		 	}
    	});
	}
	function funcSuccess2(data){
		
		var jsonObj = $.parseJSON(data);
		var html="";
		document.getElementById(id_cur2).innerHTML='';
		var s=document.getElementById(id_cur2).options;
		s[0]=new Option("","",true);
		 jsonObj.forEach(function(el){
		 	for (var i = 0; i < el.length; i++) {
		 		  
		 		 s[s.length]=new Option(el[i].code_virib+';'+el[i].item_virib,el[i].code_virib,true); 
		 	}
    	});
	}

	function funcSuccess2ch(data){
		
		var jsonObj = $.parseJSON(data);
		var html="";
		document.getElementById(id_cur2).innerHTML='';
		var s=document.getElementById(id_cur2).options;
		s[0]=new Option("","",true);
		 jsonObj.forEach(function(el){
		 	for (var i = 0; i < el.length; i++) {
		 		  
		 		 s[s.length]=new Option(el[i].code_virib+';'+el[i].item_virib,el[i].code_virib,true); 
		 	}
    	});
	}

	function funcSuccess3(data){
		var val=document.getElementById(id_cur2).value;
		var jsonObj = $.parseJSON(data);
		var flag=false;
		var first;
		var last;
		 jsonObj.forEach(function(el){
		 	first=el[0][field];
		 	last=el[el.length-1][field];
		 	for (var i = 0; i < el.length; i++) {
		 		if(val!=""){
		 			if(val==el[i][field]){
		 		  	flag=true;
		 		  }
		 		}else{
		 			flag=true;
		 		}
		 	}
    	});
		 if(flag==false){
		 	document.getElementById(id_cur2).style.backgroundColor='#8b0000';
		 	document.getElementById(id_cur2).style.color='#fff';
		 	document.getElementById(id_cur2).focus();
		 	document.getElementById(id_cur2).value="";
		 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
		 	//alert('Такого кода не існує');
		 	$('#myModal').modal();
		 }
	}
	function funcSuccess31(data){
		var val=document.getElementById(id_cur2).value;
		var jsonObj = $.parseJSON(data);
		var flag=false;
		var first;
		var last;
		 jsonObj.forEach(function(el){
		 	first=el[0][field];
		 	last=el[el.length-1][field];
		 	for (var i = 0; i < el.length; i++) {
		 		if(val!=""){
		 			if(val==el[i][field]){
		 		  	flag=true;
		 		  }
		 		}else{
		 			flag=true;
		 		}
		 	}
    	});
		 if(flag==false){
		 	document.getElementById(id_cur2).style.backgroundColor='#8b0000';
		 	document.getElementById(id_cur2).style.color='#fff';
		 	document.getElementById(id_cur2).focus();
		 	document.getElementById(id_cur2).value="";
		 	document.getElementById('error_msg').innerHTML="Такого кода не існує";
		 	//alert('Такого кода не існує');
		 	$('#myModal').modal();
		 }
	}
	function funcSuccess4(data){

		var jsonObj = $.parseJSON(data);
		jsonObj.forEach(function(el){
			document.getElementById(id_cur3).value=el[0][field2];
			document.getElementById(id_cur3).focus();
    	});
	}
	function funcSuccess5(data){
		var val=document.getElementById('exampleInputEmail4').value;
			var jsonObj = $.parseJSON(data);
		var flag=false;
		jsonObj.forEach(function(el){
			for (var i = 0; i < el.length; i++) {
		 		  if(val==el[i].login){
		 		  	flag=true;
		 		  }
		 	}
    	});
    	if(flag){
    		 alert('Такий логін вже існує');
    		 document.getElementById('exampleInputEmail4').value="";
    	}
	}
	function funcSuccess6(data){
		var val=document.getElementById(id_cur4).value;
		var jsonObj = $.parseJSON(data);
		var flag=false;
		var first;
		var last;
		if(jsonObj==0){
			flag=true;
		}
		 if(flag==false){
		 	document.getElementById(id_cur4).style.backgroundColor='#8b0000';
		 	document.getElementById(id_cur4).style.color='#fff';
		 	//document.getElementById(id_cur4).focus();
		 	document.getElementById(id_cur4).value="";
		 	document.getElementById('error_msg').innerHTML="Картка з таким номером вже існує";
		 	//alert('Такого кода не існує');
		 	$('#myModal').modal();
		 }
	}
	function funcSuccess67(data){
		var jsonObj = $.parseJSON(data);
		for (var i = 0; i < jsonObj[0].length; i++) {
			jsonObj.forEach(function(el){
				if(el[i].numbercartka!=null){
					var num=parseInt(el[i].numbercartka);
					document.getElementById('id_kartka').value=num+1;
					document.getElementById('id_dop').value=0;
				}else{
					document.getElementById('id_kartka').value=1;
					document.getElementById('id_dop').value=0;
				}
    		});
		}
	}
	function funcSuccess32(data){
		$("#code_name").empty();
		

		var jsonObj = $.parseJSON(data);
		for (var i = 0; i < jsonObj[0].length; i++) {
			jsonObj.forEach(function(el){
				var txt='<option id="'+el[i].current_raion+'" value="'+el[i].code_np+'">'+el[i].code_np+";"+el[i].name_np+'</option>';
				$("#code_name").append($(txt));
				
    		});
		}
		
		/*jsonObj.forEach(function(el){
			console.log(el[0].name_np);
    	});*/
	}

	/*function updateData(){

		$.ajax({
			url: '/Post/goodday',
			data: 'field="qwerty"',
			cache: false,
			dataType:'json',
			success: function(data){
				if(data.result=="yes"){
					alert("YES");
				}
			}
		});

	}*/
	function getDataChange(id=" ",id_cur=" ",folder=" "){
		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
		var val2=val.split('-');
		var val3=val2[0].split('[');
		var val4=val2[1].split(']');
		$.ajax({
			url: "/"+folder+"Page/getDataChange1",
			type: "POST",
			data: ({id_fieldch1: val3[1], id_fieldch2: val4[0]}),
			dataType: "html",
			success: funcSuccessch
		});
		id_curchange=id_cur;
	}

	function getData(id=" ",id_cur=" ",folder=" "){
		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
		var val2=val.split('-');
		var val3=val2[0].split('[');
		var val4=val2[1].split(']');

		$.ajax({
			url: "/"+folder+"Page/getData",
			type: "POST",
			data: ({id_field: val3[1], id_field2: val4[0]}),
			dataType: "html",
			success: funcSuccess
		});
		id_cur2=id_cur;
	}
	function getData2(id=" ",id_cur=" ",folder=" "){
		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
		var val2=val.split('-');
		var val3=val2[0].split('[');
		var val4=val2[1].split(']');
		$.ajax({
			url: "/"+folder+"Page/getData2",
			type: "POST",
			data: ({id_field3: val3[1], id_field4: val4[0]}),
			dataType: "html",
			success: funcSuccess2
		});
		id_cur2=id_cur;
	}


	function getData2Change(id=" ",id_cur=" ",folder=" "){
		var sel=document.getElementById(id);
		var val=sel.options[sel.selectedIndex].value;
		var val2=val.split('-');
		var val3=val2[0].split('[');
		var val4=val2[1].split(']');
		$.ajax({
			url: "/"+folder+"Page/getDataChange2",
			type: "POST",
			data: ({id_field3: val3[1], id_field4: val4[0]}),
			dataType: "html",
			success: funcSuccess2ch
		});
		id_cur2=id_cur;
	}


	function getData3(id=" ",id_cur=" ",id_field=" ",table=" ",id_code=" ",folder=" "){
		var sel=document.getElementById(id).value;
		$.ajax({
			url: "/"+folder+"Page/getData3",
			type: "POST",
			data: ({id_field5: sel, id_field6: id_field, id_field7: table, id_field8: id_code}),
			dataType: "html",
			success: funcSuccess4
		});
		id_cur3=id_cur;
		field2=id_field;
	}
	function getDataRaion(id=" ",id_cur=" ",id_field=" ",table=" ",id_code=" ",folder=" "){
		var sel=document.getElementById(id).value;
		$.ajax({
			url: "/"+folder+"Page/getDataRaion",
			type: "POST",
			data: ({id_field5: sel, id_field6: id_field, id_field7: table, id_field8: id_code}),
			dataType: "html",
			success: funcSuccess4
		});
		id_cur3=id_cur;
		field2=id_field;
	}
	function validField(table=" ",id_field=" ",id_cur=" ",folder=" "){
			document.getElementById(id_cur).style.backgroundColor='#fff';
		 	document.getElementById(id_cur).style.color='#000';
			$.ajax({
				url: "/"+folder+"Page/validFieldTable",
				type: "POST",
				data: ({table_field: table, id_table_field: id_field}),
				dataType: "html",
				success: funcSuccess3
			});
			id_cur2=id_cur;
			field=id_field;
	}
	function validFieldRaion(table=" ",id_field=" ",id_cur=" ",folder=" "){
			document.getElementById(id_cur).style.backgroundColor='#fff';
		 	document.getElementById(id_cur).style.color='#000';
			$.ajax({
				url: "/"+folder+"Page/validFieldRaionTable",
				type: "POST",
				data: ({table_field: table, id_table_field: id_field}),
				dataType: "html",
				success: funcSuccess31
			});
			id_cur2=id_cur;
			field=id_field;
	}
	function fieldsix(table=" ",folder=" "){
		$.ajax({
			url: "/"+folder+"Page/getSixFieldTable",
			type: "POST",
			data: ({table_field: table}),
			dataType: "html",
			success: funcSuccess32
		});
		
	}

	function valid4TableField(table=" ",id_field=" ",id_cur=" ",folder=" "){
			document.getElementById(id_cur).style.backgroundColor='#fff';
		 	document.getElementById(id_cur).style.color='#000';
		 	var id_raion=document.getElementById('id_raion').value;
		 	var id_region=document.getElementById('id_region').value;
		 	var number_kartka=document.getElementById('id_kartka').value;
		 	var dop_kartka=document.getElementById('id_dop').value;
			$.ajax({
				url: "/"+folder+"Page/valid4Table",
				type: "POST",
				data: ({table_field: table, id_table_field: id_field, id_table_raion: id_raion, id_table_region: id_region, id_table_kartka: number_kartka, dop_table_kartka: dop_kartka}),
				dataType: "html",
				success: funcSuccess6
			});
			id_cur4=id_cur;
			field4=id_field;
	}
    function valid4MaxField(folder=" "){
		 	var id_raion=document.getElementById('id_raion').value;
		 	var id_region=document.getElementById('id_region').value;
			$.ajax({
				url: "/"+folder+"Page/validMaxTable",
				type: "POST",
				data: ({id_table_raion: id_raion, id_table_region: id_region}),
				dataType: "html",
				success: funcSuccess67
			});
	}

	function validLoginField(id_field=" ",folder=" "){
		var sel=document.getElementById(id_field).value;
		$.ajax({
			url: "/"+folder+"Page/validLogin",
			type: "POST",
			success: funcSuccess5
		});
	}
	function clearSevenField(){
		var t=document.getElementById('fire_obj').value;
		var tn=parseInt(t);
		if((tn>=1601 && tn<=1605) ||(tn>=1701 && tn<=1707) || (tn>=1801 && tn<=1818)){
			document.getElementById('poverhovist').value="";
			document.getElementById('poverh').value="";
			document.getElementById('stupin_vognest').value="";
			document.getElementById('category').value="";
		}
	}
	function clearFifteenField(val){
		var t=document.getElementById('in_info').value;
		var ch=val.value;
		var tn=parseInt(t);
		if(tn==3){
			if(ch==1){
				val.value="";
			}
		}
	}
	
	function clearFiftySeven(val){
		var t=document.getElementById('spz').value;
		var tn=parseInt(t);
		if(tn==2){
			val.value="";
		}
	}

	/*function getemptyField7(arr){
		var t=document.getElementById('fire_obj').value;
		for (var i = 0; i < arr.length; i++) {
			if(t==arr[i]){
				console.log(t);
				document.getElementById('comment').value="";
			}
		}
	}*/
	function getemptyField(val1, val2, arr){
		var t=document.getElementById(val1).value;
		for (var i = 0; i < arr.length; i++) {
			if(t==arr[i]){
				document.getElementById(val2).value="";
			}
		}
		
	}

	function validInt(val){
		var t=val.value;
		for (var i = 0; i < t.length; i++) {
			var s=t.charAt(i);
			if(s<'0' || s>'9'){
				val.value="";
			}
		}
	}
	function validFloat(val){
		var t=val.value;
		for (var i = 0; i < t.length; i++) {
			var s=t.charAt(i);
			if(s!=',' && (s<'0' || s>'9'))
			{
				val.value="";
			}
		}
	}
	function sumSet(val){
		var sum=parseFloat(val.value.replace(/[,]+/g, '.'));
		var sum_val=sum.toFixed(3);
		if(sum){
			val.value=sum_val.replace(".",",");
		}
	}
	function validChange(val){
		var item=val.value;
		if(item=="1" || item=="3"){
			document.getElementById('hidden_block').style.display='block';
		}else{
			document.getElementById('hidden_block').style.display='none';
		}
	}
	function setDied(val){
		var item=val.value;
		if(item==""){
			document.getElementById('fio1').style.backgroundColor="#fff";
			document.getElementById('vik1').style.backgroundColor="#fff";
			document.getElementById('stat1').style.backgroundColor="#fff";
			document.getElementById('status1').style.backgroundColor="#fff";
			document.getElementById('moment1').style.backgroundColor="#fff";
			document.getElementById('in_umovi1').style.backgroundColor="#fff";

			document.getElementById('fio2').style.backgroundColor="#fff";
			document.getElementById('vik2').style.backgroundColor="#fff";
			document.getElementById('stat2').style.backgroundColor="#fff";
			document.getElementById('status2').style.backgroundColor="#fff";
			document.getElementById('moment2').style.backgroundColor="#fff";
			document.getElementById('in_umovi2').style.backgroundColor="#fff";

			document.getElementById('fio3').style.backgroundColor="#fff";
			document.getElementById('vik3').style.backgroundColor="#fff";
			document.getElementById('stat3').style.backgroundColor="#fff";
			document.getElementById('status3').style.backgroundColor="#fff";
			document.getElementById('moment3').style.backgroundColor="#fff";
			document.getElementById('in_umovi3').style.backgroundColor="#fff";

			document.getElementById('fio4').style.backgroundColor="#fff";
			document.getElementById('vik4').style.backgroundColor="#fff";
			document.getElementById('stat4').style.backgroundColor="#fff";
			document.getElementById('status4').style.backgroundColor="#fff";
			document.getElementById('moment4').style.backgroundColor="#fff";
			document.getElementById('in_umovi4').style.backgroundColor="#fff";

			document.getElementById('fio5').style.backgroundColor="#fff";
			document.getElementById('vik5').style.backgroundColor="#fff";
			document.getElementById('stat5').style.backgroundColor="#fff";
			document.getElementById('status5').style.backgroundColor="#fff";
			document.getElementById('moment5').style.backgroundColor="#fff";
			document.getElementById('in_umovi5').style.backgroundColor="#fff";
		}
		if(item=="1"){
			document.getElementById('fio1').style.backgroundColor="#2dde7c";
			document.getElementById('vik1').style.backgroundColor="#2dde7c";
			document.getElementById('stat1').style.backgroundColor="#2dde7c";
			document.getElementById('status1').style.backgroundColor="#2dde7c";
			document.getElementById('moment1').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi1').style.backgroundColor="#2dde7c";
		}
		if(item=="2"){
			document.getElementById('fio1').style.backgroundColor="#2dde7c";
			document.getElementById('vik1').style.backgroundColor="#2dde7c";
			document.getElementById('stat1').style.backgroundColor="#2dde7c";
			document.getElementById('status1').style.backgroundColor="#2dde7c";
			document.getElementById('moment1').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi1').style.backgroundColor="#2dde7c";

			document.getElementById('fio2').style.backgroundColor="#2dde7c";
			document.getElementById('vik2').style.backgroundColor="#2dde7c";
			document.getElementById('stat2').style.backgroundColor="#2dde7c";
			document.getElementById('status2').style.backgroundColor="#2dde7c";
			document.getElementById('moment2').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi2').style.backgroundColor="#2dde7c";
		}
		if(item=="3"){
			document.getElementById('fio1').style.backgroundColor="#2dde7c";
			document.getElementById('vik1').style.backgroundColor="#2dde7c";
			document.getElementById('stat1').style.backgroundColor="#2dde7c";
			document.getElementById('status1').style.backgroundColor="#2dde7c";
			document.getElementById('moment1').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi1').style.backgroundColor="#2dde7c";

			document.getElementById('fio2').style.backgroundColor="#2dde7c";
			document.getElementById('vik2').style.backgroundColor="#2dde7c";
			document.getElementById('stat2').style.backgroundColor="#2dde7c";
			document.getElementById('status2').style.backgroundColor="#2dde7c";
			document.getElementById('moment2').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi2').style.backgroundColor="#2dde7c";

			document.getElementById('fio3').style.backgroundColor="#2dde7c";
			document.getElementById('vik3').style.backgroundColor="#2dde7c";
			document.getElementById('stat3').style.backgroundColor="#2dde7c";
			document.getElementById('status3').style.backgroundColor="#2dde7c";
			document.getElementById('moment3').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi3').style.backgroundColor="#2dde7c";
		}
		if(item=="4"){
			document.getElementById('fio1').style.backgroundColor="#2dde7c";
			document.getElementById('vik1').style.backgroundColor="#2dde7c";
			document.getElementById('stat1').style.backgroundColor="#2dde7c";
			document.getElementById('status1').style.backgroundColor="#2dde7c";
			document.getElementById('moment1').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi1').style.backgroundColor="#2dde7c";

			document.getElementById('fio2').style.backgroundColor="#2dde7c";
			document.getElementById('vik2').style.backgroundColor="#2dde7c";
			document.getElementById('stat2').style.backgroundColor="#2dde7c";
			document.getElementById('status2').style.backgroundColor="#2dde7c";
			document.getElementById('moment2').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi2').style.backgroundColor="#2dde7c";

			document.getElementById('fio3').style.backgroundColor="#2dde7c";
			document.getElementById('vik3').style.backgroundColor="#2dde7c";
			document.getElementById('stat3').style.backgroundColor="#2dde7c";
			document.getElementById('status3').style.backgroundColor="#2dde7c";
			document.getElementById('moment3').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi3').style.backgroundColor="#2dde7c";

			document.getElementById('fio4').style.backgroundColor="#2dde7c";
			document.getElementById('vik4').style.backgroundColor="#2dde7c";
			document.getElementById('stat4').style.backgroundColor="#2dde7c";
			document.getElementById('status4').style.backgroundColor="#2dde7c";
			document.getElementById('moment4').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi4').style.backgroundColor="#2dde7c";
		}
		if(item=="5"){
			document.getElementById('fio1').style.backgroundColor="#2dde7c";
			document.getElementById('vik1').style.backgroundColor="#2dde7c";
			document.getElementById('stat1').style.backgroundColor="#2dde7c";
			document.getElementById('status1').style.backgroundColor="#2dde7c";
			document.getElementById('moment1').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi1').style.backgroundColor="#2dde7c";

			document.getElementById('fio2').style.backgroundColor="#2dde7c";
			document.getElementById('vik2').style.backgroundColor="#2dde7c";
			document.getElementById('stat2').style.backgroundColor="#2dde7c";
			document.getElementById('status2').style.backgroundColor="#2dde7c";
			document.getElementById('moment2').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi2').style.backgroundColor="#2dde7c";

			document.getElementById('fio3').style.backgroundColor="#2dde7c";
			document.getElementById('vik3').style.backgroundColor="#2dde7c";
			document.getElementById('stat3').style.backgroundColor="#2dde7c";
			document.getElementById('status3').style.backgroundColor="#2dde7c";
			document.getElementById('moment3').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi3').style.backgroundColor="#2dde7c";

			document.getElementById('fio4').style.backgroundColor="#2dde7c";
			document.getElementById('vik4').style.backgroundColor="#2dde7c";
			document.getElementById('stat4').style.backgroundColor="#2dde7c";
			document.getElementById('status4').style.backgroundColor="#2dde7c";
			document.getElementById('moment4').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi4').style.backgroundColor="#2dde7c";

			document.getElementById('fio5').style.backgroundColor="#2dde7c";
			document.getElementById('vik5').style.backgroundColor="#2dde7c";
			document.getElementById('stat5').style.backgroundColor="#2dde7c";
			document.getElementById('status5').style.backgroundColor="#2dde7c";
			document.getElementById('moment5').style.backgroundColor="#2dde7c";
			document.getElementById('in_umovi5').style.backgroundColor="#2dde7c";
		}
	}
	function rangeField(val,id){
		if(val.value>id){
			val.value="";
		}
	}
	function seventeenField(val){
		if(val.value==0){
			val.value="";
		}
	}
	function valid18(){
		var val18=parseInt(document.getElementById('zag').value);
		var val18_1=parseInt(document.getElementById('zag_ditei').value);
		var val18_2=parseInt(document.getElementById('zag_fireman').value);
		if(val18_1>val18){
			document.getElementById('error_msg').innerHTML="Сума цього та наступного поля має бути меншою або дорівнювати загальній кількості загиблих";
			document.getElementById('zag_ditei').style.backgroundColor='#8b0000';
		 	document.getElementById('zag_ditei').style.color='#fff';
		 	document.getElementById('zag_ditei').focus();
		 	document.getElementById('zag_ditei').value="";
		 	$('#myModal').modal();
		 	return 1;
		}else if(val18_2>val18){
			document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості загиблих";
			document.getElementById('zag_fireman').style.backgroundColor='#8b0000';
		 	document.getElementById('zag_fireman').style.color='#fff';
		 	document.getElementById('zag_fireman').focus();
		 	document.getElementById('zag_fireman').value="";
		 	$('#myModal').modal();
		 	return 1;
		}else if((val18_1+val18_2)>val18){
			if(val18_1>val18_2){
				document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості загиблих";
				document.getElementById('zag_ditei').style.backgroundColor='#8b0000';
			 	document.getElementById('zag_ditei').style.color='#fff';
			 	document.getElementById('zag_ditei').focus();
			 	document.getElementById('zag_ditei').value="";
			 	$('#myModal').modal();
			 	return 1;
			}else{
				document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості загиблих";
				document.getElementById('zag_fireman').style.backgroundColor='#8b0000';
			 	document.getElementById('zag_fireman').style.color='#fff';
			 	document.getElementById('zag_fireman').focus();
			 	document.getElementById('zag_fireman').value="";
			 	$('#myModal').modal();
			 	return 1;
			}
		}
	}
	function valid24(){
		var val18=parseInt(document.getElementById('travm').value);
		var val18_1=parseInt(document.getElementById('travm_ditei').value);
		var val18_2=parseInt(document.getElementById('travm_fireman').value);
		if(val18_1>val18){
			document.getElementById('error_msg').innerHTML="Сума цього та наступного поля має бути меншою або дорівнювати загальній кількості травмованих";
			document.getElementById('travm_ditei').style.backgroundColor='#8b0000';
		 	document.getElementById('travm_ditei').style.color='#fff';
		 	document.getElementById('travm_ditei').focus();
		 	document.getElementById('travm_ditei').value="";
		 	$('#myModal').modal();
		 	return 1;
		}else if(val18_2>val18){
			document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості травмованих";
			document.getElementById('travm_fireman').style.backgroundColor='#8b0000';
		 	document.getElementById('travm_fireman').style.color='#fff';
		 	document.getElementById('travm_fireman').focus();
		 	document.getElementById('travm_fireman').value="";
		 	$('#myModal').modal();
		 	return 1;
		}else if((val18_1+val18_2)>val18){
			if(val18_1>val18_2){
				document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості травмованих";
				document.getElementById('travm_ditei').style.backgroundColor='#8b0000';
			 	document.getElementById('travm_ditei').style.color='#fff';
			 	document.getElementById('travm_ditei').focus();
			 	document.getElementById('travm_ditei').value="";
			 	$('#myModal').modal();
			 	return 1;
			}else{
				document.getElementById('error_msg').innerHTML="Сума цього та попереднього поля має бути меншою або дорівнювати загальній кількості травмованих";
				document.getElementById('travm_fireman').style.backgroundColor='#8b0000';
			 	document.getElementById('travm_fireman').style.color='#fff';
			 	document.getElementById('travm_fireman').focus();
			 	document.getElementById('travm_fireman').value="";
			 	$('#myModal').modal();
			 	return 1;
			}
		}
	}
	function valid10(val){
		if(val.value=="11" ||val.value=="12" || val.value=="13"){
			if(document.getElementById('umovi_dialn').value=="")
			document.getElementById('umovi_dialn').style.backgroundColor='#8b0000';
		}else{
			document.getElementById('umovi_dialn').style.backgroundColor='#fff';
		}
	}
	function valid50(val){
		if(val.value=="1" || val.value=="2"){
			if(document.getElementById('uchasnik').value=="")
			document.getElementById('uchasnik').style.backgroundColor="#8b0000";

			if(document.getElementById('kilk_uchasnik').value=="")
				document.getElementById('kilk_uchasnik').style.backgroundColor="#8b0000";

			if(document.getElementById('fire_car').value=="")
				document.getElementById('fire_car').style.backgroundColor="#8b0000";

			if(document.getElementById('kilk_tehn').value=="")
				document.getElementById('kilk_tehn').style.backgroundColor="#8b0000";
		}
		
		if(val.value=="3"){
			document.getElementById('uchasnik').style.backgroundColor="#fff";
			document.getElementById('kilk_uchasnik').style.backgroundColor="#fff";
			document.getElementById('fire_car').style.backgroundColor="#fff";
			document.getElementById('kilk_tehn').style.backgroundColor="#fff";
			document.getElementById('rechovini').style.backgroundColor="#fff";
			document.getElementById('time2').value=document.getElementById('datetime1').value;
		}
	}
	function validSum_main(f, state,folder=" "){
		var flag_valid=true;
		var sum=document.getElementById('sum_main').value;

		var zn_bud=document.getElementById('zn_bud').value;
		var posh_bud=document.getElementById('posh_bud').value;
		var zn_tehn=document.getElementById('zn_tehn').value;
		var posh_tehn=document.getElementById('posh_tehn').value;
		var zn_zerno=document.getElementById('zn_zerno').value;
		var zn_hl_kor=document.getElementById('zn_hl_kor').value;
		var zn_hl_valk=document.getElementById('zn_hl_valk').value;
		var zn_kor=document.getElementById('zn_kor').value;
		var zn_torf=document.getElementById('zn_torf').value;
		var posh_torf=document.getElementById('posh_torf').value;
		var zn_tvar=document.getElementById('zn_tvar').value;
		var zn_pt=document.getElementById('zn_pt').value;
		var zn_dop=document.getElementById('zn_dop').value;

		var item73=document.getElementById('umovi_dialn').value;
		var item10=document.getElementById('pidkontrol').value;

		var val60_1=document.getElementById('uchasnik').value;
		var val60_2=document.getElementById('uchasnik1').value;
		var val60_3=document.getElementById('uchasnik2').value;
		var val60_4=document.getElementById('uchasnik3').value;
		var val60_5=document.getElementById('uchasnik4').value;

		var val62_1=document.getElementById('fire_car').value;
		var val62_2=document.getElementById('fire_car1').value;
		var val62_3=document.getElementById('fire_car2').value;
		var val62_4=document.getElementById('fire_car3').value;
		var val62_5=document.getElementById('fire_car4').value;

		var val64_1=document.getElementById('fire_stvol').value;
		var val64_2=document.getElementById('fire_stvol1').value;
		var val64_3=document.getElementById('fire_stvol2').value;

		var val69_1=document.getElementById('vik_gdzs').value;
		var val69_2=document.getElementById('kilk_lanok').value;
		var val70=document.getElementById('kilk_hvl').value;

		var val37=document.getElementById('vr_tv').value;
		var val38=document.getElementById('vr_p').value;
		var val39=document.getElementById('vr_b').value;
		var val40=document.getElementById('vr_t').value;
		var val41=document.getElementById('vr_zerno').value;
		var val42=document.getElementById('vr_hl_k').value;
		var val42_1=document.getElementById('vr_hl_v').value;
		var val43=document.getElementById('vr_k').value;
		var val44=document.getElementById('vr_torf').value;
		var val45=document.getElementById('vr_dop').value;
		var val46=document.getElementById('vr_sum').value;

		var val71=document.getElementById('time9').value;
		var val72=document.getElementById('vid_perev').value;

		var val57=document.getElementById('spz').value;
		var val58=document.getElementById('system_spz').value;
		var val59=document.getElementById('result_dii').value;

		if(val57=="1"){
			if(val58==""){
				document.getElementById('error_msg').innerHTML="Позиція 58 має бути заповнена";
				document.getElementById('system_spz').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
			if(val59==""){
				document.getElementById('error_msg').innerHTML="Позиція 59 має бути заповнена";
				document.getElementById('result_dii').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}

		if(val71!=""){
			if(val72==""){
				document.getElementById('error_msg').innerHTML="Позиція 72 має бути заповнена";
				document.getElementById('vid_perev').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}

		if(val72!=""){
			if(val71==""){
				document.getElementById('error_msg').innerHTML="Позиція 71 має бути заповнена";
				document.getElementById('time9').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}

		if(val37!="" || val38!="" || val39!="" || val40!="" || val41!="" || val42!="" || val42_1!="" || val43!="" || val44!="" || val45!=""){
			if(val46==""){
				document.getElementById('error_msg').innerHTML="Позиція 46 має бути заповнена";
				document.getElementById('vr_sum').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(val46>0){
			if(val37=="" && val38=="" && val39=="" && val40=="" && val41=="" && val42=="" && val42_1=="" && val43=="" && val44=="" && val45==""){
				document.getElementById('error_msg').innerHTML="Одна із позицій 36-45 має бути заповнена";
				document.getElementById('vr_sum').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(state==0)
		valid4TableField('kartka_obliku','main_dop','id_dop',folder);

		if(valid18()=="1"){
			flag_valid=false;
		}
		if(valid24()=="1"){
			flag_valid=false;
		}

		if(document.getElementById('name_object').value==""){
			document.getElementById('error_msg').innerHTML="Позиція 6 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
		}
		if(document.getElementById('comment').value==""){
			document.getElementById('error_msg').innerHTML="Позиція 7 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
		}
		if(document.getElementById('name_misce').value==""){
			document.getElementById('error_msg').innerHTML="Позиція 14 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
		}
		if(document.getElementById('vibir3').value==""){
			document.getElementById('error_msg').innerHTML="Позиція 15 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
		}
		if(document.getElementById('pricina2').value==""){
			document.getElementById('error_msg').innerHTML="Позиція 16 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
		}

		var val7=parseInt(document.getElementById('fire_obj').value);
		if((val7>=1 && val7<210) || (val7>=1501 && val7<1520)){
			if(document.getElementById('category').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 13 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(document.getElementById('zag_ditei').value!="" || document.getElementById('zag_fireman').value!="" ){
			if(document.getElementById('zag').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 18 має бути заповнена";
				document.getElementById('zag').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(document.getElementById('travm_ditei').value!="" || document.getElementById('travm_fireman').value!="" ){
			if(document.getElementById('travm').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 24 має бути заповнена";
				document.getElementById('travm').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}

		if(document.getElementById('poverh').value>document.getElementById('poverhovist').value){
			if(document.getElementById('poverh').value!="201" && document.getElementById('poverh').value!="202" && document.getElementById('poverh').value!="203" && document.getElementById('poverh').value!="204"){
				document.getElementById('error_msg').innerHTML="Поверх пожежі не може бути більшим, ніж поверхів у будинку";
				document.getElementById('poverh').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(document.getElementById('poverhovist').value!=""){
			if(document.getElementById('poverh').value==""){
				document.getElementById('error_msg').innerHTML="Це поле має бути заповнено";
				document.getElementById('poverh').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}


		if(document.getElementById('fio1').value!=""){
			if(document.getElementById('stat1').value=="" || document.getElementById('status1').value=="" || 
				document.getElementById('moment1').value=="" || document.getElementById('in_umovi1').value==""){

				document.getElementById('error_msg').innerHTML="Позиція 20-23 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
			if(document.getElementById('stat1').value==""){
				document.getElementById('stat1').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('status1').value==""){
				document.getElementById('status1').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('moment1').value==""){
				document.getElementById('moment1').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('in_umovi1').value==""){
				document.getElementById('in_umovi1').style.backgroundColor='#8b0000';
			}
		}else{
			document.getElementById('stat1').style.backgroundColor='#fff';
			document.getElementById('status1').style.backgroundColor='#fff';
			document.getElementById('moment1').style.backgroundColor='#fff';
			document.getElementById('in_umovi1').style.backgroundColor='#fff';
		}

		if(document.getElementById('fio2').value!=""){
			if(document.getElementById('stat2').value=="" || document.getElementById('status2').value=="" || 
				document.getElementById('moment2').value=="" || document.getElementById('in_umovi2').value==""){

				document.getElementById('error_msg').innerHTML="Позиція 20-23 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
				if(document.getElementById('stat2').value==""){
				document.getElementById('stat2').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('status2').value==""){
				document.getElementById('status2').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('moment2').value==""){
				document.getElementById('moment2').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('in_umovi2').value==""){
				document.getElementById('in_umovi2').style.backgroundColor='#8b0000';
			}
		}else{
			document.getElementById('stat2').style.backgroundColor='#fff';
			document.getElementById('status2').style.backgroundColor='#fff';
			document.getElementById('moment2').style.backgroundColor='#fff';
			document.getElementById('in_umovi2').style.backgroundColor='#fff';
		}

		if(document.getElementById('fio3').value!=""){
			if(document.getElementById('stat3').value=="" || document.getElementById('status3').value=="" || 
				document.getElementById('moment3').value=="" || document.getElementById('in_umovi3').value==""){

				document.getElementById('error_msg').innerHTML="Позиція 20-23 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
			if(document.getElementById('stat3').value==""){
				document.getElementById('stat3').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('status3').value==""){
				document.getElementById('status3').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('moment3').value==""){
				document.getElementById('moment3').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('in_umovi3').value==""){
				document.getElementById('in_umovi3').style.backgroundColor='#8b0000';
			}
		}else{
			document.getElementById('stat3').style.backgroundColor='#fff';
			document.getElementById('status3').style.backgroundColor='#fff';
			document.getElementById('moment3').style.backgroundColor='#fff';
			document.getElementById('in_umovi3').style.backgroundColor='#fff';
		}

		if(document.getElementById('fio4').value!=""){
			if(document.getElementById('stat4').value=="" || document.getElementById('status4').value=="" || 
				document.getElementById('moment4').value=="" || document.getElementById('in_umovi4').value==""){

				document.getElementById('error_msg').innerHTML="Позиція 20-23 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
				if(document.getElementById('stat4').value==""){
				document.getElementById('stat4').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('status4').value==""){
				document.getElementById('status4').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('moment4').value==""){
				document.getElementById('moment4').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('in_umovi4').value==""){
				document.getElementById('in_umovi4').style.backgroundColor='#8b0000';
			}
		}else{
			document.getElementById('stat4').style.backgroundColor='#fff';
			document.getElementById('status4').style.backgroundColor='#fff';
			document.getElementById('moment4').style.backgroundColor='#fff';
			document.getElementById('in_umovi4').style.backgroundColor='#fff';
		}

		if(document.getElementById('fio5').value!=""){
			if(document.getElementById('stat5').value=="" || document.getElementById('status5').value=="" || 
				document.getElementById('moment5').value=="" || document.getElementById('in_umovi5').value==""){

				document.getElementById('error_msg').innerHTML="Позиція 20-23 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
			if(document.getElementById('stat5').value==""){
				document.getElementById('stat5').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('status5').value==""){
				document.getElementById('status5').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('moment5').value==""){
				document.getElementById('moment5').style.backgroundColor='#8b0000';
			}
			if(document.getElementById('in_umovi5').value==""){
				document.getElementById('in_umovi5').style.backgroundColor='#8b0000';
			}
		}else{
			document.getElementById('stat5').style.backgroundColor='#fff';
			document.getElementById('status5').style.backgroundColor='#fff';
			document.getElementById('moment5').style.backgroundColor='#fff';
			document.getElementById('in_umovi5').style.backgroundColor='#fff';
		}

		if(document.getElementById('in_info').value=="2"){
			
				if(document.getElementById('time3').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 48 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				if(document.getElementById('time4').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 49 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				if(document.getElementById('time5').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 51 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				if(document.getElementById('time6').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 52 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				if(document.getElementById('time8').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 54 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
		}
		if(document.getElementById('in_info').value=="1"){
				if(document.getElementById('time3').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 48 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				if(document.getElementById('time4').value==""){
					document.getElementById('error_msg').innerHTML="Позиція 49 має бути заповнена";
					$('#myModal').modal();
					flag_valid=false;
				}
				
		}
		if(val69_1!=""){
			if(document.getElementById('kilk_lanok').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 69 має бути заповнена";
				document.getElementById('kilk_lanok').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_lanok').style.color='#fff';
			 	$('#myModal').modal();
			 	flag_valid=false;
			}else
			if(document.getElementById('kilk_hvl').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 70 має бути заповнена";
				document.getElementById('kilk_hvl').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_hvl').style.color='#fff';
			 	$('#myModal').modal();
			 	flag_valid=false;
			}
		}

		if(sum!="0"){
			if(zn_bud=="" && posh_bud=="" && zn_tehn=="" && posh_tehn=="" && zn_zerno=="" && zn_hl_kor=="" && zn_hl_valk=="" 
				&& zn_kor=="" && zn_torf=="" && posh_torf=="" && zn_tvar=="" && zn_pt=="" && zn_dop==""){
				document.getElementById('error_msg').innerHTML="В одній із позицій 27-35 має бути проставлено значення чи текстова інформація";
				document.getElementById('sum_main').style.backgroundColor='#8b0000';
			 	document.getElementById('sum_main').style.color='#fff';
			 	document.getElementById('sum_main').focus();
			 	$('#myModal').modal();
			 	flag_valid=false;
			}/*else{
			f.submit();
			}*/
		}
	
		if(item10=="11" || item10=="12" || item10=="13"){
			if(item73==""){
				document.getElementById('error_msg').innerHTML="Позиція 73 має бути заповнена";
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(item73!=""){
			if(item10=="20"){
				document.getElementById('error_msg').innerHTML="Позиція 10 має бути заповнена наступними кодами: 11 чи 12 чи 13";
				document.getElementById('umovi_dialn').style.backgroundColor='#8b0000';
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(document.getElementById('in_info').value=="1"){
			if(val60_1=="" || val62_1==""){
				document.getElementById('error_msg').innerHTML="Позиції 60-63 мають бути заповнені";
				$('#myModal').modal();
				flag_valid=false;
			}
		}
		if(document.getElementById('in_info').value=="2"){
			if(val60_1=="" || val62_1==""){
				document.getElementById('error_msg').innerHTML="Позиції 60-63 мають бути заповнені";
				$('#myModal').modal();
				flag_valid=false;
			}
		}

		if(val60_1!=""){
			if(document.getElementById('kilk_uchasnik').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 61 має бути заповнена";
				document.getElementById('kilk_uchasnik').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_uchasnik').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val60_2!=""){
			if(document.getElementById('kilk_uchasnik1').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 61 має бути заповнена";
				document.getElementById('kilk_uchasnik1').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_uchasnik1').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val60_3!=""){
			if(document.getElementById('kilk_uchasnik2').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 61 має бути заповнена";
				document.getElementById('kilk_uchasnik2').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_uchasnik2').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val60_4!=""){
			if(document.getElementById('kilk_uchasnik3').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 61 має бути заповнена";
				document.getElementById('kilk_uchasnik3').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_uchasnik3').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val60_5!=""){
			if(document.getElementById('kilk_uchasnik4').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 61 має бути заповнена";
				document.getElementById('kilk_uchasnik4').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_uchasnik4').style.color='#fff';
			 	flag_valid=false;
			}
		}

		if(val62_1!=""){
			if(document.getElementById('kilk_tehn').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 63 має бути заповнена";
				document.getElementById('kilk_tehn').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_tehn').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val62_2!=""){
			if(document.getElementById('kilk_tehn1').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 63 має бути заповнена";
				document.getElementById('kilk_tehn1').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_tehn1').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val62_3!=""){
			if(document.getElementById('kilk_tehn2').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 63 має бути заповнена";
				document.getElementById('kilk_tehn2').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_tehn2').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val62_4!=""){
			if(document.getElementById('kilk_tehn3').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 63 має бути заповнена";
				document.getElementById('kilk_tehn3').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_tehn3').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val62_5!=""){
			if(document.getElementById('kilk_tehn4').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 63 має бути заповнена";
				document.getElementById('kilk_tehn4').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_tehn4').style.color='#fff';
			 	flag_valid=false;
			}
		}

		if(val64_1!=""){
			if(document.getElementById('kilk_stvol').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 65 має бути заповнена";
				document.getElementById('kilk_stvol').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_stvol').style.color='#fff';
			 	flag_valid=false;
			}
			if(document.getElementById('rechovini').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 66 має бути заповнена";
				document.getElementById('rechovini').style.backgroundColor='#8b0000';
			 	document.getElementById('rechovini').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val64_2!=""){
			if(document.getElementById('kilk_stvol1').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 65 має бути заповнена";
				document.getElementById('kilk_stvol1').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_stvol1').style.color='#fff';
			 	flag_valid=false;
			}
			if(document.getElementById('rechovini1').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 66 має бути заповнена";
				document.getElementById('rechovini1').style.backgroundColor='#8b0000';
			 	document.getElementById('rechovini1').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(val64_3!=""){
			if(document.getElementById('kilk_stvol2').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 65 має бути заповнена";
				document.getElementById('kilk_stvol2').style.backgroundColor='#8b0000';
			 	document.getElementById('kilk_stvol2').style.color='#fff';
			 	flag_valid=false;
			}
			if(document.getElementById('rechovini2').value==""){
				document.getElementById('error_msg').innerHTML="Позиція 66 має бути заповнена";
				document.getElementById('rechovini2').style.backgroundColor='#8b0000';
			 	document.getElementById('rechovini2').style.color='#fff';
			 	flag_valid=false;
			}
		}
		if(flag_valid){
			//document.getElementById('btn_submit').disabled=true;
			f.submit();
			clearField(state);
			//document.getElementById('btn_submit').disabled=false;
		}
	}
	function valid60(val){
		var flag=false;
		var val60_1=document.getElementById('uchasnik').value;
		var val60_2=document.getElementById('uchasnik1').value;
		var val60_3=document.getElementById('uchasnik2').value;
		var val60_4=document.getElementById('uchasnik3').value;
		var val60_5=document.getElementById('uchasnik4').value;
		if(val60_1!=""){
			if(val60_1==val60_2){
				flag=true;
			}else
			if(val60_1==val60_3){
				flag=true;
			}else
			if(val60_1==val60_4){
				flag=true;
			}else
			if(val60_1==val60_5){
				flag=true;
			}
		}
		if(val60_2!=""){
			if(val60_2==val60_1){
				flag=true;
			}else
			if(val60_2==val60_3){
				flag=true;
			}else
			if(val60_2==val60_4){
				flag=true;
			}else
			if(val60_2==val60_5){
				flag=true;
			}
		}
		if(val60_3!=""){
			if(val60_3==val60_1){
				flag=true;
			}else
			if(val60_3==val60_2){
				flag=true;
			}else
			if(val60_3==val60_4){
				flag=true;
			}else
			if(val60_3==val60_5){
				flag=true;
			}
		}
		if(val60_4!=""){
			if(val60_4==val60_1){
				flag=true;
			}else
			if(val60_4==val60_2){
				flag=true;
			}else
			if(val60_4==val60_3){
				flag=true;
			}else
			if(val60_4==val60_5){
				flag=true;
			}
		}
		if(val60_5!=""){
			if(val60_5==val60_1){
				flag=true;
			}else
			if(val60_5==val60_2){
				flag=true;
			}else
			if(val60_5==val60_3){
				flag=true;
			}else
			if(val60_5==val60_4){
				flag=true;
			}
		}
		if(flag){
			document.getElementById('error_msg').innerHTML="Коди не мають повторюватись!";
			val.value="";
				$('#myModal').modal();
		}
	}
	function valid62(val){
		var flag=false;
		var val62_1=document.getElementById('fire_car').value;
		var val62_2=document.getElementById('fire_car1').value;
		var val62_3=document.getElementById('fire_car2').value;
		var val62_4=document.getElementById('fire_car3').value;
		var val62_5=document.getElementById('fire_car4').value;
		if(val62_1!=""){
			if(val62_1==val62_2){
				flag=true;
			}else
			if(val62_1==val62_3){
				flag=true;
			}else
			if(val62_1==val62_4){
				flag=true;
			}else
			if(val62_1==val62_5){
				flag=true;
			}
		}
		if(val62_2!=""){
			if(val62_2==val62_1){
				flag=true;
			}else
			if(val62_2==val62_3){
				flag=true;
			}else
			if(val62_2==val62_4){
				flag=true;
			}else
			if(val62_2==val62_5){
				flag=true;
			}
		}
		if(val62_3!=""){
			if(val62_3==val62_1){
				flag=true;
			}else
			if(val62_3==val62_2){
				flag=true;
			}else
			if(val62_3==val62_4){
				flag=true;
			}else
			if(val62_3==val62_5){
				flag=true;
			}
		}
		if(val62_4!=""){
			if(val62_4==val62_1){
				flag=true;
			}else
			if(val62_4==val62_2){
				flag=true;
			}else
			if(val62_4==val62_3){
				flag=true;
			}else
			if(val62_4==val62_5){
				flag=true;
			}
		}
		if(val62_5!=""){
			if(val62_5==val62_1){
				flag=true;
			}else
			if(val62_5==val62_2){
				flag=true;
			}else
			if(val62_5==val62_3){
				flag=true;
			}else
			if(val62_5==val62_4){
				flag=true;
			}
		}
		if(flag){
			document.getElementById('error_msg').innerHTML="Коди не мають повторюватись!";
			val.value="";
				$('#myModal').modal();
		}
	}
	function valid64(val){
		var flag=false;
		var val64_1=document.getElementById('fire_stvol').value;
		var val64_2=document.getElementById('fire_stvol1').value;
		var val64_3=document.getElementById('fire_stvol2').value;

		if(val64_1!=""){
			if(val64_1==val64_2){
				flag=true;
			}else
			if(val64_1==val64_3){
				flag=true;
			}
		}
		if(val64_2!=""){
			if(val64_2==val64_1){
				flag=true;
			}else
			if(val64_2==val64_3){
				flag=true;
			}
		}
		if(val64_3!=""){
			if(val64_3==val64_1){
				flag=true;
			}else
			if(val64_3==val64_2){
				flag=true;
			}
		}
	
		if(flag){
			document.getElementById('error_msg').innerHTML="Коди не мають повторюватись!";
			val.value="";
				$('#myModal').modal();
		}
	}
	function valid55(val){
		var flag=false;
		var val55_1=document.getElementById('umovi_vpliv').value;
		var val55_2=document.getElementById('umovi_vpliv1').value;
		var val55_3=document.getElementById('umovi_vpliv2').value;
		var val55_4=document.getElementById('umovi_vpliv3').value;
		var val55_5=document.getElementById('umovi_vpliv4').value;

		if(val55_1!=""){
			if(val55_1==val55_2){
				flag=true;
			}else
			if(val55_1==val55_3){
				flag=true;
			}else
			if(val55_1==val55_4){
				flag=true;
			}else
			if(val55_1==val55_5){
				flag=true;
			}
		}
		if(val55_2!=""){
			if(val55_2==val55_1){
				flag=true;
			}else
			if(val55_2==val55_3){
				flag=true;
			}else
			if(val55_2==val55_4){
				flag=true;
			}else
			if(val55_2==val55_5){
				flag=true;
			}
		}
		if(val55_3!=""){
			if(val55_3==val55_1){
				flag=true;
			}else
			if(val55_3==val55_2){
				flag=true;
			}else
			if(val55_3==val55_4){
				flag=true;
			}else
			if(val55_3==val55_5){
				flag=true;
			}
		}
		if(val55_4!=""){
			if(val55_4==val55_1){
				flag=true;
			}else
			if(val55_4==val55_2){
				flag=true;
			}else
			if(val55_4==val55_3){
				flag=true;
			}else
			if(val55_4==val55_5){
				flag=true;
			}
		}
		if(val55_5!=""){
			if(val55_5==val55_1){
				flag=true;
			}else
			if(val55_5==val55_2){
				flag=true;
			}else
			if(val55_5==val55_3){
				flag=true;
			}else
			if(val55_5==val55_4){
				flag=true;
			}
		}
		if(flag){
			document.getElementById('error_msg').innerHTML="Коди не мають повторюватись!";
			val.value="";
				$('#myModal').modal();
		}
	}
	function valid56(val){
		var flag=false;
		var val56_1=document.getElementById('umovi_gasinya').value;
		var val56_2=document.getElementById('umovi_gasinya1').value;
		var val56_3=document.getElementById('umovi_gasinya2').value;
		var val56_4=document.getElementById('umovi_gasinya3').value;
		var val56_5=document.getElementById('umovi_gasinya4').value;

		if(val56_1!=""){
			if(val56_1==val56_2){
				flag=true;
			}else
			if(val56_1==val56_3){
				flag=true;
			}else
			if(val56_1==val56_4){
				flag=true;
			}else
			if(val56_1==val56_5){
				flag=true;
			}
		}
		if(val56_2!=""){
			if(val56_2==val56_1){
				flag=true;
			}else
			if(val56_2==val56_3){
				flag=true;
			}else
			if(val56_2==val56_4){
				flag=true;
			}else
			if(val56_2==val56_5){
				flag=true;
			}
		}
		if(val56_3!=""){
			if(val56_3==val56_1){
				flag=true;
			}else
			if(val56_3==val56_2){
				flag=true;
			}else
			if(val56_3==val56_4){
				flag=true;
			}else
			if(val56_3==val56_5){
				flag=true;
			}
		}
		if(val56_4!=""){
			if(val56_4==val56_1){
				flag=true;
			}else
			if(val56_4==val56_2){
				flag=true;
			}else
			if(val56_4==val56_3){
				flag=true;
			}else
			if(val56_4==val56_5){
				flag=true;
			}
		}
		if(val56_5!=""){
			if(val56_5==val56_1){
				flag=true;
			}else
			if(val56_5==val56_2){
				flag=true;
			}else
			if(val56_5==val56_3){
				flag=true;
			}else
			if(val56_5==val56_4){
				flag=true;
			}
		}
		if(flag){
			document.getElementById('error_msg').innerHTML="Коди не мають повторюватись!";
			val.value="";
				$('#myModal').modal();
		}
	}
	function valid13(){
		var val7=parseInt(document.getElementById('fire_obj').value);
		if((val7>=1 && val7<210) || (val7>=1501 && val7<1520)){
			if(document.getElementById('category').value=="")
			document.getElementById('category').style.backgroundColor='#8b0000';
		}else{
			document.getElementById('category').style.backgroundColor='#fff';
		}
	}
	function clearField(state){
		if(state==0){
			document.getElementById('id_raion').value="";
		document.getElementById('id_type').value="";
		document.getElementById('id_kartka').value="";
		document.getElementById('id_dop').value="";
		document.getElementById('datetime1').value="";

		document.getElementById('code_raion').value="";
		document.getElementById('name_object').value="";
		document.getElementById('fire_obj').value="";
		document.getElementById('comment').value="";
		document.getElementById('forma_vlastnost').value="";
		document.getElementById('stupin').value="";
		document.getElementById('pidkontrol').value="";
		document.getElementById('poverhovist').value="";
		document.getElementById('poverh').value="";
		document.getElementById('stupin_vognest').value="";
		document.getElementById('category').value="";
		document.getElementById('misce').value="";
		document.getElementById('name_misce').value="";
		document.getElementById('vibir').value="";
		document.getElementById('vibir3').value="";
		document.getElementById('pricina').value="";
		document.getElementById('pricina2').value="";

		document.getElementById('viavleno').value="";
		document.getElementById('viavleno_ditei').value="";
		document.getElementById('zag').value="";
		document.getElementById('zag_ditei').value="";
		document.getElementById('zag_fireman').value="";
		document.getElementById('fio1').value="";
		document.getElementById('fio2').value="";
		document.getElementById('fio3').value="";
		document.getElementById('fio4').value="";
		document.getElementById('fio5').value="";
		document.getElementById('vik1').value="";
		document.getElementById('vik2').value="";
		document.getElementById('vik3').value="";
		document.getElementById('vik4').value="";
		document.getElementById('vik5').value="";
		document.getElementById('stat1').value="";
		document.getElementById('stat2').value="";
		document.getElementById('stat3').value="";
		document.getElementById('stat4').value="";
		document.getElementById('stat5').value="";
		document.getElementById('status1').value="";
		document.getElementById('status2').value="";
		document.getElementById('status3').value="";
		document.getElementById('status4').value="";
		document.getElementById('status5').value="";
		document.getElementById('moment1').value="";
		document.getElementById('moment2').value="";
		document.getElementById('moment3').value="";
		document.getElementById('moment4').value="";
		document.getElementById('moment5').value="";
		document.getElementById('in_umovi1').value="";
		document.getElementById('in_umovi2').value="";
		document.getElementById('in_umovi3').value="";
		document.getElementById('in_umovi4').value="";
		document.getElementById('in_umovi5').value="";
		document.getElementById('travm').value="";
		document.getElementById('travm_ditei').value="";
		document.getElementById('travm_fireman').value="";
		document.getElementById('sum_main').value="";
		document.getElementById('sum_dop').value="";
		document.getElementById('zn_bud').value="";
		document.getElementById('posh_bud').value="";
		document.getElementById('zn_tehn').value="";
		document.getElementById('posh_tehn').value="";
		document.getElementById('zn_zerno').value="";
		document.getElementById('zn_hl_kor').value="";
		document.getElementById('zn_hl_valk').value="";
		document.getElementById('zn_kor').value="";
		document.getElementById('zn_torf').value="";
		document.getElementById('posh_torf').value="";
		document.getElementById('zn_tvar').value="";
		document.getElementById('zn_pt').value="";
		document.getElementById('zn_dop').value="";

		document.getElementById('vr_l').value="";
		document.getElementById('vr_d').value="";
		document.getElementById('vr_tv').value="";
		document.getElementById('vr_p').value="";
		document.getElementById('vr_b').value="";
		document.getElementById('vr_t').value="";
		document.getElementById('vr_zerno').value="";
		document.getElementById('vr_hl_k').value="";
		document.getElementById('vr_hl_v').value="";
		document.getElementById('vr_k').value="";
		document.getElementById('vr_torf').value="";
		document.getElementById('vr_dop').value="";
		document.getElementById('vr_sum').value="";

		document.getElementById('time2').value="";
		document.getElementById('time3').value="";
		document.getElementById('time4').value="";
		document.getElementById('in_info').value="";
		document.getElementById('time5').value="";
		document.getElementById('time6').value="";
		document.getElementById('time7').value="";
		document.getElementById('time8').value="";
		document.getElementById('umovi_vpliv').value="";
		document.getElementById('umovi_vpliv1').value="";
		document.getElementById('umovi_vpliv2').value="";
		document.getElementById('umovi_vpliv3').value="";
		document.getElementById('umovi_vpliv4').value="";
		document.getElementById('umovi_gasinya').value="";
		document.getElementById('umovi_gasinya1').value="";
		document.getElementById('umovi_gasinya2').value="";
		document.getElementById('umovi_gasinya3').value="";
		document.getElementById('umovi_gasinya4').value="";
		document.getElementById('spz').value="";
		document.getElementById('system_spz').value="";
		document.getElementById('system_spz1').value="";
		document.getElementById('system_spz2').value="";
		document.getElementById('system_spz3').value="";
		document.getElementById('system_spz4').value="";
		document.getElementById('result_dii').value="";
		document.getElementById('result_dii1').value="";
		document.getElementById('result_dii2').value="";
		document.getElementById('result_dii3').value="";
		document.getElementById('result_dii4').value="";

		document.getElementById('uchasnik').value="";
		document.getElementById('uchasnik1').value="";
		document.getElementById('uchasnik2').value="";
		document.getElementById('uchasnik3').value="";
		document.getElementById('uchasnik4').value="";
		document.getElementById('kilk_uchasnik').value="";
		document.getElementById('kilk_uchasnik1').value="";
		document.getElementById('kilk_uchasnik2').value="";
		document.getElementById('kilk_uchasnik3').value="";
		document.getElementById('kilk_uchasnik4').value="";
		document.getElementById('fire_car').value="";
		document.getElementById('fire_car1').value="";
		document.getElementById('fire_car2').value="";
		document.getElementById('fire_car3').value="";
		document.getElementById('fire_car4').value="";
		document.getElementById('kilk_tehn').value="";
		document.getElementById('kilk_tehn1').value="";
		document.getElementById('kilk_tehn2').value="";
		document.getElementById('kilk_tehn3').value="";
		document.getElementById('kilk_tehn4').value="";
		document.getElementById('fire_stvol').value="";
		document.getElementById('fire_stvol1').value="";
		document.getElementById('fire_stvol2').value="";
		document.getElementById('kilk_stvol').value="";
		document.getElementById('kilk_stvol1').value="";
		document.getElementById('kilk_stvol2').value="";
		document.getElementById('rechovini').value="";
		document.getElementById('rechovini1').value="";
		document.getElementById('rechovini2').value="";
		document.getElementById('pervini').value="";
		document.getElementById('pervini1').value="";
		document.getElementById('pervini2').value="";
		document.getElementById('djerelo').value="";
		document.getElementById('djerelo1').value="";
		document.getElementById('djerelo2').value="";
		document.getElementById('vik_gdzs').value="";
		document.getElementById('kilk_lanok').value="";
		document.getElementById('kilk_hvl').value="";

		document.getElementById('time9').value="";
		document.getElementById('vid_perev').value="";
		document.getElementById('umovi_dialn').value="";
		document.getElementById('vjiti_zahodi').value="";
		document.getElementById('stati').value="";
		document.getElementById('dop_stati').value="";
		document.getElementById('time10').value="";
		document.getElementById('pib').value="";

		document.getElementById('hidden_block').style.display='none';
		}
	}
	function func_add(){
		var sel = document.getElementById("table_field");
		var val = sel.options[sel.selectedIndex].value;
		//if(val=='code_raion'){
			val=val+'[]';
		//}
		var html = sel.options[sel.selectedIndex].innerHTML;

		var input=document.createElement('input');
		var span=document.createElement('span');
		var div=document.getElementById('add_select');
		input.type = 'text';
		input.className='form-control';
		input.name = val;
		span.innerHTML=html;
		div.appendChild(span);
		div.appendChild(input);
		div.appendChild(document.createElement("br"));
	}



	
