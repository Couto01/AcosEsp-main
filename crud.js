document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
    const nome = document.querySelector("#nome").value
    const descricao = document.querySelector("#descricao").value
    const preco = document.querySelector("#preco").value
    const departamento = document.querySelector("#departamento").value
    const estoque = document.querySelector("#estoque").value

    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    
    const card = {
        nome,
        descricao,
        preco,
        departamento,
        estoque
    }
    
    if(!validar(card.nome, document.querySelector("#nome"))) return
    if(!validar(card.descricao, document.querySelector("#descricao"))) return
    if(!validar(card.preco, document.querySelector("#preco"))) return
    if(!validar(card.estoque, document.querySelector("#estoque"))) return

    document.querySelector("#card").innerHTML += createCard(card)

}




function validar(valor, campo){
    if(valor ==""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }
    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}

function apagar(){
    botao.parentNode().parentNode().parentNode()
}


function createCard(card){
    return `
    <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <img
              src="./assets/img/vergalhao.png"
              class="card-img-top"
              alt="..."
              style="height: 280px"
            />
            <div class="card-body">
              <h4 class="card-title">${card.nome}</h3>
              <p class="card-text">
                ${card.descricao}<br />
              </p>
              <h5>Gerdau</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Preço: R$${card.preco}
                <br>
                Estoque: ${card.estoque}
                <br>
                Departamento: ${card.departamento}
              </li>
            </ul>
            <div class="card-body">
              <a href="#" class="btn btn-success" title="Editar produto">
                <i class="bi bi-pencil"></i>
              </a>
              <a onClick="apagar(this)" href="#" class="btn btn-danger" title="Deletar produto">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </div>
    </div>
  `
}