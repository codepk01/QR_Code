let qrImg = document.querySelector("#qrImg");
let btn = document.getElementById("gen_qr");
let inputData = document.querySelector("input");
btn.addEventListener("click",genrateQR);
function genrateQR(){
    if(inputData.value==''){
        alert("Enter url");
    }
    else{
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputData.value;
    document.querySelector("#imgBox").classList.add("show-img");
    }

}