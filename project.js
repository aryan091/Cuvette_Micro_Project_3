const foodDetails = require('./food.json');
    
//  list all the food items

function listAllFoodItems(array)
{
    console.log(array);
}

//  list all the food items with category vegetables

function listItemVegetables(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Vegetable';
})
}

//  list all the food items with category fruit

function listItemFruits(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Fruit';
})
}

//  list all the food items with category protien

function listItemProtein(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Protein';
})
}

//  list all the food items with category nuts

function listItemNuts(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Nuts';
})
}

//  list all the food items with category grains

function listItemGrain(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Grain';
})
}

//  list all the food items with category dairy

function listItemDairy(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Dairy';
})
}

//  list all the food items with calorie above 100

function listItemCaloriesAbove100(foodData)
{
  return  foodData.filter((element) => {
    return element.calorie > 100;
})
}

//  list all the food items with calorie below 100

function listItemCaloriesBelow100(foodData)
{
  return  foodData.filter((element) => {
    return element.calorie < 100;
})
}

//  list all the food items with highest protien content to lowest

function listItemNuts(foodData)
{
  return  foodData.filter((element) => {
    return element.category === 'Nuts';
})
}

//  list all the food items with highest protien content to lowest

function listAccordingProtein(foodData)
{
  return foodData.sort((a, b) => b.protiens - a.protiens);
}

//  list all the food items with lowest cab content to highest

function listAccordingCarbs(foodData)
{
  return foodData.sort((a, b) => a.cab - b.cab);
}

listAllFoodItems(foodDetails)

let vegArray = listItemVegetables(foodDetails)
console.log(vegArray)

let fruitArray = listItemFruits(foodDetails)
console.log(fruitArray)

let proteinArray = listItemProtein(foodDetails)
console.log(proteinArray)

let nutsArray = listItemNuts(foodDetails)
console.log(nutsArray)

let grainArray = listItemGrain(foodDetails)
console.log(grainArray)

let dairyArray = listItemDairy(foodDetails)
console.log(dairyArray)

let calorieAboveHundred = listItemCaloriesAbove100(foodDetails)
console.log(calorieAboveHundred)

let calorieBelowHundred = listItemCaloriesBelow100(foodDetails)
console.log(calorieBelowHundred)

let sortedByProtein = listAccordingProtein(foodDetails)
console.log(sortedByProtein)

let sortedByCarbs = listAccordingCarbs(foodDetails)
console.log(sortedByCarbs)