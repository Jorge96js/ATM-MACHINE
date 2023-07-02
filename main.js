window.addEventListener("DOMContentLoaded", function(){
    menu()
    cargarBalanceLocalStorage()
})

let errores = []

user = "admin";
password = 1234;
balance = 10000

function guardarBalance(balance) {
    localStorage.setItem('balance', balance);
}

function cargarBalanceLocalStorage() {
    if(localStorage.getItem('balance')) {
        balance = parseInt(localStorage.getItem('balance'));
        let span = document.querySelector('.balance');
        span.textContent = balance;
    }
}

function restarBalance(e){
    let span = document.querySelector('.balance')
    balance = balance - e;
    span.textContent = balance

    if(balance < 0){
        span.textContent = "  No tiene mas dinero!"
    }

    guardarBalance(balance);
 }

 function sumarBalance(e){
    let span = document.querySelector('.balance')
    balance = balance + e;
    span.textContent = balance

    if(balance < 0){
        span.textContent = "  No tiene mas dinero!"
    }

    guardarBalance(balance);
 }


let mainContainer = document.querySelector('.mainContainer')

let login = document.getElementById('btn')

login.addEventListener('click', (e)=>{
    e.preventDefault()
    validarLogin()
})

function validarLogin(){
    let userLog = document.getElementById('user').value;
    let passwordLog =  document.getElementById('password').value;
    let isLogin = true;

    if(user == userLog && password == passwordLog){
        isLogin = true;
    }
    else{
        isLogin = false;
    }

    if(isLogin){
        showMainContent(user);
    }else{
        alert(0)
    }
    
}


function showMainContent(){
    window.location.href = "menu.html"
}

function menu(){
    let boton1 =  document.getElementById('menu-1');
    let boton2 = document.getElementById('menu-2');
    let screen = document.querySelector('.screen');

    let opcionesBalance = [500, 1000, 1500, 2000];

    boton1.addEventListener('click', ()=> {
        screen.innerHTML = `
            <div class="container">
                <h4 class="text-center mt-2">Cuanto dinero desea retirar?</h4>

                <h5>Su balance es de $<span class="balance">${balance}</span></h5>
                <div class="row">

                <div class="col-2 m-4"> 
                <button onClick="restarBalance(${opcionesBalance[0]})" class="btn btn-success">$${opcionesBalance[0]}</button>
                </div>

                <div class="col-2 m-4"> 
                <button onClick="restarBalance(${opcionesBalance[1]})" class="btn btn-success">$${opcionesBalance[1]}</button>
                </div>

                <div class="col-2 m-4"> 
                <button onClick="restarBalance(${opcionesBalance[2]})" class="btn btn-success">$${opcionesBalance[2]}</button>
                </div>

                </div>

                <button class="btn btn-primary"><a href="menu.html" class="text-white">Menu</a></button>
            </div> 
        `
    })

    boton2.addEventListener('click', ()=> {
        screen.innerHTML = `
            <div class="container">
                <h4 class="text-center mt-2">Cuanto dinero desea ingresar?</h4>

                <h5>Su balance es de $<span class="balance">${balance}</span></h5>
                <div class="row">

                <div class="col-2 m-4"> 
                <button onClick="sumarBalance(${opcionesBalance[0]})" class="btn btn-success">$${opcionesBalance[0]}</button>
                </div>

                <div class="col-2 m-4"> 
                <button onClick="sumarBalance(${opcionesBalance[1]})" class="btn btn-success">$${opcionesBalance[1]}</button>
                </div>

                <div class="col-2 m-4"> 
                <button onClick="sumarBalance(${opcionesBalance[2]})" class="btn btn-success">$${opcionesBalance[2]}</button>
                </div>

                </div>

                <button class="btn btn-primary"><a href="menu.html" class="text-white">Menu</a></button>
            </div> 
        `
        
        
    })
}



