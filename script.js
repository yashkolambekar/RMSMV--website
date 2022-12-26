function views(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/rmsmv/views");
    xhr.responseType = "json";
    xhr.send();
}

function viewpdf(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/rmsmv/pdf");
    xhr.responseType = "json";
    xhr.send();
    var win = window.open('https://drive.google.com/file/d/1ATsgWcpd7o9DOGFcDmPBGkFlrMW4sgcK/view?usp=sharing', '_blank');
    win.focus();
}

document.getElementsByClassName('readmorediv')[0].addEventListener("click", function(){
    document.getElementsByClassName('readmorediv')[0].parentElement.style.height = "auto";
    document.getElementsByClassName('readmorediv')[0].style.display = "none";
});

document.getElementsByClassName('readmorediv')[1].addEventListener("click", function(){
    document.getElementsByClassName('readmorediv')[1].parentElement.style.height = "auto";
    document.getElementsByClassName('readmorediv')[1].style.display = "none";
});