
var isRelease = false;

var api_url = "http://livebricks.incdoor.com/";
document.addEventListener("init", function(event) {
    if(isRelease == false) {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
            //api_url = "http://192.168.0.157/";    // mobile
        } else {
            api_url = "https://index-server/";   // PC
        }
    }
});

ons.bootstrap();

