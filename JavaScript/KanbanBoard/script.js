const addBtn = document.querySelector(".add-btn");
const formModalCont = document.querySelector(".modal-cont");
const textAreaInput = document.querySelector(".modal-cont-textarea");
const allPriorityColor = document.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main-cont");
const removeBtn = document.querySelector(".remove-btn");
const state = {
  isModalOpen: false,
  isDeleteTaskButtonOn: false,
  modalPriorityColor: "pink",
  taskInfo: "",
  taskId: "",
};

removeBtn.addEventListener("click", () => {
  removeBtn.style.color = state.isDeleteTaskButtonOn ? "black" : "red";
  state.isDeleteTaskButtonOn = !state.isDeleteTaskButtonOn;
  const allDeleteTask = document.querySelectorAll(".delete-task");
  if (state.isDeleteTaskButtonOn) {
    allDeleteTask.forEach((task) => {
      task.disabled = false;
    });
  } else {
    allDeleteTask.forEach((task) => {
      task.disabled = true;
    });
  }
});

addBtn.addEventListener("click", () => {
  formModalCont.style.display = state.isModalOpen ? "none" : "flex";
  state.isModalOpen = !state.isModalOpen;
});

allPriorityColor.forEach((color) => {
  color.addEventListener("click", (event) => {
    // remove the selected color  (active class) previously
    allPriorityColor.forEach((color) => {
      color.classList.remove("active");
    });
    const currentColorNode = event.target;
    currentColorNode.classList.add("active");
    state.modalPriorityColor = currentColorNode.classList[1];
  });
});

formModalCont.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    try {
      state.taskInfo = textAreaInput.value;
      createTicket();
    } catch (error) {
      console.error(error);
    } finally {
      formModalCont.style.display = "none";
      textAreaInput.value = null;
    }
  }
});

function createTicket() {
  // create id
  state.taskId = shortid();
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
   <div class="ticket-color ${state.modalPriorityColor}"></div>
        <div class="ticket-id">${state.taskId}</div>
        <div class="ticket-area">
          ${state.taskInfo}
        </div>
        <button class="delete-task" disabled=true>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <button class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </button>`;
  mainContainer.appendChild(ticketCont);
  handleDelete(ticketCont);
}

function handleDelete(container) {
  const deleteTask = container.querySelector(".delete-task");
  deleteTask.addEventListener("click", () => {
    if (state.isDeleteTaskButtonOn) {
      container.remove();
    }
  });
}
