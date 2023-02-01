;console.log('杩欐槸婕旂ず浠ｇ爜,涓嶆槸婧愪唬鐮併€傛簮鐮佷笅杞藉敮涓€鍦板潃: http://www.bootstrapmb.com/item/5619(姝よ鏄庡彧鍦ㄦ紨绀洪〉闈㈡湁,涓嶅湪涓嬭浇鐨勬簮鐮侀噷) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('boot')<0){location.href='http://www.bootstrapmb.com/item/5619'}};var charIndex = -1;
var stringLength = 0;
var inputText;
function writeContent(init){
	if(init){
		inputText = document.getElementById('contentToWrite').innerHTML;
	}
	if(charIndex==-1){
		charIndex = 0;
		stringLength = inputText.length;
	}
	var initString = document.getElementById('myContent').innerHTML;
	initString = initString.replace(/<SPAN.*$/gi,"");

	var theChar = inputText.charAt(charIndex);
	var nextFourChars = inputText.substr(charIndex,4);
	if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
		theChar  = '<BR>';
		charIndex+=3;
	}
	initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
	document.getElementById('myContent').innerHTML = initString;

	charIndex = charIndex/1 +1;
	if(charIndex%2==1){
		document.getElementById('blink').style.display='none';
	}else{
		document.getElementById('blink').style.display='inline';
	}

	if(charIndex<=stringLength){
		setTimeout('writeContent(false)',140);
	}else{
		blinkSpan();
	}  
}

var currentStyle = 'inline';
function blinkSpan(){
	if(currentStyle=='inline'){
		currentStyle='none';
	}else{
		currentStyle='inline';
	}
	document.getElementById('blink').style.display = currentStyle;
	setTimeout('blinkSpan()',100);
}
;console.log('杩欐槸婕旂ず浠ｇ爜,涓嶆槸婧愪唬鐮併€傛簮鐮佷笅杞藉敮涓€鍦板潃: http://www.bootstrapmb.com/item/5619(姝よ鏄庡彧鍦ㄦ紨绀洪〉闈㈡湁,涓嶅湪涓嬭浇鐨勬簮鐮侀噷) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('boot')<0){location.href='http://www.bootstrapmb.com/item/5619'}};