class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(arr) {
        for (const str of arr) {
            let productInfo = str.split(' ');
            let productName = productInfo[0];
            let productQuantity = Number(productInfo[1]);
            let productTotalPrice = Number(productInfo[2]);

            if (productTotalPrice > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            } else {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n').trim();
    }
    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let mealObject = {
            products: neededProducts,
            price: Number(price)
        }
        this.menu[meal] = mealObject;

        let mealsCount = Object.keys(this.menu).length;
        if (mealsCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`
    }
    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...'
        }
        let result = [];

        for (const key in this.menu) {
            let str = `${key} - $ ${this.menu[key].price}`;
            result.push(str);
        }
        return result.join('\n').trim();
    }
    makeTheOrder(orderedMeal) {
        if (!this.menu.hasOwnProperty(orderedMeal)) {
            return `There is not ${orderedMeal} yet in our menu, do you want to order something else?`
        }
        let neededProducts = this.menu[orderedMeal].products;

        for (const product of neededProducts) {
            let productName = product.split(' ')[0];
            if (!this.stockProducts.hasOwnProperty(productName)) {
                return `For the time being, we cannot complete your order (${orderedMeal}), we are very sorry...`
            }
        }

        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');
            this.stockProducts[productName] -= Number(productQuantity);
        }

        this.budgetMoney += this.menu[orderedMeal].price;

        return `Your order (${orderedMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[orderedMeal].price}.`;
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.history.join('\n'))

// //let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// //let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
