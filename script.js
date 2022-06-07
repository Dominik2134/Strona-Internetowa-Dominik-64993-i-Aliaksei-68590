function oneMenu(){
     var element = document.getElementById('menuone'),
            style = window.getComputedStyle(element),
            display = style.getPropertyValue('display');
    
    if(display === "none"){
                document.getElementById("menuone").style.display = "block";
                document.getElementById("menutwo").style.display = "none";
                document.getElementById("menuthree").style.display = "none";
                document.getElementById("menufour").style.display = "none";
            }
}


function twoMenu(){
     var element = document.getElementById('menutwo'),
            style = window.getComputedStyle(element),
            display = style.getPropertyValue('display');
    
    if(display === "none"){
                document.getElementById("menuone").style.display = "none";
                document.getElementById("menutwo").style.display = "block";
                document.getElementById("menuthree").style.display = "none";
                document.getElementById("menufour").style.display = "none";
            }
}

function threeMenu(){
     var element = document.getElementById('menuthree'),
            style = window.getComputedStyle(element),
            display = style.getPropertyValue('display');
    
    if(display === "none"){
                document.getElementById("menuone").style.display = "none";
                document.getElementById("menutwo").style.display = "none";
                document.getElementById("menuthree").style.display = "block";
                document.getElementById("menufour").style.display = "none";
            }
}

function fourMenu(){
     var element = document.getElementById('menufour'),
            style = window.getComputedStyle(element),
            display = style.getPropertyValue('display');
    
    if(display === "none"){
                document.getElementById("menuone").style.display = "none";
                document.getElementById("menutwo").style.display = "none";
                document.getElementById("menuthree").style.display = "none";
                document.getElementById("menufour").style.display = "block";
            }
}