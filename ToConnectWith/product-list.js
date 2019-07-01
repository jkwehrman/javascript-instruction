
$().ready(() => {

    $.getJSON("http://localhost:8080/product/")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(products) {
    console.log("product list, products: "+product);
    let tbody = $("#tbody");
    for(let product of products) {
        let row = `<tr>`;
        row += `<td>${product.id}</td>`;
        row += `<td>${product.partNumber}</td>`;
        row += `<td>${product.name}</td>`;
        row += `<td>${product.price}</td>`;
        row += `</tr>`;
        tbody.append(row);
    }
}

