//Parte do novo cadastro
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#btnCancelar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


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