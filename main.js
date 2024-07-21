let allLis =document.querySelectorAll(".page-2-ul li");

allLis.forEach( function(li) {
li.onclick = function(){
    allLis.forEach((li)=> {li.classList.remove("li-active")})
    this.classList.add("li-active")
}
})

let allLis2 =document.querySelectorAll(".page-4-ul li")
allLis2.forEach(function (ele) {
    ele.onclick = function () {
        allLis2.forEach((ele)=> {ele.classList.remove("page-4-active")})
        this.classList.add("page-4-active")
    }
})

let allBtnPay =document.querySelectorAll(".pay-btns ul li button");
allBtnPay.forEach(function (ele) {
    ele.onclick=function () {
    allBtnPay.forEach((ele) => { ele.classList.remove("btn-active") })
    this.classList.add("btn-active")
}
})