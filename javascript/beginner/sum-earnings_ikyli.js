function sumEarnings(numbers) {
  var total = 0;
  loop = 0;
  console.log(numbers);
  while (loop < numbers.length) {
    if (total >= 0) {
      total = total + numbers[loop];
      console.log("sum is " + total);
      loop += 1;
    } else {
      console.log("Starts from begining");
      total = 0;
      if (numbers[loop] != null) {
        total = total + numbers[loop];
        console.log("sum is " + total);
        loop += 1;
      }
    }
  }
}

var array = Array(3, 2, 10, 6, -17, -12, 20, 2);
sumEarnings(array);
