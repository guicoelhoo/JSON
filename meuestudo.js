function dados() {
    const ds = [
        { id: 1, login: "bobby", password: "1234@", gmail: "bobby@gmail.com" },
        { id: 2, login: "chalton", password: "1234@", gmail: "chalton@gmail.com" },
        { id: 3, login: "dog", password: "1234@", gmail: "dog@gmail.com" }
    ];
    const json = JSON.stringify(ds);
    localStorage.setItem("banco", json);
}

function meulogin() {
    const ds = JSON.parse(localStorage.getItem("banco"));

    let lg = document.querySelector("#login").value;
    let ps = document.querySelector("#pass").value;

    for (let i = 0; i < ds.length; i++) {
        if (lg === ds[i].login && ps === ds[i].password) {
            const usuario = JSON.stringify(ds[i]);
            sessionStorage.setItem("user", usuario);
            alert("Logou!");
        }
    }
}
