function password1() {
    var type = document.getElementById("passwd1").type;
    const passwd = document.getElementById("passwd1");

    if (type === "password") {
        passwd.setAttribute("type", "text");
    } else {
        passwd.setAttribute("type", "password")
    }

    var rutaImg = document.getElementById("eye1").src;

    if (rutaImg === "http://localhost:5173/public/eye-fill.svg") {
        document.getElementById("eye1").src = "http://localhost:5173/public/eye-slash-fill.svg"
    } else {
        document.getElementById("eye1").src = "http://localhost:5173/public/eye-fill.svg";
    }
}

function password2() {
    var type = document.getElementById("passwd2").type;
    const passwd = document.getElementById("passwd2");

    if (type === "password") {
        passwd.setAttribute("type", "text");
    } else {
        passwd.setAttribute("type", "password")
    }

    var rutaImg = document.getElementById("eye2").src;

    if (rutaImg === "http://localhost:5173/public/eye-fill.svg") {
        document.getElementById("eye2").src = "http://localhost:5173/public/eye-slash-fill.svg"
    } else {
        document.getElementById("eye2").src = "http://localhost:5173/public/eye-fill.svg";
    }
}