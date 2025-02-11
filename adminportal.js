document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    loadData();
})

function loadData(){
    let data = mockInfo();
    let body = document.querySelector("#data-table");
    for(i of data.personnel){
        console.log(i)
        let row = `<tr>
                    <th scope="row">#</th>
                    <td>${i.firstName}</td>
                    <td>${i.lastName}</td>
                    <td>${i.unit}</td>
                    <td>${i.company}</td>
                    <td>${i.designation}</td>
                    </tr>
                    `
        body.innerHTML += row;
    }

}