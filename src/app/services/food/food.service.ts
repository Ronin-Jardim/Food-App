import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food'; 
import { Tag } from '../../shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id: number): Food{
  return this.getAll().find(food => food.id == id)!;
}

getAllFoodsBySearchTerm(searchTerm:string):Food[] { 
return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())); 

}

  getAllTags():Tag[]{
return [
  {name: "All", count : 9},
  {name: "FastFood", count : 3},
  {name: "Pasta", count : 1},
  {name: "Easy Meal", count : 1},
  {name: "Pizza", count : 1},
  {name: "Soups", count : 1},
  {name: "Grilled", count : 1},
  {name: "Steaks", count : 1},
  {name: "Fish", count : 1},
  {name: "Sushi", count : 1},
  {name: "Burgers", count : 1 },
  

];
  }

getAllFoodsByTag(tag:string): Food[] {

  
return tag == "All" ?
     
    this.getAll() : 
    this.getAll ().filter(food => food.tags?.includes(tag));
    
}


  getAll():Food[]{
    return [
      
      {
        id:1,
        name: 'Hamburger',
        cookTime: '10-15',
        price : 5,
        favorite : false,
        origins: ['Germany', 'USA'],
        stars: 3.5,
        imageUrl: 'assets/images/foods/burgers.jpg',
        tags: ['FastFood', 'Burgers']

      },
      {
        id:2,
        name: 'Pasta',
        cookTime: '10-20',
        price : 7,
        favorite : false,
        origins: ['Italy'],
        stars: 4,
        imageUrl: 'assets/images/foods/pasta.jpg',
        tags: ['FastFood', 'Pasta']

      },
      
      {
        id:3,
        name: 'Pepperoni Pizza',
        cookTime: '10-20',
        price : 10,
        favorite : false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']

      },
      {
        id:4,
        name: 'Soup',
        cookTime: '5-10',
        price : 4,
        favorite : false,
        origins: ['China'],
        stars: 3,
        imageUrl: 'assets/images/foods/soup.jpg',
        tags: ['Easy Meal', 'Soups']

      },
      {
        id:5,
        name: 'Steak',
        cookTime: '15-20',
        price : 9,
        favorite : false,
        origins: ['USA'],
        stars: 8.5,
        imageUrl: 'assets/images/foods/steak.jpg',
        tags: ['Grilled','Steaks']

      },
      {
        id:6,
        name: 'Sushi',
        cookTime: '20-25',
        price : 12,
        favorite : false,
        origins: ['Japan'],
        stars: 5,
        imageUrl: 'assets/images/foods/sushi.jpg',
        tags: ['Fish', 'Sushi']

      },
      
    ]
  }
}
