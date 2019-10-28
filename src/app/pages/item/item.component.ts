import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from 'src/app/interfaces/product.interface';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

	id: string;
	product: ProductDescription;

	constructor(
		private route: ActivatedRoute,
		public _products: ProductsService
	) {}

	ngOnInit() {
		this.route.params
			.subscribe(params => {
				this._products.getProduct(params.id)
					.subscribe((product: ProductDescription) => {
						this.id = params.id;
						this.product = product;
					});
			});
	}

}