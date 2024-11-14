
<!-- <script type="text/javascript" src="/../js/texteditor.js"></script> -->
<!-- <script type="text/javascript" src="/../js/showpageform.js"></script> -->
  <script type="text/javascript" src="/<?=Router::FOLDER;?>js/select.js"></script>
 <script type="text/javascript" src="/<?=Router::FOLDER;?>js/moment-with-locales.min.js"></script>
 <script type="text/javascript" src="/<?=Router::FOLDER;?>js/bootstrap-datetimepicker.min.js"></script>
 <script type="text/javascript">
 	var date=new Date();
 	date.setDate(date.getDate()+1)
    $(function () {
      $('#datetimepicker1').datetimepicker({
	    locale: 'uk',
  		stepping:10,
  		format: 'DD.MM.YYYY',
  		maxDate: moment().add('d', 1).toDate(),
  		defaultDate: ''
		
	  });
	    $('#datetimepicker2').datetimepicker({
            locale: 'uk',
      			stepping:10,
      			format: 'DD.MM.YYYY',
      			maxDate: moment().add('d', 1).toDate(),
            defaultDate: ''
			
        });
        $('#datetimepicker3').datetimepicker({

            format: 'HH:mm'
        });
         $('#datetimepicker4').datetimepicker({

            format: 'HH:mm'
        });
         $('#datetimepicker5').datetimepicker({
            locale: 'uk',
      			stepping:10,
      			format: 'DD.MM.YYYY',
      			maxDate: moment().add('d', 1).toDate(),
            defaultDate: ''
        });
          $('#datetimepicker6').datetimepicker({

            format: 'HH:mm'
        });
           $('#datetimepicker7').datetimepicker({
            locale: 'uk',
      			stepping:10,
      			format: 'DD.MM.YYYY',
      			maxDate: moment().add('d', 1).toDate(),
            defaultDate: ''
        });
           $('#datetimepicker8').datetimepicker({

            format: 'HH:mm'
        });
           $('#datetimepicker9').datetimepicker({
            	locale: 'uk',
        			stepping:10,
        			format: 'DD.MM.YYYY',
        			maxDate: moment().add('d', 1).toDate(),
              defaultDate: ''
        });
           $('#datetimepicker10').datetimepicker({
            	locale: 'uk',
        			stepping:10,
        			format: 'DD.MM.YYYY',
        			defaultDate: Date.now()
        });
            $('#datetimeopt1').datetimepicker({
              locale: 'uk',
              stepping:10,
              format: 'DD.MM.YYYY',
             // defaultDate: '01.01.'+date.getFullYear()
        });
             $('#datetimeopt2').datetimepicker({
              locale: 'uk',
              stepping:10,
              format: 'DD.MM.YYYY',
             // defaultDate: Date.now()
        });
     
    });
    
  </script>
  <script type="text/javascript">
  	 $(function () { 
    $("[data-toggle='tooltip']").tooltip(); 
  });
  </script>
  <script type="text/javascript">
$("#tabs").on("click", ".menuactive", function(){

    $(".menuactive").removeClass("active"); //удаляем класс во всех вкладках

    $(this).addClass("active"); //добавляем класс текущей (нажатой)

});

$("#code_raion").focus(function () {
  var options=$('#code_name option');
  $('#code_name').append(options);
  var valtxt=$("#id_raion").val();
      $('#code_name option').each(function(){
        if(this.id!=valtxt)
          $(this).remove();
        });
});

 $("#allcheck").change(function () {
  var state=$("#allcheck").prop('checked');
    if(state){
       $('.checkval').prop('checked', true);
    }else{
      $('.checkval').removeAttr('checked');
    }
 });

  $("#checkoptall").change(function () {
  var state2=$("#checkoptall").prop('checked');
    if(state2){
       $('.checkval2').prop('checked', true);
    }else{
      $('.checkval2').removeAttr('checked');
    }
 });

  $("#checknpall").change(function () {
  var state2=$("#checknpall").prop('checked');
    if(state2){
       $('.checkval3').prop('checked', true);
    }else{
      $('.checkval3').removeAttr('checked');
    }
 });

  $("#selnumber").change(function () {
    var state2=$("#selnumber option:selected").val();
    $("#numraion").val(state2);
 });

  $("#selnumber2").change(function () {
    var state2=$("#selnumber2 option:selected").val();
    $("#numraion2").val(state2);
 });
  </script>
 <div ID = "toTop" ><img src="http://<?=$_SERVER['SERVER_NAME']?>/<?=Router::FOLDER;?>img/up.png"> </div>
</body>
</html>