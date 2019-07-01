
$().ready(() => {

    $.getJSON("http://localhost:8080/user/")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(users) {
    let tbody = $("#tbody");
    for(let user of users) {
        let row = `<tr>`;
        row += `<td>${user.id}</td>`;
        row += `<td>${user.userName}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstName}</td>`;
        row += `<td>${user.lastName}</td>`;
        row += `<td>${user.phoneNumber}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.reviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.admin ? "Yes" : "No"}</td>`;

        row += `</tr>`;
        tbody.append(row);
    }
}