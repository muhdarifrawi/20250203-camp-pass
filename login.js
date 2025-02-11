document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    loadLogin();
})

function loadLogin(){
    let loginBtn = document.querySelector("#login-btn");
    let adminLoginBtn = document.querySelector("#admin-login-btn");

    if(loginBtn){
        loginBtn.addEventListener("click", () => {handleLogin(event)});
    }
    if(adminLoginBtn){
        adminLoginBtn.addEventListener("click", () => {handleAdminLogin(event)});
    }
}

function handleLogin(event){
    console.log("LOGIN")
    event.preventDefault();
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "";
    let username = document.querySelector("#usernameInput").value;
    let password = document.querySelector("#passwordInput").value;
    console.log(username,password);

    let data = mockInfo();
    
    let personnelData = data.personnel;
    let users = personnelData.map((p)=> {
        return p.username
    });
    let passwords = personnelData.map((p)=> {
        return p.password
    });

    console.log(users);
    console.log(passwords);

    if (!username || users.indexOf( username ) == -1){
        return handleLoginError()
    }
    if (!password || passwords.indexOf( password ) == -1){
        return handleLoginError()
    }

    return window.location.href = "camppass.html";
}

function handleAdminLogin(event){
    console.log("LOGIN")
    event.preventDefault();
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "";
    let username = document.querySelector("#usernameInput").value;
    let password = document.querySelector("#passwordInput").value;
    console.log(username,password);

    let data = mockInfo();
    
    let personnelData = data.personnel;
    let users = personnelData.map((p)=> {
        return p.username
    });
    let passwords = personnelData.map((p)=> {
        return p.password
    });

    console.log(users);
    console.log(passwords);

    if (!username || users.indexOf( username ) == -1){
        return handleLoginError()
    }
    if (!password || passwords.indexOf( password ) == -1){
        return handleLoginError()
    }

    let selectedData = personnelData.map((p)=>{
        if(p.username == username && p.password == password && p.designation == "oc"){
            return p
        }
        else {
            return handleLoginError()
        }
    })

    console.log(selectedData);

    return window.location.href = "adminportal.html"
}

function handleLoginError(){
    let errorMsg = document.querySelector("#error-msg");
    errorMsg.innerHTML = "Username or Password is incorrect."
}