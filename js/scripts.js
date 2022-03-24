 let pokemonList = [
{
    name: 'Pikachu',
    height: 0.4,
    type : ['electric']
},

{
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison']
},

{
    name: 'Pidgey',
    height: 0.3,
    type: ['flying', 'normal']
},

{
    name: 'Charizard',
    height: 5.07,
    type: ['flame']
}

 ]

 for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 5) {
    document.write("Name: " + pokemonList[i].name + ", Type: " + pokemonList[i].type[0] + ',  Height: ' + pokemonList[i].height  + '(WOW! this Pokemon is big!) </br>')
    }

    
}