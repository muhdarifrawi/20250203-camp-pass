document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    loadData();
})

function loadData() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let data = mockInfo();
    // let body = document.querySelector("#data-table");

    let platoon = ["hq", "1", "2", "3"]

    let permissions = params.permissions;
    let platoonParam = params.platoon;
    let container = document.querySelectorAll(".container")[0];

    console.log(permissions);

    if (permissions != "user-only"){
        container.innerHTML +=`
        <div class="row">
            <div class="col">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Lockout All Cards</label>
                </div>
            </div>
        </div>
        `
    }

    for (p of platoon) {
        if (permissions == "user-only" && p == platoonParam) {
            container.innerHTML += `<h2>Platoon ${p}</h2>`;
            container.innerHTML += `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Company</th>
                        <th scope="col">Designation</th>
                    </tr>
                </thead>
                <tbody id=${p}>
                </tbody>
            </table>`
        }
        else if (permissions == "full-control" || permissions == "company-control" || permissions == "platoon-control"){
            container.innerHTML += `<h2>Platoon ${p}</h2>`;
            container.innerHTML += `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Company</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id=${p}>
                </tbody>
            </table>`
        }

        for (i of data.personnel) {
            let table = document.getElementById(p)
            console.log(i)
            if (permissions == "full-control" || permissions == "company-control") {
                if (i.platoon == p) {
                    let row = `<tr>
                                    <th scope="row">#</th>
                                    <td>${i.firstName}</td>
                                    <td>${i.lastName}</td>
                                    <td>${i.unit}</td>
                                    <td>${i.company}</td>
                                    <td>${i.designation}</td>
                                    <td><button class="btn btn-primary">Edit</button></td>
                                    </tr>
                                    `
                    table.innerHTML += row;
                }
            }
            if (permissions == "platoon-control") {
                if (i.platoon == p && i.platoon == platoonParam) {
                    let row = `<tr>
                                    <th scope="row">#</th>
                                    <td>${i.firstName}</td>
                                    <td>${i.lastName}</td>
                                    <td>${i.unit}</td>
                                    <td>${i.company}</td>
                                    <td>${i.designation}</td>
                                    <td><button class="btn btn-primary">Edit</button></td>
                                    </tr>
                                    `
                    table.innerHTML += row;
                }
                else if (i.platoon == p) {
                    let row = `<tr>
                                    <th scope="row">#</th>
                                    <td>${i.firstName}</td>
                                    <td>${i.lastName}</td>
                                    <td>${i.unit}</td>
                                    <td>${i.company}</td>
                                    <td>${i.designation}</td>
                                    </tr>
                                    `
                    table.innerHTML += row;
                }
            }
            if (permissions == "user-only") {
                if (i.platoon == p && i.platoon == platoonParam) {
                    let row = `<tr>
                                    <th scope="row">#</th>
                                    <td>${i.firstName}</td>
                                    <td>${i.lastName}</td>
                                    <td>${i.unit}</td>
                                    <td>${i.company}</td>
                                    <td>${i.designation}</td>
                                    </tr>
                                    `
                    table.innerHTML += row;
                }
            }

        }
    }
}