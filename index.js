// Write your solution here 

const days = ["mon", "tue" ,"wed", "thu", "Fri"];

days.splice(5,5,"Sat","Sun");

console.log(days);

const menu = [
    "Jalapeno poppers",
    "Cheeseburger",
    "Fish and chips",
    "Onion Rings",
];

const newMenu = [
    ... menu.slice(0,1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
];

console.log(menu);

console.log(newMenu);
