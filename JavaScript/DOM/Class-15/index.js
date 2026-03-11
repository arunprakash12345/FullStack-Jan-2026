const toys = {
  toy1: { name: "Teddy Bear", color: "Brown" },
  toy2: { name: "Race Car", color: "Red" },
  toy3: { name: "Doll", color: "Pink" },
};

console.log(toys);

// req -> json strings -> send over network
const toysObjToJson = JSON.stringify(toys);

console.log("JSON Packed Strings : ", toysObjToJson);

// res -> json strings -> js obj

const toysJsonToObj = JSON.parse(toysObjToJson);

console.log("JSON unpacked obj : ", toysJsonToObj);
