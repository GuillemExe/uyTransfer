// ACTIVIDAD

var http = require('http'),
    fs = require('fs');

// PRUEBAS


const express = require("express");
const path = require("path");

// FIN DE PRUEBAS

const server = http.createServer((req, res) => {

    let lecturaPathname = url.parse(req.url, true).pathname;
    // CREAMOS EL SERVER Y PROCEDEMOS A CREAR UNA VARIABLE CON EL NOMBRE
    // DE LA RUTA
    if (lecturaPathname.endsWith('/upload')) {
        let documento = req.files.file;

        documento.mv(`./files/${documento.name}`,err => {
            if(err) {
                return res.status(500).send({ message : err })
            } else {
                res.redirect('/');
            }
        });
    } else if (lecturaPathname.endsWith('/uploads')) {

    } else {
        fs.readFile('./public/home.html', function (err, html) {
            // COMPROBAMOS SI EXISTE EL ERROR ESCUCHANDO POR EL PUERTO (8080)
            // EN CASO DE ERROR LE DEVOLVEREMOS UN CODE HTTP 500 Y UN MENSAJE
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write("Se ha producido un error en el servidor, sentimos las molestias.");
                res.end();
            } 
            // EN CASO DE QUE NO SE PRODUZCA UN ERROR ENVIO EL COTENIDO HTML
            // DE LA HOME COMO PAGINA INICIAL Y UN CODE HTTP 200 DANDO EL VISTO
            // BUENO A ESTA PETICION
            else {  
                res.writeHeader(200, {"Content-Type": "text/html"});  
                res.write(html);  
                res.end();  
            }
        });
    }
});

server.listen(8080);

