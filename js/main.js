// for modal
let modal = document.getElementById("modali");
let btn_sheet = document.getElementById("close-modal");
let btn_here = document.getElementById("close-modal-btn-here");
btn_sheet.addEventListener("click", function () {
    modal.classList.add("deactive");
});
btn_here.addEventListener("click", function () {
    modal.classList.add("deactive");
});
///////////////////////////////////////////////////////////////////
// for filters in nav
let php_nav_bar = document.getElementById("photo-filter");
php_nav_bar.addEventListener("mouseenter", function () {
    php_nav_bar.setAttribute("src", "images/abroo.svg");
});
php_nav_bar.addEventListener("mouseleave", function () {
    php_nav_bar.setAttribute("src", "images/abroofill.svg");
});
//////////////
let php_nav_bar1 = document.getElementById("photo-filter1");
php_nav_bar1.addEventListener("mouseenter", function () {
    php_nav_bar1.setAttribute("src", "images/ProArt_hover.svg");
});
php_nav_bar1.addEventListener("mouseleave", function () {
    php_nav_bar1.setAttribute("src", "images/ProArt_normal.svg");
});
//////////////
let php_nav_bar2 = document.getElementById("photo-filter2");
php_nav_bar2.addEventListener("mouseenter", function () {
    php_nav_bar2.setAttribute("src", "images/IoT_hover.svg")
});
php_nav_bar2.addEventListener("mouseleave", function () {
    php_nav_bar2.setAttribute("src", "images/IoT_normal.svg");
});
///////////////
let search_sm = document.getElementsByClassName("search_nav")[0];
let h_search = document.getElementsByClassName("click_search")[0];
let c_h = document.getElementsByClassName("close_search")[0];
let list_sm = document.getElementsByClassName("btn_list_nav")[0];
let back_search = document.getElementsByClassName("just_back_color")[0];
let input_search = document.querySelectorAll("input")[0];
let input_search_xxl = document.querySelectorAll("input")[1];
let nigga = document.getElementsByClassName("asli_words_search")[0];
let search_in_input = document.getElementsByClassName("search_when_input_value_log")[0];
let exite_in_input = document.getElementsByClassName("zarbdar_input_vlue_log")[0];

search_sm.addEventListener("click", function () {
    h_search.classList.toggle("for_search");
    back_search.classList.toggle("h");
});
c_h.addEventListener("click", function () {
    h_search.classList.remove("for_search");
    back_search.classList.remove("h");
});
list_sm.addEventListener("click", function () {
    h_search.classList.remove("for_search");
    back_search.classList.remove("h");
});
input_search.addEventListener("click", function () {
    input_search.classList.toggle("border_input_serach");
});
input_search_xxl.addEventListener("click", function () {
    input_search_xxl.classList.toggle("border_input_serach");
});
document.addEventListener("click", function (e) {
    if (e.target == back_search) {
        input_search.classList.remove("border_input_serach");
    }
});
document.addEventListener("click", function (e) {
    if (e.target == search_he_xxl) {
        input_search_xxl.classList.remove("border_input_serach");
    }
});
input_search.addEventListener("input", function () {
    if (input_search.value !== '') {
        search_in_input.classList.remove("deactive");
        exite_in_input.classList.remove("deactive");
        input_search.classList.add("fifi");
    } else {
        search_in_input.classList.add("deactive");
        exite_in_input.classList.add("deactive");
        input_search.classList.remove("fifi");
    }
});
exite_in_input.addEventListener("click", function () {
    if (input_search.value !== '') {
        input_search.value = '';
        search_in_input.classList.add("deactive");
        exite_in_input.classList.add("deactive");
        input_search.classList.remove("fifi");
    }
});
////////////////////////////////////////////////////////
let search_lg = document.getElementsByClassName("search_nav_two")[0];
search_lg.addEventListener("mouseenter", function () {
    search_lg.setAttribute("class", "porang");
});
search_lg.addEventListener("mouseleave", function () {
    search_lg.setAttribute("class", "search_nav_two");
});
let Adamak = document.getElementsByClassName("search_nav_thir")[0];
Adamak.addEventListener("mouseenter", function () {
    Adamak.setAttribute("class", "porang_1");
});
Adamak.addEventListener("mouseleave", function () {
    Adamak.setAttribute("class", "search_nav_thir");
});
let Asus_logo_blue = document.getElementsByClassName("xxl_img_asus_nav")[0];
Asus_logo_blue.addEventListener("mouseenter", function () {
    Asus_logo_blue.setAttribute("class", "porang_blue");
});
Asus_logo_blue.addEventListener("mouseleave", function () {
    Asus_logo_blue.setAttribute("class", "xxl_img_asus_nav");
});
//////////////////////////////////////////////
let header = document.getElementById("adam1");
let header2 = document.getElementById("adam2");
let Area_menu = document.getElementById("menu_area");

let closeTimeout;
header.addEventListener("click", function () {
    clearTimeout(closeTimeout);
    header2.classList.toggle("he_adamak");
});
header2.addEventListener("mouseenter", function () {
    clearTimeout(closeTimeout);
});
header2.addEventListener("mouseleave", function () {
    closeTimeout = setTimeout(() => {
        header2.classList.remove("he_adamak");
    }, 150);
});
header.addEventListener("mouseleave", function () {
    closeTimeout = setTimeout(() => {
        header2.classList.remove("he_adamak");
    }, 250);
});
document.addEventListener("click", (e) => {
    if (!Area_menu.contains(e.target)) {
        header2.classList.remove("he_adamak");
    }
});
/////////////////////////////////////////////
let search_xxl = document.getElementById("big-search");
let search_he_xxl = document.getElementById("he-big");
let nav_for_close = document.querySelectorAll(".kalame");
let nav_for_close1 = document.querySelectorAll(".kalame2");
let hover_suport = document.getElementsByClassName("suport_nav")[0];
let body = document.querySelector("body");
search_xxl.addEventListener("click", function () {
    search_he_xxl.classList.toggle("active_search_big");
});
nav_for_close[0].addEventListener("click", function () {
    search_he_xxl.classList.remove("active_search_big");
});
nav_for_close1[0].addEventListener("click", function () {
    search_he_xxl.classList.remove("active_search_big");
});
hover_suport.addEventListener("mouseenter", function () {
    setTimeout(() => {
        search_he_xxl.classList.remove("active_search_big");
    }, 200);
});
header.addEventListener("click", function () {
    setTimeout(() => {
        search_he_xxl.classList.remove("active_search_big");
    }, 200);
});
// /////////////////////////////////////////////////////////
let text_js_nav = document.querySelectorAll(".maycraft");
let js_zir_nav_mobile = document.querySelectorAll(".zir-js-navi-mobile");
let exma = document.querySelectorAll(".bi-x-lg");
let elment = document.querySelectorAll(".phones");
let elment_hover = document.querySelectorAll(".phones-hover");
let nav_two = document.querySelectorAll(".jibzan");


text_js_nav[0].addEventListener("mouseenter", function () {
    js_zir_nav_mobile[0].classList.toggle("hight-jd-zir-nav");
});
text_js_nav[0].addEventListener("click", function () {
    js_zir_nav_mobile[0].classList.toggle("hight-jd-zir-nav");
});
js_zir_nav_mobile[0].addEventListener("mouseleave", function () {
    setTimeout(() => {
        js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
    }, 300)
});
exma[2].addEventListener("click", function () {
    js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
});
elment[0].addEventListener("mouseenter", function () {
    elment_hover[0].classList.remove("none-submeno");
    elment_hover[1].classList.remove("none-submeno");
    elment_hover[0].classList.add("flex-submeno");
    elment_hover[1].classList.add("flex-submeno");
    elment_hover[2].classList.remove("flex-submeno");
    elment_hover[3].classList.remove("flex-submeno");
    elment_hover[4].classList.remove("flex-submeno");
    elment_hover[5].classList.remove("flex-submeno");
    elment_hover[6].classList.remove("flex-submeno");
});
elment[1].addEventListener("mouseenter", function () {
    elment_hover[0].classList.add("none-submeno");
    elment_hover[1].classList.add("none-submeno");
    elment_hover[2].classList.add("flex-submeno");
    elment_hover[3].classList.add("flex-submeno");
    elment_hover[4].classList.remove("flex-submeno");
    elment_hover[5].classList.remove("flex-submeno");
    elment_hover[6].classList.remove("flex-submeno");
});
elment[2].addEventListener("mouseenter", function () {
    elment_hover[0].classList.add("none-submeno");
    elment_hover[1].classList.add("none-submeno");
    elment_hover[0].classList.remove("flex-submeno");
    elment_hover[1].classList.remove("flex-submeno");
    elment_hover[2].classList.remove("flex-submeno");
    elment_hover[3].classList.remove("flex-submeno");
    elment_hover[4].classList.add("flex-submeno");
    elment_hover[5].classList.remove("flex-submeno");
    elment_hover[6].classList.remove("flex-submeno");
});

elment[3].addEventListener("mouseenter", function () {
    elment_hover[0].classList.add("none-submeno");
    elment_hover[1].classList.add("none-submeno");
    elment_hover[0].classList.remove("flex-submeno");
    elment_hover[1].classList.remove("flex-submeno");
    elment_hover[2].classList.remove("flex-submeno");
    elment_hover[3].classList.remove("flex-submeno");
    elment_hover[4].classList.remove("flex-submeno");
    elment_hover[5].classList.add("flex-submeno");
    elment_hover[6].classList.add("flex-submeno");
});
let js_zir_nav_laptop = document.querySelectorAll(".zir-js-navi-laptop");
let elment2 = document.querySelectorAll(".laptops");
let elment_hover2 = document.querySelectorAll(".laptop-hover");


text_js_nav[1].addEventListener("mouseenter", function () {
    js_zir_nav_laptop[0].classList.add("hight-jd-zir-nav");
    js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_display[0].classList.remove("hight-jd-zir-nav");
})
text_js_nav[1].addEventListener("click", function () {
    js_zir_nav_laptop[0].classList.toggle("hight-jd-zir-nav");
    js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_display[0].classList.remove("hight-jd-zir-nav");
})
js_zir_nav_laptop[0].addEventListener("mouseleave", function () {
    js_zir_nav_laptop[0].classList.remove("hight-jd-zir-nav");
})
exma[3].addEventListener("click", function () {
    js_zir_nav_laptop[0].classList.remove("hight-jd-zir-nav");
});
elment2[0].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.remove("none-submeno");
    elment_hover2[1].classList.remove("none-submeno");
    elment_hover2[2].classList.remove("none-submeno");
    elment_hover2[0].classList.add("flex-submeno");
    elment_hover2[1].classList.add("flex-submeno");
    elment_hover2[2].classList.add("flex-submeno");
    elment_hover2[2].classList.remove("flex-submeno");
    elment_hover2[3].classList.remove("flex-submeno");
    elment_hover2[4].classList.remove("flex-submeno");
    elment_hover2[5].classList.remove("flex-submeno");
    elment_hover2[6].classList.remove("flex-submeno");
    elment_hover2[7].classList.remove("flex-submeno");
    elment_hover2[8].classList.remove("flex-submeno");
    elment_hover2[9].classList.remove("flex-submeno");
    elment_hover2[10].classList.remove("flex-submeno");
    elment_hover2[11].classList.remove("flex-submeno");
    elment_hover2[12].classList.remove("flex-submeno");
    elment_hover2[13].classList.remove("flex-submeno");
    elment_hover2[14].classList.remove("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[1].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.remove("none-submeno");
    elment_hover2[4].classList.remove("none-submeno");
    elment_hover2[3].classList.add("flex-submeno");
    elment_hover2[4].classList.add("flex-submeno");
    elment_hover2[5].classList.remove("flex-submeno");
    elment_hover2[6].classList.remove("flex-submeno");
    elment_hover2[7].classList.remove("flex-submeno");
    elment_hover2[8].classList.remove("flex-submeno");
    elment_hover2[9].classList.remove("flex-submeno");
    elment_hover2[10].classList.remove("flex-submeno");
    elment_hover2[11].classList.remove("flex-submeno");
    elment_hover2[12].classList.remove("flex-submeno");
    elment_hover2[13].classList.remove("flex-submeno");
    elment_hover2[14].classList.remove("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[2].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.remove("none-submeno");
    elment_hover2[6].classList.remove("none-submeno");
    elment_hover2[7].classList.remove("none-submeno");
    elment_hover2[5].classList.add("flex-submeno");
    elment_hover2[6].classList.add("flex-submeno");
    elment_hover2[7].classList.add("flex-submeno");
    elment_hover2[8].classList.remove("flex-submeno");
    elment_hover2[9].classList.remove("flex-submeno");
    elment_hover2[10].classList.remove("flex-submeno");
    elment_hover2[11].classList.remove("flex-submeno");
    elment_hover2[12].classList.remove("flex-submeno");
    elment_hover2[13].classList.remove("flex-submeno");
    elment_hover2[14].classList.remove("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[3].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.remove("none-submeno");
    elment_hover2[9].classList.remove("none-submeno");
    elment_hover2[10].classList.remove("none-submeno");
    elment_hover2[8].classList.add("flex-submeno");
    elment_hover2[9].classList.add("flex-submeno");
    elment_hover2[10].classList.add("flex-submeno");
    elment_hover2[11].classList.remove("flex-submeno");
    elment_hover2[12].classList.remove("flex-submeno");
    elment_hover2[13].classList.remove("flex-submeno");
    elment_hover2[14].classList.remove("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[4].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.remove("none-submeno");
    elment_hover2[12].classList.remove("none-submeno");
    elment_hover2[13].classList.remove("none-submeno");
    elment_hover2[11].classList.add("flex-submeno");
    elment_hover2[12].classList.add("flex-submeno");
    elment_hover2[13].classList.add("flex-submeno");
    elment_hover2[14].classList.remove("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[5].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.add("none-submeno");
    elment_hover2[12].classList.add("none-submeno");
    elment_hover2[13].classList.add("none-submeno");
    elment_hover2[14].classList.remove("none-submeno");
    elment_hover2[14].classList.add("flex-submeno");
    elment_hover2[15].classList.remove("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[6].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.add("none-submeno");
    elment_hover2[12].classList.add("none-submeno");
    elment_hover2[13].classList.add("none-submeno");
    elment_hover2[14].classList.add("none-submeno");
    elment_hover2[15].classList.remove("none-submeno");
    elment_hover2[15].classList.add("flex-submeno");
    elment_hover2[16].classList.remove("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[7].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.add("none-submeno");
    elment_hover2[12].classList.add("none-submeno");
    elment_hover2[13].classList.add("none-submeno");
    elment_hover2[14].classList.add("none-submeno");
    elment_hover2[15].classList.add("none-submeno");
    elment_hover2[16].classList.remove("none-submeno");
    elment_hover2[16].classList.add("flex-submeno");
    elment_hover2[17].classList.remove("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[8].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.add("none-submeno");
    elment_hover2[12].classList.add("none-submeno");
    elment_hover2[13].classList.add("none-submeno");
    elment_hover2[14].classList.add("none-submeno");
    elment_hover2[15].classList.add("none-submeno");
    elment_hover2[16].classList.add("none-submeno");
    elment_hover2[17].classList.remove("none-submeno");
    elment_hover2[17].classList.add("flex-submeno");
    elment_hover2[18].classList.remove("flex-submeno");
});
elment2[9].addEventListener("mouseenter", function () {
    elment_hover2[0].classList.add("none-submeno");
    elment_hover2[1].classList.add("none-submeno");
    elment_hover2[2].classList.add("none-submeno");
    elment_hover2[3].classList.add("none-submeno");
    elment_hover2[4].classList.add("none-submeno");
    elment_hover2[5].classList.add("none-submeno");
    elment_hover2[6].classList.add("none-submeno");
    elment_hover2[7].classList.add("none-submeno");
    elment_hover2[8].classList.add("none-submeno");
    elment_hover2[9].classList.add("none-submeno");
    elment_hover2[10].classList.add("none-submeno");
    elment_hover2[11].classList.add("none-submeno");
    elment_hover2[12].classList.add("none-submeno");
    elment_hover2[13].classList.add("none-submeno");
    elment_hover2[14].classList.add("none-submeno");
    elment_hover2[15].classList.add("none-submeno");
    elment_hover2[16].classList.add("none-submeno");
    elment_hover2[17].classList.add("none-submeno");
    elment_hover2[18].classList.remove("none-submeno");
    elment_hover2[18].classList.add("flex-submeno");
})



let js_zir_nav_display = document.querySelectorAll(".zir-js-navi-Display");
let elment3 = document.querySelectorAll(".dis-js-3");
let elment_hover3 = document.querySelectorAll(".dis-hover");
console.log(elment3);


text_js_nav[2].addEventListener("mouseenter", function () {
    js_zir_nav_laptop[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_display[0].classList.add("hight-jd-zir-nav");
})
text_js_nav[2].addEventListener("click", function () {
    js_zir_nav_laptop[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_mobile[0].classList.remove("hight-jd-zir-nav");
    js_zir_nav_display[0].classList.toggle("hight-jd-zir-nav");
})
js_zir_nav_display[0].addEventListener("mouseleave", function () {
    js_zir_nav_display[0].classList.remove("hight-jd-zir-nav");
})
exma[4].addEventListener("click", function () {
    js_zir_nav_display[0].classList.remove("hight-jd-zir-nav");
});
elment3[0].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.remove("none-submeno");
    elment_hover3[0].classList.add("flex-submeno");
     elment_hover3[1].classList.remove("flex-submeno");
     elment_hover3[2].classList.remove("flex-submeno");
     elment_hover3[3].classList.remove("flex-submeno");
     elment_hover3[4].classList.remove("flex-submeno");
     elment_hover3[5].classList.remove("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[1].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.remove("none-submeno");
     elment_hover3[1].classList.add("flex-submeno");
     elment_hover3[2].classList.remove("flex-submeno");
     elment_hover3[3].classList.remove("flex-submeno");
     elment_hover3[4].classList.remove("flex-submeno");
     elment_hover3[5].classList.remove("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[2].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.remove("none-submeno");
     elment_hover3[2].classList.add("flex-submeno");
     elment_hover3[3].classList.remove("flex-submeno");
     elment_hover3[4].classList.remove("flex-submeno");
     elment_hover3[5].classList.remove("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[3].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.remove("none-submeno");
     elment_hover3[3].classList.add("flex-submeno");
     elment_hover3[4].classList.remove("flex-submeno");
     elment_hover3[5].classList.remove("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[4].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.remove("none-submeno");
     elment_hover3[4].classList.add("flex-submeno");
     elment_hover3[5].classList.remove("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[5].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.remove("none-submeno");
     elment_hover3[5].classList.add("flex-submeno");
     elment_hover3[6].classList.remove("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[6].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.remove("none-submeno");
     elment_hover3[6].classList.add("flex-submeno");
     elment_hover3[7].classList.remove("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[7].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.add("none-submeno");
    elment_hover3[7].classList.remove("none-submeno");
     elment_hover3[7].classList.add("flex-submeno");
     elment_hover3[8].classList.remove("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[8].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.add("none-submeno");
    elment_hover3[7].classList.add("none-submeno");
    elment_hover3[8].classList.remove("none-submeno");
     elment_hover3[8].classList.add("flex-submeno");
     elment_hover3[9].classList.remove("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[9].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.add("none-submeno");
    elment_hover3[7].classList.add("none-submeno");
    elment_hover3[8].classList.add("none-submeno");
    elment_hover3[9].classList.remove("none-submeno");
     elment_hover3[9].classList.add("flex-submeno");
     elment_hover3[10].classList.remove("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[10].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.add("none-submeno");
    elment_hover3[7].classList.add("none-submeno");
    elment_hover3[8].classList.add("none-submeno");
    elment_hover3[9].classList.add("none-submeno");
    elment_hover3[10].classList.remove("none-submeno");
     elment_hover3[10].classList.add("flex-submeno");
     elment_hover3[11].classList.remove("flex-submeno");
});
elment3[11].addEventListener("mouseenter", function () {
    elment_hover3[0].classList.add("none-submeno");
    elment_hover3[1].classList.add("none-submeno");
    elment_hover3[2].classList.add("none-submeno");
    elment_hover3[3].classList.add("none-submeno");
    elment_hover3[4].classList.add("none-submeno");
    elment_hover3[5].classList.add("none-submeno");
    elment_hover3[6].classList.add("none-submeno");
    elment_hover3[7].classList.add("none-submeno");
    elment_hover3[8].classList.add("none-submeno");
    elment_hover3[9].classList.add("none-submeno");
    elment_hover3[10].classList.add("none-submeno");
    elment_hover3[11].classList.remove("none-submeno");
     elment_hover3[11].classList.add("flex-submeno");
});
