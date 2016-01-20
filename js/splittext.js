$(function(){
    var setElm = $('.split'),
    delaySpeed = 300,
    fadeSpeed = 100;
 
    setText = setElm.html();
 
    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    $(window).load(function(){
        splitLength = $('.textSplitLoad').length;
        setElm.find('.textSplitLoad').each(function(i){
            splitThis = $(this);
            splitTxt = splitThis.text();
            splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
        });
        setTimeout(function(){
                setElm.html(setText);
        },splitLength*delaySpeed+fadeSpeed);
    });
});

function setSize() {
    //画像サイズ指定
    var imgW = 2000;
    var imgH = 1332;
    //ウィンドウサイズ取得
    var winW = $(window).width();
    var winH = $(window).height();
    var scaleW = winW / imgW;
    var scaleH = winH / imgH;
    var fixScale = Math.max(scaleW, scaleH);
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
    var moveX = Math.floor((winW - setW) / 2);
    var moveY = Math.floor((winH - setH) / 2);
 
    $('#section0').css({
        'width': setW,
        'height': setH,
        'left' : moveX,
        'top' : moveY
    });
}
