function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2023, 00, 28);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //璁＄畻澶╂暟鍚庡墿浣欑殑姣鏁�
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //璁＄畻灏忔椂鏁板悗鍓╀綑鐨勬绉掓暟
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //璁＄畻鍒嗛挓鏁板悗鍓╀綑鐨勬绉掓暟
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "Dear Jaqi:<br>"
		+ "I like you and I will always like you:<br> "
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days +" </c>day " 
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours+" </c>hour "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes+" </c>min "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" +seconds+" </c>sec<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手,与子偕老.<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+	"<c style=\"color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" >----Haichao   2023-01-28</c>"; 
	document.getElementById("show").innerHTML=currentTimeString;  //鏀硅繖鍦版柟
	window.setTimeout("showTime()", 1000); 




}








