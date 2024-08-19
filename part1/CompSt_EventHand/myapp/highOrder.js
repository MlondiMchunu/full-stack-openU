var animals = [
    {name:'Fluffykins',species:'rabbit'},
    {name:'Caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'Harold',species:'fish'},
    {name:'Ursula',species:'cat'},
    {name:'Jimmy',species:'fish'}
]

var fish = animals.filter(function(animFish){
    return animFish.species === 'Fish'
})