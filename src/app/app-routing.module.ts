import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
	{ path: 'home', component: PortfolioComponent },
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'search/:query', component: SearchComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}