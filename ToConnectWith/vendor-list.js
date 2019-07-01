
$().ready(() => {

    $.getJSON("http://localhost:8080/vendor/")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(vendors) {
    console.log("vendor list, vendors: "+vendors);
    let tbody = $("#tbody");
    for(let vendor of vendors) {
        let row = `<tr>`;
        row += `<td>${vendor.id}</td>`;
        row += `<td>${vendor.code}</td>`;
        row += `<td>${vendor.name}</td>`;
        row += `<td>${vendor.address}, ${vendor.city}, ${vendor.state} ${vendor.zip}</td>`;
        row += `<td>${vendor.preApproved ? "Yes" : "No"}</td>`;
        row += `</tr>`;
        tbody.append(row);
    }
}