import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit  {
@Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'Center';

tags?: Tag[] ;

constructor (private foodService: FoodService) {

}

ngOnInit () : void {
  if (!this.foodPageTags)
this.tags = this.foodService.getAllTags();
}
}
