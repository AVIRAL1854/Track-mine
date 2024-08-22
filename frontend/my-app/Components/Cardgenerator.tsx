const CardValueGenerator = () => {
  let day = 1;
  let month = 1;
  let year = 2024;
  let obj = {data:[
        {
            DATE:"",
            inputText:""
        }
  ]};

  for (let i = 0; i < 31; i++) {
    day = i;
    // month=1;
    // obj.push("i-month-year":);

    // obj[`${day}-${month}-${year}`] = `this is the text for day ${i} january-2024`;
    obj.data.push({
      DATE: `${day}-${month}-${year}`,
      inputText: `this is the text for day ${i} january-2024`,
    });

  }

  return obj;
};


export default CardValueGenerator;