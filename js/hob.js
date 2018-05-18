$(document).ready(function(){
	$("#spn1").hide();
	$("#spn3").hide();
	$("#spn5").hide();
	$("#exaa2").hide();
	$("#show").hide();
	$("#shows").hide();
	$("#tog1").hide();
	$("#tog2").hide();
	$("#delta").show();
	$('.hid1').hide();
	$('.hid2').hide();
	$("#delt").mouseover(function(){
	 	$("#show").show();
	 	$("#shows").show();
	 	$("#delta").hide();
	 });
	$("#delt").mouseout(function(){
        $("#show").hide();
	 	$("#shows").hide();
	 	$("#delta").show();
	 });
	$("#show1").hide();
	$("#shows1").hide();
	$("#delta1").show();
	$("#delt1").mouseover(function(){
	 	$("#show1").show();
	 	$("#shows1").show();
	 	$("#delta1").hide();
	 });
	$("#delt1").mouseout(function(){
        $("#show1").hide();
	 	$("#shows1").hide();
	 	$("#delta1").show();
	 });
	$("#show2").hide();
	$("#shows2").hide();
	$("#delta2").show();
	$("#delt2").mouseover(function(){
	 	$("#show2").show();
	 	$("#shows2").show();
	 	$("#delta2").hide();
	 });
	$("#delt2").mouseout(function(){
        $("#show2").hide();
	 	$("#shows2").hide();
	 	$("#delta2").show();
	 });
	$("#show3").hide();
	$("#shows3").hide();
	$("#delta3").show();
	$("#delt3").mouseover(function(){
	 	$("#show3").show();
	 	$("#shows3").show();
	 	$("#delta3").hide();
	 });
	$("#delt3").mouseout(function(){
        $("#show3").hide();
	 	$("#shows3").hide();
	 	$("#delta3").show();
	 });

	var qwarity = "" ; 
	$('#btn2').click(function(){
 		  $("#btn2").addClass("important")
		$("#spn1").show();
		$("#spn").hide();
		$("#exaa2").show();
			var qwarity = $('.tbl')
			$(this).css('background-color','aqua');
		setTimeout(function(){
	          $(this).addClass("aqua")
			$('.tbl1').append(qwarity);
			$("#tabss").hide();
		}, 500)
	});

	$("#ant").click(function(){
		$("#tog").show();
		$('.hid').show();
		$("#tog1").hide();
		$("#tog2").hide();
		$('.hid1').hide();
		 $('.hid2').hide();
	});
	$('#ant1').click(function(){
		$('#tog1').show();
		$('.hid1').show();
		$('#tog').hide();
		$('#tog2').hide();
		$('.hid').hide();
		$('.hid2').hide();
	});
	$("#ant2").click(function(){
		$("#tog2").show();
		$('.hid2').show();
		$("#tog").hide();
		$("#tog1").hide();
		$('.hid').hide();
		$('.hid1').hide();
	});
		$(".calendar").jqxCalendar({theme: "arctic", width:250, height:250});
});

	//    $("#btn2").click(function(){
 //          $(this).css('background-color','aqua');
 //          $(this).addclass("aqua")
 // 		  $("#btn2").addClass("important")
	// });
 // $("btn2").click(function(){
 //        $("#btn2").addClass("aqua");
 //        $("div").addClass("important");
 //    });
// <script type="text/javascript">
// 	$(document).ready(function() {
//    		$("input[type='submit']").click(function(){
//       	$(this).css('background-color','red');
//     });
// });
// </script>