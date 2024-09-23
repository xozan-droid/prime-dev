let mysql = require("mysql");

let coneccion = mysql.createConnection({
    host: "bxxkdjad2peib3ahhnsb-mysql.services.clever-cloud.com",
    database: "bxxkdjad2peib3ahhnsb",
    user: "ulvpx5je9nm5qrol",
    password: "WNp61riGJEcv9LzLkF96",
})

coneccion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conección establecida de manera exitosa");

        // Realizar una consulta
        coneccion.query("SELECT * FROM generos", function(err, results, fields) {
            if (err){
                console.error("Error en la consulta: ", err);
                return;
            }
            console.log("resultados: ", results);

        })
        // cerrar la coneccion
        coneccion.end();
    }
})