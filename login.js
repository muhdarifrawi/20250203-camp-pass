document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    loadLogin();
})

function loadLogin() {
    let loginBtn = document.querySelector("#login-btn");
    let adminLoginBtn = document.querySelector("#admin-login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => { handleLogin(event) });
    }
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener("click", () => { handleAdminLogin(event) });
    }
}

function handleLogin(event) {
    console.log("LOGIN")
    event.preventDefault();
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "";
    let username = document.querySelector("#usernameInput").value;
    let password = document.querySelector("#passwordInput").value;
    console.log(username, password);

    let data = mockInfo();

    let personnelData = data.personnel;
    let users = personnelData.map((p) => {
        return p.username
    });
    let passwords = personnelData.map((p) => {
        return p.password
    });

    console.log(users);
    console.log(passwords);

    if (!username || users.indexOf(username) == -1) {
        return handleLoginError()
    }
    if (!password || passwords.indexOf(password) == -1) {
        return handleLoginError()
    }

    return window.location.href = "camppass.html";
}

function handleAdminLogin(event) {
    console.log("LOGIN")
    event.preventDefault();
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "";
    let usernameInput = document.querySelector("#usernameInput").value;
    let passwordInput = document.querySelector("#passwordInput").value;
    console.log(usernameInput, passwordInput);

    let data = mockInfo();

    let personnelData = data.personnel;
    let users = personnelData.map((p) => {
        return p.username
    });
    let passwords = personnelData.map((p) => {
        return p.password
    });

    console.log(users);
    console.log(passwords);

    if (!usernameInput || users.indexOf(usernameInput) == -1) {
        return handleLoginError()
    }
    if (!passwordInput || passwords.indexOf(passwordInput) == -1) {
        return handleLoginError()
    }

    let selectedData = personnelData.filter((p) => {
        if (p.username == usernameInput && p.password == passwordInput) {
            return p
        }
        return handleLoginError()

    })

    let currentData = selectedData[0];
    let { firstName, lastName, username, password, unit,
        company, platoon, designation, permissions
    } = currentData;
    // console.log(firstName, lastName, username, password, unit,
    //     company, platoon, designation, permissions);
    // console.log(currentData);
    // console.log(firstName);

    return window.location.href = `adminportal.html?username=${username}&designation=${designation}&permissions=${permissions}&platoon=${platoon}`
}

function handleLoginError() {
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "Username or Password is incorrect."
}