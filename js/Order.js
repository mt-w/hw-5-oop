function Order() {
    this.items = [].slice.call(arguments);
    this.isPaid = false;
}

Order.prototype.getItems = function() {
    var order = [];
    this.items.forEach(function(item) {
        order.push(item.getName());
    });
    return 'Your order: ' + order.join(', ') + '.\n';
}

Order.prototype.getPayInfo = function() {
    return this.isPaid;
};

Order.prototype.payForTheOrder = function() {
    if (!this.isPaid) {
        this.isPaid = true;
        Object.freeze(this);
        console.log('Your order is paid. Thank you!');
    } else {
        console.log('Sorry, you have already paid for the order');
    }
};

Order.prototype.addPosition = function(position) {
    if (!this.isPaid) {
        this.items.push(position);
        console.log('Position successfully added!');
    } else {
        console.log('Sorry, you have already paid for the order.');
    }
};

Order.prototype.removePosition = function(position) {
    if (!this.isPaid) {
        if (this.items.indexOf(position) !== -1) {
            this.items.splice(this.items.indexOf(position), 1);
            console.log('Removed successfully');
        } else {
            console.log('There is no such item in your order');
        }
    } else {
        console.log('Sorry, you have already paid for the order.');
    }
};

Order.prototype.calculateTotalPrice = function() {
    var totalPrice = 0;
    if (!this.items.length) {
        console.log('Your order is empty! Please add something.');
    } else {
        this.items.forEach(function(item) {
            totalPrice += item.calculatePrice();
        });
    }
    console.log('Total price: ' + totalPrice + ' tu');
    return totalPrice;
};

Order.prototype.calculateTotalCalories = function() {
    var totalCalories = 0;
    if (!this.items.length) {
        console.log('Your order is empty! Please add something.');
    } else {
        this.items.forEach(function(item) {
            totalCalories += item.calculateCalories();
        });
    }
    console.log('Total calories: ' + totalCalories + ' cal');
    return totalCalories;
};