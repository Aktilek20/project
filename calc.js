let a = ""; 
let b = ""; 
let sign = ""; 
let finish = false; 


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-'];


const out = document.querySelector('.calc-screen p');


function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector('.ac').onclick = clearAll;


document.querySelector('.buttons').onclick = (event) => {
     
    if (!event.target.classList.contains('btn')) return;
   
    if (event.target.classList.contains('ac')) return;

    const key = event.target.textContent;

  
    if (digit.includes(key)) {
        if (b === "" && sign === "") {
             Вводим `a`
            a += key;
            out.textContent = a;
        } else if (a !== "" && b !== "" && finish) {
            
            b = key;
            finish = false;
            out.textContent = b;
        } else {
             Вводим `b`
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }


    if (action.includes(key)) {
        if (key === '+/-') {
             
            if (b === "" && sign === "") {
              
                a = a.startsWith('-') ? a.slice(1) : '-' + a;
                out.textContent = a;
            } else if (b !== "") {
                
                b = b.startsWith('-') ? b.slice(1) : '-' + b;
                out.textContent = b;
            }
        } else if (key === '%') {
      
            if (b === "" && sign === "") {
            
                a = (parseFloat(a) / 100).toString();
                out.textContent = a;
            } else if (b !== "") {
            
                b = (parseFloat(b) / 100).toString();
                out.textContent = b;
            }
        } else {
            
            sign = key;
            out.textContent = a;
        }
        console.table(a, b, sign);
        return;
    }


    if (key === '=') {
        if (b === '') b = a; 
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === "0") {
                    out.textContent = "Error";  
                    clearAll();
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
};
