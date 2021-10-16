class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(array) {
        array.forEach(product => {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.budgetMoney -= productTotalPrice;
                    this.stockProducts[productName] = productQuantity;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.budgetMoney -= productTotalPrice;
                    this.stockProducts[productName] += productQuantity;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: [],
                price: 0
            };
            neededProducts.forEach(product => {
                let [currentProduct, currentPrice] = product.split(' ');
                currentPrice = Number(currentPrice);
                this.menu[meal].products.push({ [currentProduct]: currentPrice });
                this.menu[meal].price = Number(price);
            });

            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let outputMenu = '';

            for (const [key, value] of Object.entries(this.menu)) {
                outputMenu += `${key} - $ ${value.price}\n`;
            }

            return outputMenu.trim();
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let neededProducts = this.menu[meal].products;
            let neededQuantity = neededProducts.find(np => this.stockProducts.hasOwnProperty(Object.keys(np)));
            let checkForZeroQuantity = neededProducts.find(np => Number(this.stockProducts[Object.keys(np)]) === 0);

            if (!neededQuantity || checkForZeroQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                this.budgetMoney -= this.menu[meal].price;
                neededProducts.forEach(np => {
                    this.stockProducts[Object.keys(np)] -= Number(Object.values(np));
                });
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('musaka', ['kartofi', 'qica'], 5));
// console.log(kitchen.addToMenu('musaka', ['kartofi', 'qica'], 5));
// console.log(kitchen.addToMenu('kebap', ['kartofi', 'qica'], 5));
// console.log(kitchen.addToMenu('shishkebap', ['kartofi', 'qica'], 5));
// console.log(kitchen.makeTheOrder('makaroni'));
