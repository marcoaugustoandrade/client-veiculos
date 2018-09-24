let listaVeiculos;
let veiculo;

function carregarVeiculos(){
    
    let url = 'http://localhost:3005/veiculos';
    let requisicao = new XMLHttpRequest();
    
    requisicao.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            listaVeiculos = JSON.parse(this.responseText);
        }
    }
    
    requisicao.open("GET", url, true);
    requisicao.responseType = 'text';
    requisicao.send();
}

function carregarVeiculo(id){
    
    let url = 'http://localhost:3005/veiculos/'+id;
    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            veiculo = JSON.parse(this.responseText);
        }
    }

    requisicao.open("GET", url, true);
    requisicao.responseType = 'text';
    requisicao.send();
}

function montarTabela(){
    
    let tabela = document.querySelector('#tabela-veiculos');

    // Limpando a tabela
    

    // Populando a tabela
    for (i = 0; i < listaVeiculos.length; i++){
        let colunaId = document.createElement('td');
        let colunaMarca = document.createElement('td');
        let colunaModelo = document.createElement('td');
        let colunaPlaca = document.createElement('td');
        let colunaAno = document.createElement('td');
        let colunaAlterar = document.createElement('td');
        let colunaExcluir = document.createElement('td');

        colunaId.innerHTML = listaVeiculos[i]['id'];
        colunaMarca.innerHTML = listaVeiculos[i]['marca'];
        colunaModelo.innerHTML = listaVeiculos[i]['modelo'];
        colunaPlaca.innerHTML = listaVeiculos[i]['placa'];
        colunaAno.innerHTML = listaVeiculos[i]['ano'];

        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";
        btnAlterar.className = "btn btn-warning";
        colunaAlterar.appendChild(btnAlterar);
        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Exlcuir";
        btnExcluir.className = "btn btn-danger";
        colunaExcluir.appendChild(btnExcluir);
        

        let linha = document.createElement('tr');
        linha.appendChild(colunaId);
        linha.appendChild(colunaMarca);
        linha.appendChild(colunaModelo);
        linha.appendChild(colunaPlaca);
        linha.appendChild(colunaAno);
        linha.appendChild(colunaAlterar);
        linha.appendChild(colunaExcluir);

        tabela.appendChild(linha);
        
    }
}

function salvar(veiculo){

    carregarVeiculos();
}

function deletar(veiculo){

    carregarVeiculos();
}

function alterar(veiculo){

    carregarVeiculos();
}

function carregarFormulario(){

}