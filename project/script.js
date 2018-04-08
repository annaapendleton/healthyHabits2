// sessionStorage("food",true)
// sessionStorage("sleep",true)
// var food= true;
// var name;
// var age;
// var gender;
// var sleep;
function clock() {
    document.getElementById("clock").setAttribute("visible", "false");
    document.getElementById("Sleep-question").setAttribute("visible", "true")
    document.getElementById("speech").setAttribute("visible", "false");
    document.getElementById("sky").setAttribute("color", "#15A3DB")
}
function profile() {
sessionStorage.setItem("name", document.getElementById("name").getAttribute("value"));
sessionStorage.setItem("age",document.getElementById("age").getAttribute("value"));
sessionStorage.setItem("gender", document.getElementById("gender").getAttribute("value"));
}

function run() {
    console.log(sessionStorage.getItem("food"))
    console.log("GO")
    // document.getElementById("soccer").innerHTML = '<a-animation attribute="rotation" begin="0" dur="9000" easing="linear" from="0 0 0" to="180 0 0" repeat="indefinite"></a-animation>';
    if (sessionStorage.getItem('food') == "true") {
        console.log("you are fast")
        document.getElementById("soccer").innerHTML = '<a-animation attribute="position" begin="0" dur="4000" easing="linear" from="0 -2 2" to="0 -2 -20" ></a-animation>';
        document.getElementById("camera").innerHTML = '<a-animation attribute="position" begin="0" dur="5000" easing="linear" from="0 -1 2" to="0 -1 -20" ></a-animation>';
        document.getElementById("panda2").setAttribute("visible", "true");
        document.getElementById("panda1").setAttribute("visible", "false");
        document.getElementById("camera").setAttribute("position", "0 -1 -20");
        document.getElementById("camera").innerHTML = "<a-cursor></a-cursor>"
    }
    if (sessionStorage.getItem("food") == "false") {
        console.log("you are slow")
        document.getElementById("soccer").innerHTML = '<a-animation attribute="position" begin="0" dur="9000" easing="linear" from="0 -2 2" to="0 -2 -19" ></a-animation>';
        document.getElementById("camera").innerHTML = '<a-animation attribute="position" begin="0" dur="10000" easing="linear" from="0 -1 2" to="0 -1 -20" ></a-animation>';
        document.getElementById("panda2").setAttribute("visible", "true");
        document.getElementById("panda1").setAttribute("visible", "false");
        document.getElementById("pandaText").setAttribute("value", "You can fuel your \n body with healthy foods\n to help you run faster and\n score next time. \nClick me to go\n back to your house.")
        document.getElementById("camera").innerHTML = "<a-cursor></a-cursor>"
    }
}

// function sleepBad() {
//     sessionStorage.setItem("sleep", false);

// }

// function sleepGood() {
//     sessionStorage.setItem("sleep", true);
// }

// function healthyBreakfast() {
//   sessionStorage.setItem("food", true);
// }

// function unhealthyBreakfast() {
//     sessionStorage.setItem("sleep", false);
// }

function lunchClock() {
    document.getElementById("clock").setAttribute("visible", "true")
}

function classroom() {
    if (sessionStorage.getItem("sleep") == "true") {
        console.log("TRUE")
        document.getElementById("classSpeak").setAttribute("value","Great job in class!\n You got enough sleep\n so you were able to \n pay attention in school!")
        document.getElementById("scene").setAttribute("light", "defaultLightsEnabled: true")
        document.getElementById("light").setAttribute("light", "type: ambient; color: #CCC")
    }
    if (sessionStorage.getItem("sleep") == "false") {
        console.log("FALSE")
        document.getElementById("classSpeak").setAttribute("value","You fell asleep and missed \nyour math class! You could\n have prevented this\n by going to bed earlier.")
        document.getElementById("scene").setAttribute("light", "defaultLightsEnabled: false")
        document.getElementById("light").setAttribute("light", "type: ambient; color: #5F5B66")
        document.getElementById("chalk").setAttribute("color", "#808080")
    }
    setTimeout(lunchClock, 5000)

}
