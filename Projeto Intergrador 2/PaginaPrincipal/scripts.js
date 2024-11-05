//Parte do novo cadastro
///const openModalButton = document.querySelector("#open-modal");
//const closeModalButton = document.querySelector("#btnCancelar");
//const modal = document.querySelector("#modal");
//const fade = document.querySelector("#fade");

//const toggleModal = () => {
  //modal.classList.toggle("hide");
  //fade.classList.toggle("hide");
//};

//[openModalButton, closeModalButton, fade].forEach((el) => {
 // el.addEventListener("click", () => toggleModal());
//});


//Parte da adição de input

const openModalButtonInput = document.querySelector("#open-modalInput");
const closeModalButtonInput = document.querySelector("#btnCancelarInput");
const modalInput = document.querySelector("#modalInput");
const fadeInput = document.querySelector("#fadeInput");

const toggleModalInput = () => {
  modalInput.classList.toggle("hideInput");
  fadeInput.classList.toggle("hideInput");
};

[openModalButtonInput, closeModalButtonInput, fadeInput].forEach((el) => {
  el.addEventListener("click", () => toggleModalInput());
});

//Parte da Edição de input

const openModalButtonEditInput = document.querySelector("#open-modalEditInput");
const closeModalButtonEditInput = document.querySelector("#btnCancelarEditInput");
const modalEditInput = document.querySelector("#modalEditInput");
const fadeEditInput = document.querySelector("#fadeEditInput");

const toggleModalEditInput = () => {
  modalEditInput.classList.toggle("hideEditInput");
  fadeEditInput.classList.toggle("hideEditInput");
};

[openModalButtonEditInput, closeModalButtonEditInput, fadeEditInput].forEach((el) => {
  el.addEventListener("click", () => toggleModalEditInput());
});


//Barra de pesquisa
function search() {
  const query = document.getElementById('searchInput').value;
  const processos = document.querySelector('.processos')
  const lista = document.querySelector('ul')
  if (query) {
      alert(`Você pesquisou: ${query}`);
      //lógica para a pesquisa.
  } else {
      alert('Digite algo para pesquisar.');
  }
}






// NOVO CADASTO COM BACK

document.getElementById("abrir-modal").onclick = function() {
    document.getElementById("modal").style.display = "block";
}

// Fechar o modal ao clicar no 'x'
document.getElementById("fechar-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Função para salvar as informações do formulário e exibir na tela principal
function salvarInformacoes() {
    // Obtém os valores do formulário
    const nomeProcesso = document.getElementById("nomeProcesso").value;
    const opcoes = document.getElementById("opcoes").value;
    const dataInicio = document.getElementById("dataInicio").value;
    const dataTermino = document.getElementById("dataTermino").value;
    const id1 = document.getElementById("id1").value;
    const id2 = document.getElementById("id2").value;
    const id3 = document.getElementById("id3").value;
    const id4 = document.getElementById("id4").value;
    const analisador1 = document.getElementById("analisador1").value;
    const analisador2 = document.getElementById("analisador2").value;
    const analisador3 = document.getElementById("analisador3").value;
    const analisador4 = document.getElementById("analisador4").value;
    const slot1 = document.getElementById("slot1").value;
    const slot2 = document.getElementById("slot2").value;
    const slot3 = document.getElementById("slot3").value;
    const slot4 = document.getElementById("slot4").value;



     // PARTE DA LISTA PRINCIPAL
    //obtem dados da lista de processos
    const novoProcesso = document.getElementById("nomeProcesso");
    const numeroProcesso = novoProcesso.value.trim()

    const textoProcesso = `Processo ${numeroProcesso}`;

    const novoItem = document.createElement("li");
    const novoLink = document.createElement("a");
    novoLink.href = "#";  // Link fictício, substitua se necessário
    novoLink.textContent = textoProcesso;
                
    // Adiciona o link ao novo item de lista
    novoItem.appendChild(novoLink);
             
    // Adiciona o novo item à lista de processos
    document.getElementById("lista-processos").appendChild(novoItem);
      //encerramento da lista principal



    // Validação simples para garantir que os campos não estejam vazios
    if (nomeProcesso && opcoes && dataInicio && dataTermino) {
        // Atualiza as informações na tela principal
        document.getElementById("nomeProcessoTela").innerText = 'Processo ' + nomeProcesso;
        document.getElementById("tipoProcessoTela").innerText = opcoes;
        document.getElementById("dataInicioTela").innerText = dataInicio;
        document.getElementById("dataTerminoTela").innerText = dataTermino;
        document.getElementById("dataUltimoItemTela").innerText = dataTermino;
        document.getElementById("StatusTela").innerText = "Em execução";
        document.getElementById("id1Tela").innerText = 'ID ' + id1;
        document.getElementById("id2Tela").innerText = 'ID ' + id2;
        document.getElementById("id3Tela").innerText = 'ID ' + id3;
        document.getElementById("id4Tela").innerText = 'ID ' + id4;
        document.getElementById("analisador1Tela").innerText = analisador1;
        document.getElementById("analisador2Tela").innerText = analisador2;
        document.getElementById("analisador3Tela").innerText = analisador3;
        document.getElementById("analisador4Tela").innerText = analisador4;
        document.getElementById("slot1Tela").innerText = slot1;
        document.getElementById("slot2Tela").innerText = slot2;
        document.getElementById("slot3Tela").innerText = slot3;
        document.getElementById("slot4Tela").innerText = slot4;
        document.getElementById("status1Tela").innerText = "No prazo";
        document.getElementById("status2Tela").innerText = "No prazo";
        document.getElementById("status3Tela").innerText = "No prazo";
        document.getElementById("status4Tela").innerText = "No prazo";
        document.getElementById("adcId1Tela").innerText = 'ID ' + id1;
        document.getElementById("adcId2Tela").innerText = 'ID ' + id2;
        document.getElementById("adcId3Tela").innerText = 'ID ' + id3;
        document.getElementById("adcId4Tela").innerText = 'ID ' + id4;
        document.getElementById("adcAnalisador1Tela").innerText = analisador1;
        document.getElementById("adcAnalisador2Tela").innerText = analisador2;
        document.getElementById("adcAnalisador3Tela").innerText = analisador3;
        document.getElementById("adcAnalisador4Tela").innerText = analisador4;
        document.getElementById("adcSlot1Tela").innerText = slot1;
        document.getElementById("adcSlot2Tela").innerText = slot2;
        document.getElementById("adcSlot3Tela").innerText = slot3;
        document.getElementById("adcSlot4Tela").innerText = slot4;
        document.getElementById("nomeProcessoAdc").innerText = 'Processo ' + nomeProcesso;
        


        // Fecha o modal
        document.getElementById("modal").style.display = "none";

        // Limpa os campos do formulário
        document.getElementById("form-cadastro").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}




//BACK DO ADIÇÃO DE MODAL
// Abrir o modal ao clicar no botão
document.getElementById("abrir-modalAdc").onclick = function() {
  document.getElementById("modalAdc").style.display = "block";
}

// Fechar o modal ao clicar no 'x'
document.getElementById("fechar-modalAdc").onclick = function() {
  document.getElementById("modalAdc").style.display = "none";
}

const modal = document.getElementById("modalAdc");
const addRowButton = document.getElementById("abrir-modalAdc");
const saveButton = document.getElementById("btnSalvar");
const closeModal = document.getElementById("fechar-modal");
const mainTable = document.getElementById("table1");

const totalCiclo1 = document.getElementById("totalCiclo1Tela");
const totalCap1 = document.getElementById("totalCap1Tela");
const mediaCiclo1 = document.getElementById("mediaCiclo1Tela");
const totalCiclo2 = document.getElementById("totalCiclo2Tela");
const totalCap2 = document.getElementById("totalCap2Tela");
const mediaCiclo2 = document.getElementById("mediaCiclo2Tela");
const totalCiclo3 = document.getElementById("totalCiclo3Tela");
const totalCap3 = document.getElementById("totalCap3Tela");
const mediaCiclo3 = document.getElementById("mediaCiclo3Tela");
const totalCiclo4 = document.getElementById("totalCiclo4Tela");
const totalCap4 = document.getElementById("totalCap4Tela");
const mediaCiclo4 = document.getElementById("mediaCiclo4Tela");

let idLinha = 2; 
let totalCiclos1 = 0;
let totalLinhas1 = 0; 
let totalCiclos2 = 0; 
let totalLinhas2 = 0; 
let totalCiclos3 = 0; 
let totalLinhas3 = 0; 
let totalCiclos4 = 0; 
let totalLinhas4 = 0; 
let lastCiclo1 = null; // Armazena o último ciclo adicionado
let lastCiclo2 = null;
let lastCiclo3 = null;
let lastCiclo4 = null;



// Função para salvar as informações do formulário e exibir na tela principal

function salvarInformacoes2() {
  // Obtém os valores do formulário
  const cap1 = document.getElementById("cap1").value;
  const cap2 = document.getElementById("cap2").value;
  const cap3 = document.getElementById("cap3").value;
  const cap4 = document.getElementById("cap4").value;
  const ciclo1 = document.getElementById("ciclo1").value;
  const ciclo2 = document.getElementById("ciclo2").value;
  const ciclo3 = document.getElementById("ciclo3").value;
  const ciclo4 = document.getElementById("ciclo4").value;

  const dataAtual = new Date()
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses vão de 0 a 11
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  //Criar uma nova linha
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td class="menor"><img src="https://cdn-icons-png.flaticon.com/512/3597/3597104.png" alt="editar"></td>
  <td class="menor">${idLinha}</td>
  <td class="data">${dataFormatada}</td>
  <td class="md1">${cap1}</td>
  <td class="md1">${ciclo1}</td>
  <td class="md2">${cap2}</td>
  <td class="md2">${ciclo2}</td>
  <td class="md3">${cap3}</td>
  <td class="md3">${ciclo3}</td>
  <td class="md4">${cap4}</td>
  <td class="md4">${ciclo4}</td>
  `;
  // Substituir a linha de exemplo na primeira inserção ou adicionar abaixo das outras linhas
  mainTable.appendChild(newRow);

  idLinha++;
  // Fechar modal e limpar inputs
  modal.style.display = "none";
  document.getElementById("data").value = '';
  document.getElementById("cap1").value = '';
  document.getElementById("ciclo1").value = '';
  document.getElementById("cap2").value = '';
  document.getElementById("ciclo2").value = '';
  document.getElementById("cap3").value = '';
  document.getElementById("ciclo3").value = '';
  document.getElementById("cap4").value = '';
  document.getElementById("ciclo4").value = '';

  // Incrementar o ID
 

  // Atualizar informações do controle
  totalCiclo1.textContent = ciclo1; // Último ciclo adicionado
  totalCap1.textContent = cap1; // Última capacidade adicionada
  totalCiclo2.textContent = ciclo2; // Último ciclo adicionado
  totalCap2.textContent = cap2; // Última capacidade adicionada
  totalCiclo3.textContent = ciclo3; // Último ciclo adicionado
  totalCap3.textContent = cap3; // Última capacidade adicionada
  totalCiclo4.textContent = ciclo4; // Último ciclo adicionado
  totalCap4.textContent = cap4; // Última capacidade adicionada


 if (lastCiclo1 !== null) {
    const dif = ciclo1 - lastCiclo1; // Diferença entre o ciclo atual e o último
    mediaCiclo1.textContent = dif; // Atualizar a diferença
  } else{
    mediaCiclo1.textContent = ciclo1;
  }
  lastCiclo1 = ciclo1; // Atualizar o último ciclo

  if (lastCiclo2 !== null) {
    const dif = ciclo2 - lastCiclo2; // Diferença entre o ciclo atual e o último
    mediaCiclo2.textContent = dif; // Atualizar a diferença
  } else{
    mediaCiclo2.textContent = ciclo2;
  }
  lastCiclo2 = ciclo2; // Atualizar o último ciclo

  if (lastCiclo3 !== null) {
    const dif = ciclo3 - lastCiclo3; // Diferença entre o ciclo atual e o último
    mediaCiclo3.textContent = dif; // Atualizar a diferença
  } else{
    mediaCiclo3.textContent = ciclo3;
  }
    lastCiclo3 = ciclo3; // Atualizar o último ciclo

  if (lastCiclo4 !== null) {
    const dif = ciclo4 - lastCiclo4; // Diferença entre o ciclo atual e o último
    mediaCiclo4.textContent = dif; // Atualizar a diferença
  } else{
    mediaCiclo4.textContent = ciclo4;
  }
  lastCiclo4 = ciclo4; // Atualizar o último ciclo

            
}
// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
 if (event.target == document.getElementById("modalAdc")) {
    document.getElementById("modalAdc").style.display = "none";
  }
}