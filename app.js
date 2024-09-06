function pesquisar(){
  // 1. Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em 'section'
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  
// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme do Studio Ghibli</p>"
  return 
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = ""; 
let descricao = "";
  
  
  // 4. Itera sobre cada item ('dado') no array 'dados'
  for (let dado of dados){
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()

     // Se dado título includes = campoPesquisa
     if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
      // cria um novo elemento
      // 5. Constrói o HTML para cada resultado usando template literals
     resultados += `
        <div class="item-resultado">
          <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
                <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank" rel="noopener noreferrer">Veja mais aqui</a>
        </div>
    `;
     }
  }

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}
  
  // 6. Substitui o conteúdo HTML da seção pelos resultados construídos
  section.innerHTML = resultados;
}

