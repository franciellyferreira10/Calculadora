//A declaração const cria uma varialvel cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não seguinifica que o valor é imutavel, apenas que a variavel constante não pode ser alterado ou retribuida

const display = document.querySelector("#display"); //o querySelector retorna o primeiro elemento dentro do parenteses

const buttons = document.querySelectorAll("button"); //o querySelectorAll todos os elemento dentro do parenteses

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        if (btn.id === "=") {
            
            display.value = eval(display.value);
        }
        else if (btn.id === "ac") {

            display.value = "";

        } else if (btn.id === "ne") {

            display.value = display.value.slice(0, -1);

        } else {

            display.value += btn.id;
        }
    })
});

document.addEventListener('keydown', function (event) {
    var key = event.key;

    if (/[\d\/\*\-\+=]|Enter/.test(key)) {

        event.preventDefault();

        var button;

        if (key === "Enter") {

            button = document.getElementById("=");

        } else {

            button = document.getElementById(key);
        }

        button.click();

    } else if (key === "Backspace") {

        event.preventDefault();

        display.value = display.value.slice(0, -1);
    }
});




//=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

//O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0.

//O operador de atribuição encurtado += pode ser utilizado para concatenar strings.