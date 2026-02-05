document.getElementById('button').addEventListener("click", onNotes)
document.getElementById('body').addEventListener("click", onClick)
document.getElementById('light').addEventListener("click", onBright)
document.getElementById('dark').addEventListener("click", onDark)
var score = 0;
function onNotes()
{
    if (document.getElementById("input").value == "" ||document.getElementById("input").value == " ")
    {
        document.getElementById("spany").innerHTML += "";
    } else {
        document.getElementById("spany").innerHTML += `<b>-</b>${document.getElementById("input").value}  `;
    }
}

function onClick()
{
    score++;
    document.getElementById("clicker").innerHTML = `${score}`
    if(score == 100)
    {
        alert("maybe you should relax on the clicking");
    }
    
}

function onDark()
{
    document.getElementById("body").style.backgroundColor = "rgb(128,128,128)";
    document.getElementById("html").style.backgroundColor = "rgb(46, 42, 42)";
    document.getElementById("spany").style.backgroundColor = "rgb(70, 65, 65)";
    document.getElementById("button").style.backgroundColor = "rgb(46, 42, 42)";
    document.getElementById("dark").innerHTML = "<b>Dark<b>"
    document.getElementById("light").innerHTML = "Light"
}

function onBright()
{
    document.getElementById("body").style.backgroundColor = "";
    document.getElementById("html").style.backgroundColor = "";
    document.getElementById("spany").style.backgroundColor = "";
    document.getElementById("button").style.backgroundColor = "";
    document.getElementById("dark").innerHTML = "Dark"
    document.getElementById("light").innerHTML = "<b>Light<b>"
}
