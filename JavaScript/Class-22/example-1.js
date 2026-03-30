// cafe => getMenu => put order => server => generated bill => payment => exit

const menuItems = ["Tea", "Coffee", "MilkShakes", "Biscuits"];
function getMenu(time) {
  console.log("I have enter the cafe : ", time);
  const isCafeOpen = time >= 6 && time <= 22 ? true : false;
  const menu = new Promise((resolve, reject) => {
    console.log("I have asked for the menu");
    if (isCafeOpen) {
      resolve({
        menuItems,
        status: "Menu is shared",
      });
    } else {
      reject(
        "Cafe is Closed, Can you Come back between 6 and 22 hours tomorrow",
      );
    }
  });
  return menu;
}

function placeAnOrder(item1, item2) {
  const orderStatus = new Promise((resolve, reject) => {
    if (menuItems.includes(item1) && menuItems.includes(item2)) {
      resolve(`Order has been placded for ${item1} and ${item2}`);
    } else {
      reject(
        "one of items or all items are not available, please select the item which are available",
      );
    }
  });
  return orderStatus;
}

function serve() {
  const servingOrder = new Promise((resolve) => {
    setTimeout(() => {
      resolve("order is served, enjoy your time");
    }, 5000);
  });
  return servingOrder;
}

function generateBill() {
  const bill = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pay the bill of 500 rupees");
    }, 2000);
  });
  return bill;
}

console.log("before");

// getMenu(10)
//   .then((menu) => {
//     console.log(menu);
//     return placeAnOrder("Tea", "Biscuits");
//   })
//   .then((orderStatus) => {
//     console.log(orderStatus);
//     return serve();
//   })
//   .then((orderIsBeingServed) => {
//     console.log(orderIsBeingServed);
//     console.log("consumed the items");
//     return generateBill();
//   })
//   .then((bill) => {
//     console.log(bill);
//     console.log("Payment is done");
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Thank you for visiting us, and keep coming");
//   });

async function cafeFlow() {
  try {
    const menu = await getMenu(10);
    console.log(menu);
    const placingAnOrder = await placeAnOrder("Tea-1", "Biscuits");
    console.log(placingAnOrder);
    const orderIsBeingserved = await serve();
    console.log(orderIsBeingserved);
    console.log("consume the order items");
    const bill = await generateBill();
    console.log(bill);
    console.log("Payment is done");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Thank you for visiting us, and keep coming");
  }
}

cafeFlow();
console.log("after");
