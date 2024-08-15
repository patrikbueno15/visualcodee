const caixaPrincipal = document.querySelector(".caixa- principal");

    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    
    const caixaResultado = document.querySelector(".caixa-resultado");
    
    const textoResultado = document.querySelector(",texto-resultado");
    
    const perguntas = [
    {
    enunciado: "pergunta1",
    alternativa:["alternativa1", "alternativa2"],
    },
    {
    enunciado: "pergunta2",
    alternativa: ["alternativa1", "alternativa2"],   
    },
    ];
    let atual = 0;
    let perguntaAtual;
    function mostraPergunta(){ 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent =perguntaAtual.enunciado;
    mostraPergunta();
    mostraAlternativas();
    }
    function mostraAlternativas() {
         for (const alternativa of perguntaAtual.alternativas) {
              const botaoalternativa=alternativa;
botaoalternativa.textContent=alternativa;
caixaAlternativas.appendChild(botaoalternativa);
       const caixaPerguntas = Document.querySelector}
(".caixa-perguntas");}
{     
enunciado: "Assim que saiu da escola, você sedepara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter.Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
    alternativas: [
        "Isso é assustadoor!",
        "Isso é maravilhoso!"
    ]
    }