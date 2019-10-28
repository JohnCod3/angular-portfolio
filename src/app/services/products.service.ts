import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
	providedIn: 'root'
})

export class ProductsService {

	loaded: boolean = false;
	products: Product[] = [];
	productsFiltered: Product[] = [];

	constructor(
		private http: HttpClient
	) {
		this.getProducts();
	}

	private getProducts() {
		return new Promise(resolve => {
			this.http.get('https://angular-portfolio-640b0.firebaseio.com/products_idx.json')
				.subscribe((resp: Product[]) => {
					this.products = resp;
					this.loaded = true;
					resolve();
				});
		});
	}

	getProduct(id: string) {
		return this.http.get(`https://angular-portfolio-640b0.firebaseio.com/products/${id}.json`);
	}

	private productsFilter(query: string) {
		this.productsFiltered = this.products.filter(product => {
			return (
				product.title.toLowerCase().includes(query.toLowerCase()) ||
				product.category.toLowerCase().includes(query.toLowerCase())
			);
		});
	}

	searchProducts(query: string) {
		if(this.products.length === 0) {
			this.getProducts().then(() => {
				this.productsFilter(query);
			});
		} else {
			this.productsFilter(query);
		}
	}

}