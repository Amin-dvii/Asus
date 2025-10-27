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
let nigga = document.getElementsByClassName("asli_words_search")[0];
let search_in_input = document.getElementsByClassName("search_when_input_value_log")[0];
let exite_in_input = document.getElementsByClassName("zarbdar_input_vlue_log")[0];

search_sm.addEventListener("click", function () {
    h_search.classList.toggle("for_search");
    back_search.classList.toggle("h");
});
c_h.addEventListener("click", function () {
    h_search.classList.remove("for_search");
});
list_sm.addEventListener("click", function () {
    h_search.classList.remove("for_search");
});
input_search.addEventListener("click", function () {
    input_search.classList.toggle("border_input_serach");
});
document.addEventListener("click", function (e) {
    if (e.target == back_search) {
        input_search.classList.remove("border_input_serach");
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
})