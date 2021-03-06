import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  selectedDish: Dish;
  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dishservice.getDish(id).then(dish => this.selectedDish = dish);
  }

  goBack(): void {
    this.location.back();
  }
}
