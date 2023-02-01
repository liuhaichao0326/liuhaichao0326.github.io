function move(){
        //鑾峰彇绉诲姩鐨凞IV瀵硅薄
        var obj = document.getElementById("container");
        
        
        obj.style.position = "absolute";
        obj.style.opacity = 0;
        //鍔ㄧ敾璁℃暟鍣ㄣ€�
        var num = 0;
        //鑾峰緱绉诲姩div锛屽湪鏁翠釜娲诲姩鍖哄煙鐨刋鍧愭爣
        var left = 630;
        //鑾峰緱绉诲姩div锛屽湪鏁翠釜娲诲姩鍖哄煙鐨刌鍧愭爣
        var top = 220;
       
        var timer  =  setInterval(function(){ //绉诲姩鐨勫嚱鏁�
          if(num==105){ //
            clearInterval(timer); 
          }
          //閫氳繃left鏍峰紡灞炴€ц缃€傚繀椤诲甫鍗曚綅
          obj.style.left = left + "px";
          //閫氳繃top鏍峰紡灞炴€ц缃紝蹇呴』甯﹀崟浣�
          obj.style.top = top - num * 2 + "px";
          //璁℃暟鍣ㄥ姞涓€
          obj.style.opacity =   num  / 140.0;
          num++;
        },190);
}
;