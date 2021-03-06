let car1 = {
  color: 'Red',
  company: 'Ferrari',
};

let car2 = {
  color: 'Blue',
  company: 'BMW',
};

let car3 = {
  color: 'White',
  company: 'Mercedes',
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
  );
};

Function.prototype.myBind = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};

Function.prototype.myApply = function (currentContext = {}, arg = []) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not callable");
  }
  if (!Array.isArray(arg)) {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not callable");
  }
  currentContext.fn = this;
  currentContext.fn(...arg);
};

const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
initPurchaseBmw();
purchaseCar.myApply(car2, ['₹', '50,00,000']);
purchaseCar.myCall(car3, '₹', '60,00,000');