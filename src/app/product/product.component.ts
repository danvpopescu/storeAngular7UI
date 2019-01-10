import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Robot } from "../model/robot.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	robots: Robot[] = [];
	constructor(private ps: ProductService) { }

	ngOnInit() {
		this.ps.getProducts().subscribe((data)=> {
			this.robots = data;
			console.log(this.robots);
		})	;
	}

}
