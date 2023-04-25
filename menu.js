const readline= require('readline-sync');

let order = [];
console.log('sandwiches choices:\nchicken: $5.25, beef: $6.25, tofu: $5.75');
chicken = 5.25
beef = 6.25
tofu = 5.75
order[0] = readline.question('sandwich of your choice: ');
console.log(order[0]);
drink = readline.question('would you like a drink? (yes/no): ');
small = 1
medium = 1.75
large = 2.25
if (drink == "yes" || drink == "Yes"){
    console.log('drink size choices:\nsmall: $1.00, medium: $1.75, large: $2.25');
    order[1] = readline.question('size of your choice: ');
} else {
}
sauces = readline.question('would you like a ketchup? (yes/no): ');
ketchup = 0.25
if (sauces == "yes" || sauces == "Yes")
    console.log('one ketchup packets coast 0.25');
order[2] = Number(readline.question('how many would you like: '))*.25;
console.log
console.log(order);
