'use strict';

let gnb_m_openstate = 0;
function gnb_m_open() {
    if (gnb_m_openstate == 0) {
        document.getElementById("gnb_m_menu").style =
            "padding:20px 20px; height:400px;"
        gnb_m_openstate = 1;
    }
    else {
        document.getElementById("gnb_m_menu").style =
            "padding:0px 20px; height:0px;"
        gnb_m_openstate = 0;
    }
}
function gnb_shop_mouseover() {
    document.getElementById("gnb_shop").style = 
    "height:70px;"
}
function gnb_shop_mouseout() {
    document.getElementById("gnb_shop").style =
    "height:0;"
}

function categoryView(categoryName) {
let article = document.querySelectorAll('article');
let articleH2 = document.querySelectorAll('article h2');
for (let i=0; i < article.length; i++) {
   if ( articleH2[i].textContent.indexOf(categoryName) == -1 ) 
         { article[i].style= "left:-100%; width:0; height:0; opacity:0; transition: all 1.7s" }
    else {
      article[i].style = "left:0; opacity:1; transition: all 1.7s;"
   }
}
}