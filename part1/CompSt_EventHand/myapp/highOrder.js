var animals = [
    {name:'Fluffykins',species:'rabbit'},
    {name:'Caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'Harold',species:'fish'},
    {name:'Ursula',species:'cat'},
    {name:'Jimmy',species:'fish'}
]

/* METHOD 1
var fish = animals.filter(function(animFish){
    return animFish.species === 'fish'
})
*/

/* METHOD 2: 
breaking callback function into a seperate variable
*/

var af = function(animFish){
    return animFish.species === 'fish'
}

var fish = animals.filter(af);




console.log(fish)
console.log(animals[3].name)