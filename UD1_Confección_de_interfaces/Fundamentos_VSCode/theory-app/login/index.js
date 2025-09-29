function password() {
    var type = document.getElementById("passwd").type;
    const passwd = document.getElementById("passwd");

    if (type === "password") {
        passwd.setAttribute("type", "text");
    } else {
        passwd.setAttribute("type", "password")
    }

    var rutaImg = document.getElementById("eye").src;

    if (rutaImg === "http://localhost:5173/public/eye-fill.svg") {
        document.getElementById("eye").src = "http://localhost:5173/public/eye-slash-fill.svg"
    } else {
        document.getElementById("eye").src = "http://localhost:5173/public/eye-fill.svg";
    }
}