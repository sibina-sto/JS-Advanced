class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }
        let newQuant = 0; // how to return new or added?
        for (let obj of this.listOfArticles) {
            if(obj.articleModel == articleModel && obj.articleName == articleName) {
                obj.quantity += quantity;
                newQuant = obj.quantity;
                break;
            }
        }
        if (!newQuant) {
            this.listOfArticles.push({articleModel, articleName, quantity})
            newQuant = quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest ( guestName, personality) {
        if (this.guests.some(el => el.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if (personality == 'Vip') {points = 500}
        if (personality == 'Middle') {points = 250}
        this.guests.push({guestName, points, purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(art => (art.articleName == articleName && art.articleModel == articleModel))) {
            throw new Error(`This article is not found.`);
        }
        let article = this.listOfArticles.filter(art => (art.articleName == articleName && art.articleModel == articleModel))[0];
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        if (!this.guests.some(el => el.guestName == guestName)) {
            return "This guest is not invited.";
        }
        let guest = this.guests.filter(el => el.guestName == guestName)[0];
        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        }
        guest.points -= this.possibleArticles[articleModel];
        guest.purchaseArticle += 1;
        article.quantity -= 1;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo (criteria) {
        let output = [];
        if (criteria == 'article') {
            output.push('Articles information:');
            this.listOfArticles.forEach(art => {
                output.push(`${art.articleModel} - ${art.articleName} - ${art.quantity}`)
            });
            return output.join('\n');
        } else if (criteria == 'guest') {
            output.push('Guests information:');
            this.guests.forEach(guest => {
                output.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            });
            return output.join('\n');
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
