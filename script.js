const perguntas = [
    "O que é IA?",
    "Como a IA ajuda nos estudos?",
    "A IA pode fazer meu trabalho?",
    "Quais são os cuidados?"
];

const respostas = [
    "IA significa Inteligência Artificial. É uma tecnologia capaz de realizar tarefas que normalmente precisam da inteligência humana.",

    "A IA pode ajudar a explicar conteúdos, tirar dúvidas, criar exemplos e ajudar na organização dos estudos.",

    "A IA pode ajudar no trabalho, mas o aluno deve entender o conteúdo e participar da produção. Não é recomendado simplesmente copiar a resposta.",

    "É importante conferir as informações, não compartilhar dados pessoais e usar a IA como uma ferramenta de aprendizagem."
];

function mostrarResposta(numero) {

    const resposta = document.getElementById("resposta");

    resposta.innerHTML = `
        <h3>${perguntas[numero]}</h3>
        <p>${respostas[numero]}</p>
    `;
}
