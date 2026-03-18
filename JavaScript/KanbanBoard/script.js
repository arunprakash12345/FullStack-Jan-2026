const addBtn = document.querySelector(".add-btn");
const formModalCont = document.querySelector(".modal-cont");
const textAreaInput = document.querySelector(".modal-cont-textarea");
const allPriorityColor = document.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main-cont");
const removeBtn = document.querySelector(".remove-btn");
const headerColors = document.querySelectorAll(".color");
const state = {
  isModalOpen: false,
  isDeleteTaskButtonOn: false,
  modalPriorityColor: "pink",
  taskInfo: "",
  taskId: "",
};

headerColors.forEach((color) => {
  color.addEventListener("click", (event) => {
    const currentFilterValue = event.target.classList[0];
    const isShowAllClicked = event.target.textContent === "Show All";
    const allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((ticket) => {
      const currentColorTicket =
        ticket.querySelector(".ticket-color").classList[1];
      ticket.style.display =
        currentFilterValue === currentColorTicket || isShowAllClicked
          ? "block"
          : "none";
    });
  });
});

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
  handleLock(ticketCont);
  handleStatusColor(ticketCont);
}

function handleDelete(container) {
  const deleteTask = container.querySelector(".delete-task");
  deleteTask.addEventListener("click", () => {
    if (state.isDeleteTaskButtonOn) {
      container.remove();
    }
  });
}

function handleLock(container) {
  const lockBtnElem = container.querySelector(".ticket-lock");
  const lockIconElem = lockBtnElem.children[0];
  const textAreaElem = container.querySelector(".ticket-area");
  let currentIcon = lockIconElem.classList.contains("fa-lock")
    ? "fa-lock"
    : "fa-lock-open";
  lockBtnElem.addEventListener("click", () => {
    if (currentIcon === "fa-lock") {
      lockIconElem.classList.remove("fa-lock");
      lockIconElem.classList.add("fa-lock-open");
      textAreaElem.setAttribute("contenteditable", true);
      textAreaElem.style = "border: 1px solid gray";
      currentIcon = "fa-lock-open";
    } else {
      lockIconElem.classList.remove("fa-lock-open");
      lockIconElem.classList.add("fa-lock");
      textAreaElem.setAttribute("contenteditable", false);
      textAreaElem.style = "border: none";
      currentIcon = "fa-lock";
    }
  });
}

function handleStatusColor(container) {
  const colors = ["pink", "green", "blue", "purple"];
  const colorHeadingElem = container.querySelector(".ticket-color");
  colorHeadingElem.addEventListener("click", () => {
    const currentStatus = colorHeadingElem.classList[1];
    const currentIndex = colors.findIndex((c) => c === currentStatus);
    colorHeadingElem.classList.remove(currentStatus);
    colorHeadingElem.classList.add(colors[(currentIndex + 1) % colors.length]);
  });
}
