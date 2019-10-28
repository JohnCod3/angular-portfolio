import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		FooterComponent,
		HeaderComponent,
		ItemComponent,
		PortfolioComponent,
		SearchComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}