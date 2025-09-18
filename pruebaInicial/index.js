function add_product() {
    
    var product_name = document.getElementById("add_product");
    var cant = document.getElementById("cantidad");
    
    if (cant < 1) {
        alert("Error. La cantidad debe ser como mínimo de 1 unidad");
    } else {
        create_product(product_name.value, cant.value);
    }
}

function create_product(producto, cantidad) {
    var newDiv = document.createElement("div"); // Creamos el div padre
    
    var title = document.createTextNode("Producto: " + producto);
    if (cantidad > 1) {
        var cant = document.createTextNode("Cantidad: " + cantidad + " unidades");
    } else {
        var cant = document.createTextNode("Cantidad: 1 unidad");
    }
    title.id = "titulo";
    cant.id = "cantidad";
    
    newDiv.appendChild(title);
    newDiv.appendChild(cant);
    
    var btn_buy = document.createElement("button");
    var text_btn_buy = document.createTextNode("Comprado");
    btn_buy.appendChild(text_btn_buy);
    
    var btn_dlt = document.createElement("button");
    var text_btn_dlt = document.createTextNode("Eliminar");
    btn_dlt.appendChild(text_btn_dlt);
    
    newDiv.appendChild(btn_buy);
    newDiv.appendChild(btn_dlt);
    
    
    // ASIGNACIÓN DE IDs
    newDiv.id = producto;
    btn_buy.id = "btn_buy";
    btn_dlt.id = "btn_dlt";
    text_btn_buy = "btn_text";
    text_btn_dlt = "btn_text";

    // ESTILOS
    document.getElementById("btn_buy").style.backgroundColor = rgb(255, 51, 51); // No funciona

    var lista = document.getElementById("lista");
    document.body.insertBefore(newDiv, lista);
}