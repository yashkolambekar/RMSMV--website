function color(){
    var img = document.getElementsByTagName('img');
    for (let i = 0; i< img.length; i++){
        var top = img[i].getBoundingClientRect();
        console.log(top.top);
        if(top.top > 100 && top.top < 500){
            console.log(i);
            img[i].style.webkitFilter = "grayscale(0)";
        }
        if(top.top < 100 || top.top > 500){
            console.log(i);
            img[i].style.webkitFilter = "grayscale(1)";
        }
    }
    console.log(" ")
}