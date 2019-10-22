import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		PortfolioComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}