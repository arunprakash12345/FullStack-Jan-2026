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
};

let ticketData = JSON.parse(localStorage.getItem("tickets")) || [];

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
      const taskInfo = textAreaInput.value;
      createTicket(taskInfo);
    } catch (error) {
      console.error(error);
    } finally {
      formModalCont.style.display = "none";
      textAreaInput.value = null;
    }
  }
});

function createTicket(
  taskInfo,
  id = shortid(),
  color = state.modalPriorityColor,
) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
   <div class="ticket-color ${color}"></div>
        <div class="ticket-id">${id}</div>
        <div class="ticket-area">
          ${taskInfo}
        </div>
        <button class="delete-task" disabled=true>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <button class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </button>`;
  const container = document.querySelector(
    `.column[data-status=${color}] .ticket-list`,
  );
  container.appendChild(ticketCont);
  handleDelete(ticketCont, id);
  handleLock(ticketCont, id);
  handleStatusColor(ticketCont, id);

  if (!ticketData.find((t) => t.id === id)) {
    ticketData.push({
      id,
      taskInfo,
      color,
    });
    updateLocalStorage();
  }
}

function handleDelete(container, id) {
  const deleteTask = container.querySelector(".delete-task");
  deleteTask.addEventListener("click", () => {
    if (state.isDeleteTaskButtonOn) {
      container.remove();
      ticketData = ticketData.filter((t) => t.id !== id);
      updateLocalStorage();
    }
  });
}

function handleLock(container, id) {
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
      const ticket = ticketData.find((t) => t.id === id);
      if (ticket) {
        ticket.taskInfo = textAreaElem.textContent.trim();
        updateLocalStorage();
      }
    }
  });
}

function handleStatusColor(container, id) {
  const colors = ["pink", "green", "blue", "purple"];
  const colorHeadingElem = container.querySelector(".ticket-color");
  colorHeadingElem.addEventListener("click", () => {
    const currentStatus = colorHeadingElem.classList[1];
    const currentIndex = colors.findIndex((c) => c === currentStatus);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    colorHeadingElem.classList.remove(currentStatus);
    colorHeadingElem.classList.add(nextColor);
    document
      .querySelector(`.column[data-status=${nextColor}] .ticket-list`)
      .appendChild(container);
    const ticket = ticketData.find((t) => t.id === id);
    if (ticket) {
      ticket.color = nextColor;
      updateLocalStorage();
    }
  });
}

function updateLocalStorage() {
  localStorage.setItem("tickets", JSON.stringify(ticketData));
}

window.addEventListener("load", () => {
  ticketData.forEach((t) => createTicket(t.taskInfo, t.id, t.color));
});
