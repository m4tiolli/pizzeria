// criar a variável modalKey sera global
let modalKey = 0;

// variavel para controlar a quantidade inicial de pizzas na modal
let quantPizzas = 1;

let cart = []; // carrinho

// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const formatoMonetario = (valor) => {
if (valor) {
return valor.toFixed(2);
}
};

const abrirModal = () => {
seleciona(".pizzaWindowArea").style.opacity = 0; // transparente
seleciona(".pizzaWindowArea").style.display = "flex";
setTimeout(() => (seleciona(".pizzaWindowArea").style.opacity = 1), 150);
};

const fecharModal = () => {
seleciona(".pizzaWindowArea").style.opacity = 0; // transparente
setTimeout(() => (seleciona(".pizzaWindowArea").style.display = "none"), 500);
};

const botoesFechar = () => {
// BOTOES FECHAR MODAL
selecionaTodos(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) =>
item.addEventListener("click", fecharModal)
);
};

const preencheDadosDasPizzas = (pizzaItem, item, index) => {
// setar um atributo para identificar qual elemento foi clicado
pizzaItem.setAttribute("data-key", index);
pizzaItem.querySelector(".pizza-item--img img").src = item.img;
pizzaItem.querySelector(".pizza-item--price").innerHTML = formatoReal(item.price[2]);
pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
};

const preencheDadosModal = (item) => {
seleciona(".pizzaBig img").src = item.img;
seleciona(".pizzaInfo h1").innerHTML = item.name;
seleciona(".pizzaInfo--desc").innerHTML = item.description;
seleciona(".pizzaInfo--actualPrice").innerHTML = formatoReal(item.price[2]);
};

const pegarKey = (e) => {
// .closest retorna o elemento mais proximo que tem a class que passamos
// do .pizza-item ele vai pegar o valor do atributo data-key
let key = e.target.closest(".pizza-item").getAttribute("data-key");
console.log("Pizza clicada " + key);
console.log(pizzaJson[key]);

// garantir que a quantidade inicial de pizzas é 1
quantPizzas = 1;

// Para manter a informação de qual pizza foi clicada
modalKey = key;

return key;
};

const preencherTamanhos = (key) => {
// tirar a selecao de tamanho atual e selecionar o tamanho grande
seleciona(".pizzaInfo--size.selected").classList.remove("selected");

// selecionar todos os tamanhos
selecionaTodos(".pizzaInfo--size").forEach((size, sizeIndex) => {
// selecionar o tamanho grande
sizeIndex == 2 ? size.classList.add("selected") : "";
size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
});
};

const escolherTamanhoPreco = (key) => {}

// Ações nos botões de tamanho