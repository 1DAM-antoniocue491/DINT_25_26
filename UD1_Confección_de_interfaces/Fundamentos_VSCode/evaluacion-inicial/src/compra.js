// input para añadir producto -> id: input_product
// input para añadir la cantidad -> id: input_number
// botón para añadir el producto -> id: add_product
// botón para eliminar toda la lista -> id: delete_list

function add_product() {
    let name = document.getElementById("input_product").value;
    let cant = document.getElementById("input_number").value;

    let parentDiv = document.createElement('div');

    let productoDiv = document.createElement("div");
    productoDiv.textContent = "Producto: " + name;
    parentDiv.appendChild(productoDiv);

    let cantidadDiv = document.createElement("div");
    cantidadDiv.textContent = "Cantidad: " + cant;
    parentDiv.appendChild(cantidadDiv);

    let div_buttons = document.createElement('div');

    let buy = document.createElement('button');
    buy.textContent = "Comprado";
    buy.classList.add("buy");
    div_buttons.appendChild(buy);

    let del = document.createElement('button');
    del.textContent = "Eliminar";
    del.classList.add("delete");
    div_buttons.appendChild(del);

    parentDiv.appendChild(div_buttons);

    parentDiv.style.display = 'flex';
    parentDiv.style.flexDirection = 'column';
    parentDiv.style.gap = '5px';
    parentDiv.style.padding = "10px";
    parentDiv.style.backgroundColor = 'white';
    parentDiv.style.borderRadius = '10px';

    div_buttons.style.display = 'flex';
    div_buttons.style.justifyContent = 'flex-end';
    div_buttons.style.gap = '5px';

    buy.style.padding = '5px';
    buy.style.paddingLeft = '10px';
    buy.style.paddingRight = '10px';
    buy.style.borderRadius = '10px';
    buy.style.backgroundColor = 'green';
    buy.style.color = 'white';

    del.style.padding = '5px';
    del.style.paddingLeft = '10px';
    del.style.paddingRight = '10px';
    del.style.borderRadius = '10px';
    del.style.backgroundColor = 'red';
    del.style.color = 'white';


    document.getElementById("container").appendChild(parentDiv);

}