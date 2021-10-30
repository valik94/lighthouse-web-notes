function dice(number){
  let result=[];
  for (let i =0; i <= number-1; i++){
    //result= result.append(number[i].getRandomInt(6));
   result.push(Math.floor(Math.random()* 6) + 1);
  }
  let stringResult = result.join(", ");
  console.log(stringResult);
  return console.log("Rolled " +number+ " dice: "+result);
}

dice(3);