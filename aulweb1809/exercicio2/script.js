function verificarObrigatoriedadeVoto(idade) {
    if (idade < 16) {
        return "Voto proibido";
    } else if ((idade >= 16 && idade < 18) || idade > 70) {
        return "Voto facultativo";
    } else {
        return "Voto obrigatório";
    }
}

// Exemplo de uso:
const idade = prompt("Digite sua idade:");
alert(verificarObrigatoriedadeVoto(Number(idade)));