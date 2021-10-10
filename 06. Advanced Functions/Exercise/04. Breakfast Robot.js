function solution() {
    const recipesList = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein:': 5, 'fat': 1, 'flavour': 1 }, // here is the mistake !!!!!!
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    }
 
 
    let inventory = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }
 
    function restock(product, quantity) {
        inventory[product] += quantity
        return 'Success'
    }
 
    function prepare(recipe, quantity) {
        let usedIngredients = {
            'protein': 0,
            'carbohydrate': 0,
            'fat': 0,
            'flavour': 0
        }
        const allIngr = recipesList[recipe]
        for (let ingedient in allIngr) {
            if (inventory[ingedient] < allIngr[ingedient] * quantity) {
                return `Error: not enough ${ingedient} in stock`
            } else {
                usedIngredients[ingedient] += allIngr[ingedient] * quantity
            }
        }
    
 
        for (let ingr in usedIngredients) {
            inventory[ingr] -= usedIngredients[ingr]
        }
 
 
        return 'Success'
    }
 
    function report() {
    return `protein=${inventory['protein']} carbohydrate=${inventory['carbohydrate']} fat=${inventory['fat']} flavour=${inventory['flavour']}`
    }
 
    function manager(string) {
        let data = string.split(' ')
        if (data.includes('report')) {
            return report()
        } else if (data.includes('restock')) {
            return restock(data[1], Number(data[2]))
        } else if (data.includes('prepare')) {
            return prepare(data[1], Number(data[2]))
        }
 
 
    }
 
    return manager
}
