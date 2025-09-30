let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "prueba",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if (err) {
        console.error("Error en la consulta: " + err);
        return;
    } else {
        console.log("Conexión establecida");
    }
});

exict("usuario", "usuario");

function viewAllData() {
    
}

function exict(name, passwd) {
    const query = "SELECT * FROM USUARIO";

    let id = -1;

    conexion.query(query, function(err, data){
        if(err){
            console.error("Error en la consulta: " + err);
            return;
        }else{
            data.forEach(data => {
                if(data.name === name && data.passwd === passwd) {
                    user = data.idUsuario;
                }
            });
        }
    })

    return id;
}

// Funciona correctamente
function addUser(name, passwd) {
    const query = "INSERT INTO USUARIO (NAME,PASSWD) VALUES ('" + name + "','" + passwd + "')";

    conexion.query(query, function(err, rows){
        if(err){
            console.error("Error en la consulta: " + err);
            return;
        }else{
            console.log("Dato insertado");
        }
    })
}

conexion.end();