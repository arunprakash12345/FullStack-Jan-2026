let pathStorage = {};
window.addEventListener("load", () => {
  const tableBody = document.querySelector("#tableBody");
  for (let ri = 0; ri < 8; ri++) {
    const tr = document.createElement("tr");
    for (let ci = 0; ci < 8; ci++) {
      const td = document.createElement("td");
      td.textContent = `${ri}-${ci}`;
      td.setAttribute("data-index", `${ri}-${ci}`);
      td.classList.add("box");
      if ((ri + ci) % 2 === 0) {
        td.classList.add("white");
      } else {
        td.classList.add("black");
      }
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
});

const tableBody = document.querySelector("#tableBody");

function cleanUp() {
  const tableBox = document.querySelectorAll(".box");
  for (let i = 0; i < tableBox.length; i++) {
    tableBox[i].classList.remove("yellow");
  }
  pathStorage = {};
}
tableBody.addEventListener("mouseleave", () => {
  cleanUp();
});

tableBody.addEventListener("mouseover", (event) => {
  cleanUp();
  const tableCell = event.target;
  const dataIndex = tableCell.dataset.index;
  const [ri, ci] = dataIndex.split("-").map((idx) => parseInt(idx));
  pathStorage[dataIndex] = true;
  topLeft(ri, ci, pathStorage);
  topRight(ri, ci, pathStorage);
  bottomRight(ri, ci, pathStorage);
  bottomLeft(ri, ci, pathStorage);
  const tableBox = document.querySelectorAll(".box");
  for (let i = 0; i < tableBox.length; i++) {
    const tableboxDataIndex = tableBox[i].dataset.index;
    if (pathStorage[tableboxDataIndex] === true) {
      // valid cell
      tableBox[i].classList.add("yellow");
    }
  }
});

function topLeft(ri, ci, pathStorage) {
  ri--;
  ci--;
  while (ri >= 0 && ci >= 0) {
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci--;
  }
}

function topRight(ri, ci, pathStorage) {
  ri--;
  ci++;
  while (ri >= 0 && ci <= 7) {
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
  }
}

function bottomRight(ri, ci, pathStorage) {
  ri++;
  ci++;
  while (ri <= 7 && ci <= 7) {
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri++;
    ci++;
  }
}

function bottomLeft(ri, ci, pathStorage) {
  ri++;
  ci--;
  while (ri <= 7 && ci >= 0) {
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri++;
    ci--;
  }
}
