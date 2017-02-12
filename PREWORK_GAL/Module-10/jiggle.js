 document.getElementById("button1").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";
		
		 });

 document.getElementById("button2").addEventListener("click", function(){

            document.getElementById("box").style.background=  "blue";
         });

 document.getElementById("button3").addEventListener("click", function(){

            document.getElementById("box").style.filter = "opacity(50%)";
         });

 document.getElementById("button4").addEventListener("click", function(){

            document.getElementById("box").style.filter = "blur(50%)";
         });
       

document.getElementById("button5").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.background=  "orange";
            document.getElementById("box").style.filter = "blur(100%)";
            document.getElementById("box").style.filter = "opacity(100%)";


        });