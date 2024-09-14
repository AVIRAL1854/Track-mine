// const dataTable = [
//   ["Date", "Won/Loss"],
//   [new Date(2024, 3, 13), 37032],
//   [new Date(2024, 3, 14), 2],
//   // ... more data rows
// ];

const randomNumber=()=>{
  let min=0;
  let max=24
 return  Math.floor(Math.random() * (max - min + 1)) + min;
}

const ValueGenerator = () => {
  let val = [["Date", "Won/loss"]];
  for (let i = 0; i < 12; i++) {
    if (i % 2 != 0 && i != 1) {
      for (let j = 1; j <= 31; j++) {
        val.push([new Date(2024, i, j), randomNumber()]);
      }
    } else if (i == 1) {
      for (let j = 1; j < 28; j++) {
        val.push([new Date(2024, i, j), randomNumber()]);
      }
    } else {
      for (let j = 1; j <= 30; j++) {
        val.push([new Date(2024, i, j), randomNumber()]);
      }
    }
  }

  return val;
};

export default ValueGenerator;
