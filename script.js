const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {

    //Verifica se usuario ja tem um tema pré-definido
    const temaAtual = localStorage.getItem("tema");
    //Verificar qual o tema e inverter
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    //Adicionar a classe dark no elemento body
    document.body.classList.toggle("dark", novoTema === "dark");
    //Salvar as preferencias no localStorage
    localStorage.setItem("tema", novoTema);
    //Atualiza o texto do botão
    botaoTema.textContent = novoTema === "dark" ? "✹ Tema claro" : "☾ Tema escuro";
})

document.addEventListener("DOMContentLoaded", () => {
    //Verificar se tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    //Se for dark, adiciona a classe e altera o botão
    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = "✹ Tema claro";
    }else {
        //Caso contrario é light e botao deve mudar pra dark
        botaoTema.textContent = "☾ Tema escuro";
    }
})