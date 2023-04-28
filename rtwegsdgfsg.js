const readline= require('readline-sync');

let order = [];
let total = [];

//step 1
console.log('sandwiches choices:\nchicken: $5.25, beef: $6.25, tofu: $5.75');
order[0] = readline.question('sandwich of your choice: ');
if (order[0] == 'beef' || order[0] == 'Beef'){
    total[0] = 6.25;
} else if (order[0] == 'chicken' || order[0] == 'Chicken'){
    total[0] = 5.25;
} else if (order[0] == 'tofu' || order[0] == 'Tofu'){
    total[0] = 5.75;
} else {
    console.log("invalid choice");
    order[0] = readline.question('sandwich of your choice: ');
}
console.log(order);
