 var x, y;		//榧犳爣褰撳墠鍦ㄩ〉闈笂鐨勪綅缃�
var step = 10;	//瀛楃鏄剧ず闂磋窛锛屼负浜嗗ソ鐪嬶紝step=0鍒欏瓧绗︽樉绀烘病鏈夐棿璺�
var message = "Thanks for watching!";		//璺熼殢榧犳爣瑕佹樉绀虹殑瀛楃涓�
message = message.split("");	//灏嗗瓧绗︿覆鍒嗗壊涓哄瓧绗︽暟缁�

var xpos = new Array()		//瀛樺偍姣忎釜瀛楃鐨剎浣嶇疆鐨勬暟缁�
for (i = 0; i < message.length; i++) {
    xpos[i] = -50;
}
var ypos = new Array()		//瀛樺偍姣忎釜瀛楃鐨剏浣嶇疆鐨勬暟缁�
for (i = 0; i < message.length; i++) {
    ypos[i] = -50;
}

for (i = 0; i < message.length; i++) {  //鍔ㄦ€佺敓鎴愭樉绀烘瘡涓瓧绗pan鏍囪,
    //浣跨敤span鏉ユ爣璁板瓧绗︼紝鏄负浜嗘柟渚夸娇鐢–SS锛屽苟鍙互鑷敱鐨勭粷瀵瑰畾浣�
    document.write("<span id='span" + i + "' class='spanstyle'>");
    document.write(message[i]);
    document.write("</span>");
}

if (document.layers) {
    document.captureEvents(Event.MOUSEMOVE);
}

function handlerMM(e) { //浠庝簨浠跺緱鍒伴紶鏍囧厜鏍囧湪椤甸潰涓婄殑浣嶇疆
    e = e || window.event;
    x = (document.layers) ? e.pageX : document.body.scrollLeft + e.clientX - 220;
    y = (document.layers) ? e.pageY : document.body.scrollTop + e.clientY - 35;
}

function makesnake() {  //閲嶅畾浣嶆瘡涓瓧绗︾殑浣嶇疆
    if (document.all) { //濡傛灉鏄疘E
        for (i = message.length - 1; i >= 1; i--) {
            xpos[i] = xpos[i - 1] + step;  //浠庡熬鍚戝ご纭畾瀛楃鐨勪綅缃紝姣忎釜瀛楃涓哄墠涓€涓瓧绗︹€滃巻鍙测€濇按骞冲潗鏍�+step闂撮殧锛�
            //杩欐牱闅忕潃鍏夋爣绉诲姩浜嬩欢锛屽氨鑳藉緱鍒颁竴涓姩鎬佺殑娉㈡氮鐘剁殑鏄剧ず鏁堟灉
            ypos[i] = ypos[i - 1];  //鍨傜洿鍧愭爣涓哄墠涓€瀛楃鐨勫巻鍙测€滃瀭鐩粹€濆潗鏍囷紝鍚庝竴涓瓧绗﹁窡韪墠涓€涓瓧绗﹁繍鍔�
        }
        xpos[0] = x + step //绗竴涓瓧绗︾殑鍧愭爣浣嶇疆绱ц窡榧犳爣鍏夋爣
        ypos[0] = y
        //涓婇潰鐨勭畻娉曞皢淇濊瘉锛屽鏋滈紶鏍囧厜鏍囩Щ鍔ㄥ埌鏂颁綅缃紝鍒欒繛缁皟鐢╩akenake灏嗕細浣胯繖浜涘瓧绗︿竴涓帴涓€涓殑绉诲姩鐨勬柊浣嶇疆
        // 璇ョ畻娉曟樉绀哄瓧绗︿覆灏辨湁鐐硅薄浜虹被鐨勬父琛岄槦浼嶄竴鏍凤紝 

        for (i = 0; i <= message.length - 1; i++) {
            var thisspan = eval("span" + (i) + ".style");  //濡欑敤eval鏍规嵁瀛楃涓插緱鍒拌瀛楃涓茶〃绀虹殑瀵硅薄
            thisspan.posLeft = xpos[i];
            thisspan.posTop = ypos[i];
        }
    }
    else {
        for (i = message.length - 1; i >= 1; i--) {
            xpos[i] = xpos[i - 1] + step;
            ypos[i] = ypos[i - 1];
        }
        xpos[0] = x + step;
        ypos[0] = y;
        for (i = 0; i <= message.length - 1; i++) {
            var thisspan = document.getElementById("span" + i).style;
            thisspan.left = xpos[i];
            thisspan.top = ypos[i];
        }
    }
    var timer = setTimeout("makesnake()", 10)  //璁剧疆10姣鐨勫畾鏃跺櫒鏉ヨ繛缁皟鐢╩akesnake(),鏃跺埢鍒锋柊鏄剧ず瀛楃涓茬殑浣嶇疆銆�
}
document.onmousemove = handlerMM;; 