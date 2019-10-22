import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		FooterComponent,
		HeaderComponent,
		ItemComponent,
		PortfolioComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}