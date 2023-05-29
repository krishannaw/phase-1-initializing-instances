class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this._dessert = dessert; // Private property for dessert indicated by naming convention
    }
  }
  
  // Testing the classes
  const breakfast = new Breakfast("Toast", "Coffee");
  console.log(breakfast);
  
  const lunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  console.log(lunch);
  