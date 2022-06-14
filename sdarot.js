setTimeout(run, 35000);
function run() {
    var link=document.getElementById("videojs_html5_api").src;
    document.getElementsByClassName("btn btn-lg btn-gray download disabled")[0].className="btn btn-lg btn-gray download";
    document.getElementsByClassName("btn btn-lg btn-gray download")[0].href=link;
    document.getElementById("fakeDL").className="btn btn-lg btn-green download";
    if (document.getElementsByClassName("btn btn-lg btn-gray download")[0].href!=document.getElementById("videojs_html5_api").src){
        setTimeout(run, 15000);
        alert("not done")

    }
    else {
        alert("load done")
    }
}
