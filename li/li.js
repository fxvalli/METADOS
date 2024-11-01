// Exercício 1: toUpperCase, toLowerCase
function padronizarNome(nome) {
    console.log("Maiúsculas:", nome.toUpperCase());
    console.log("Minúsculas:", nome.toLowerCase());
}

padronizarNome("Pietro Favalli");

// Exercício 2: includes, indexOf
function verificarLetra(frase) {
    const letra = 'a';
    const posicao = frase.indexOf(letra);
    console.log(posicao >= 0 ? `A letra "${letra}" está na posição ${posicao}.` : `A letra "${letra}" não está presente.`);
}

verificarLetra("Palmeiras é campeao mundial.");

// Exercício 3: slice
function resumoTexto(texto, inicio, fim) {
    console.log("Resumo:", texto.slice(inicio, fim));
}

resumoTexto("Este é um exemplo de resumo de texto.", 10, 28);

// Exercício 4: concat
function unirMensagens(m1, m2) {
    console.log("Mensagens unidas:", m1.concat(" ", m2));
}

unirMensagens("Palmeiras é colossal?", "Lógico que é!");

// Exercício 5: replace
function substituirPalavra(frase, palavraAntiga, palavraNova) {
    const fraseSubstituida = frase.replace(new RegExp(palavraAntiga, 'g'), palavraNova);
    console.log("Frase com a palavra substituída:", fraseSubstituida);
}

substituirPalavra("O gato está no telhado.", "gato", "cachorro");

// Exercício 6: split, join
function separarEJuntar(frase) {
    const palavras = frase.split(" ");
    const palavrasComHifen = palavras.join("-");
    console.log("Palavras unidas com hífens:", palavrasComHifen);
}

separarEJuntar("Palavras chave dos produtos");

// Exercício 7: push, pop
function filaDeEspera() {
    const fila = [];
    fila.push(101, 102, 103, 104, 105); // Adicionando senhas
    console.log("Fila de espera:", fila);
    const senhaAtendida = fila.pop(); // Removendo a última senha
    console.log("Senha atendida:", senhaAtendida);
    console.log("Fila após atendimento:", fila);
}

filaDeEspera();


// Exercício 8: shift, unshift
function gerenciarClientes() {
    const clientes = ["Carlos", "Ana", "João"];
    console.log("Lista inicial de clientes:", clientes);
    
    // Adiciona novos clientes ao início da lista
    clientes.unshift("Mariana");
    console.log("Após adicionar Mariana:", clientes);
    
    // Remove o primeiro cliente atendido
    const clienteAtendido = clientes.shift();
    console.log("Cliente atendido:", clienteAtendido);
    console.log("Lista após atendimento:", clientes);
}

gerenciarClientes();

// Exercício 9: reverse
function inverterLista(numeros) {
    const listaInvertida = numeros.reverse();
    console.log("Lista de números invertida:", listaInvertida);
}

inverterLista([1, 2, 3, 4, 5]);

// Exercício 10: map
function aplicarDesconto(precos) {
    const precosComDesconto = precos.map(preco => (preco * 0.9).toFixed(2));
    console.log("Preços com desconto:", precosComDesconto);
}

aplicarDesconto([100, 200, 300]);

// Exercício 11: filter
function filtrarNotas(notas) {
    const notasAprovadas = notas.filter(nota => nota > 7);
    console.log("Notas acima de 7:", notasAprovadas);
}

filtrarNotas([6, 8, 5, 9, 7, 10]);

// Exercício 16: this em um objeto
const carro = {
    marca: "BMW",
    modelo: "m3",
    ano: 2020,
    exibirInformacoes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};

carro.exibirInformacoes();

// Exercício 17: this em função construtora
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.exibirDados = function() {
        console.log(`Funcionário: ${this.nome}, Idade: ${this.idade}`);
    };
}

const funcionario1 = new Pessoa("Pietro", 18);
funcionario1.exibirDados();

// Exercício 18: this em classe
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    detalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
    }
}

const produto1 = new Produto("Caderno", 15.50);
produto1.detalhes();

// Exercício 19: this em setTimeout
const relogio = {
    hora: new Date().toLocaleTimeString(),
    mostrarHora: function() {
        setTimeout(() => {
            console.log(`Hora atual: ${this.hora}`);
        }, 1000);
    }
};

relogio.mostrarHora();

// Exercício 20: this com bind
const usuario = {
    nome: "Carlos",
    email: "carlos@example.com"
};

function exibirUsuario() {
    console.log(`Usuário: ${this.nome}, Email: ${this.email}`);
}

const exibirUsuarioBind = exibirUsuario.bind(usuario);
exibirUsuarioBind();

// Exercício 21: parseInt
function converterParaInteiro(valorDecimal) {
    const inteiro = parseInt(valorDecimal);
    console.log(`Valor original: ${valorDecimal}, Inteiro: ${inteiro}`);
}

converterParaInteiro(10.99);

// Exercício 22: parseInt em array
function converterArrayParaInteiros(array) {
    const inteiros = array.map(item => parseInt(item));
    console.log("Array original:", array);
    console.log("Array convertido:", inteiros);
}

converterArrayParaInteiros(["1", "2", "3.5", "4", "5.8"]);

// Exercício 23: isNaN
function verificarNumero(valor) {
    if (isNaN(valor)) {
        console.log(`"${valor}" não é um número válido.`);
    } else {
        console.log(`"${valor}" é um número válido.`);
    }
}

verificarNumero("abc");
verificarNumero(10);
