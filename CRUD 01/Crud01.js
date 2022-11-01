// Construindo meu CRUD

// Criando uma função para adicionar uma linha na tabela

function adicionar() {

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    telefone = document.getElementById('telefone').value;
    trabalho = document.getElementById('trabalho').value;
    tabela = document.getElementById('minhaTabela');

    tabelaTamanho = tabela.rows.length; // Calculando o tamanho da tabela
    row = tabela.insertRow(tabelaTamanho); //Inserindo uma linha abaixo da Tabela
    cell111 = row.insertCell(0); //Inserindo as células da Linha
    cell112 = row.insertCell(1);
    cell113 = row.insertCell(2);
    cell114 = row.insertCell(3);
    cell115 = row.insertCell(4);
    cell116 = row.insertCell(5);
    cell117 = row.insertCell(6);

    row.id = tabelaTamanho // Adicionando o id no elemento a ser criado


    // criando o codigo do botão para remover a linha

    btnCode = "<button class='remove-btn' onclick='deletar(this)'>Remover</button>";

    // Atualizar dados

    btnAtualizar = "<button class='atualiza-btn' onclick='atualizar(this)'>Atualizar</button>";

    //Preencher as células da linha

    cell111.innerHTML = tabelaTamanho;
    cell112.innerHTML = nome;
    cell113.innerHTML = email;
    cell114.innerHTML = telefone;
    cell115.innerHTML = trabalho;
    cell116.innerHTML = btnCode;
    cell117.innerHTML = btnAtualizar;

    // Limpar os campos de inserção de dados

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('trabalho').value = "";

    // Impedir o reload da página

    return false;
}



function atualizar(id) {

    selectedRow = id.parentElement.parentElement;
    document.getElementById('nome').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('telefone').value = selectedRow.cells[3].innerHTML;
    document.getElementById('trabalho').value = selectedRow.cells[4].innerHTML;

    return false;
}

function salvaAtualizacao(id) {

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    telefone = document.getElementById('telefone').value;
    trabalho = document.getElementById('trabalho').value;
    tabela = document.getElementById('minhaTabela');

    tabelaTamanho = tabela.rows.length; // Calculando o tamanho da tabela
    row = tabela.insertRow(tabelaTamanho); //Inserindo uma linha abaixo da Tabela

    cell111 = row.insertCell(0);
    cell112 = row.insertCell(1);
    cell113 = row.insertCell(2);
    cell114 = row.insertCell(3);
    cell115 = row.insertCell(4);
    cell116 = row.insertCell(5);
    cell117 = row.insertCell(6);

    row.id = tabelaTamanho;

    btnCode = "<button class='remove-btn' onclick='deletar(this)'>Remover</button>";
    btnAtualizar = "<button class='atualiza-btn' onclick='atualizar(this)'>Atualizar</button>";

    cell111.innerHTML = tabelaTamanho;
    cell112.innerHTML = nome;
    cell113.innerHTML = email;
    cell114.innerHTML = telefone;
    cell115.innerHTML = trabalho;
    cell116.innerHTML = btnCode;
    cell117.innerHTML = btnAtualizar;

    return false;
}

// função para deletar uma linha

function deletar(id) {

    let _confirm = confirm("Deseja Realmente excluir esse registro?") // Alerta de confirmação

    if (_confirm) {

        row = id.parentNode.parentNode.id; // Pegando o ID do avô do Botão
        row = document.getElementById(row); // Recebendo o elemento da linha pelo ID
        row.parentNode.removeChild(row); //Removendo a Linha

    }



    // Impedir o reload da página

    return false;
}


