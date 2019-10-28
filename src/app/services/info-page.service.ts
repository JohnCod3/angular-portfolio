import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
	providedIn: 'root'
})

export class InfoPageService {

	loaded: boolean = false;
	info: InfoPage = {};
	team: any[] = [];

	constructor(
		private http: HttpClient
	) {
		this.getInfo();
		this.getTeam();
	}

	private getInfo() {
		this.http.get('assets/data/data-page.json')
			.subscribe((resp: InfoPage) => {
				this.loaded = true;
				this.info = resp;
			});
	}

	private getTeam() {
		this.http.get('https://angular-portfolio-640b0.firebaseio.com/team.json')
			.subscribe((resp: any) => {
				this.team = resp;
			});
	}

}