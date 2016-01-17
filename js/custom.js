/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

 /*====================================
          SUBSCRIPTION   SCRIPTS 
    ======================================*/


   $("#postcontent").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: $("#postcontent").serialize(),
             success: function (response) {
			  $('[name="email"]').val('');
               // alert(response); // FOR ACTUAL RESPONSE
			   alert('Thanks for  subscribing Us');
            }
        });
        e.preventDefault();
    });
 
   /*====================================
           COUNTDOWN CUSTOM SCRIPTS 
   ======================================*/

    setInterval(function () {

        var enddate = new Date("Jan 24 2016 06:30:00 GMT+09:00"); // change your date here like Jan 10 2016 GMT+05:00

        var today = new Date();

        var difference = Math.floor((enddate.getTime() - today.getTime()) / 1000);

        var seconds = GlobalFunctn(difference % 60);

        difference = Math.floor(difference / 60);

        var minutes = GlobalFunctn(difference % 60);

        difference = Math.floor(difference / 60);

        var hours = GlobalFunctn(difference % 24);

        difference = Math.floor(difference / 24);

        var days = difference;

        $("#second-number").text(seconds);

        $("#minute-number").text(minutes);

        $("#hour-number").text(hours);

        $("#day-number").text(days);

    }, 1000);

    function GlobalFunctn(valuesmy) {

        if (valuesmy < 0)

            valuesmy = 0;

        if (valuesmy < 10)

            return "0" + valuesmy;

        return "" + valuesmy;

    }
});


$(function() {
setInterval(function() {$("#section0").css("linear-gradient(-45deg, rgba(153, 149, 150, 0.8), rgba(153, 149, 150, 0.4),url(../img/blueskyA.jpg)");
}, 2000);
});
