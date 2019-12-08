import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product.component';
import { MovieListComponent } from './movies/movie.component';
import { TvListComponent } from './tvShows/tvShow.component';
import { StarComponent } from './shared/star.component';
import { RouterModule } from '@angular/router';
import {WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MovieListComponent,
    TvListComponent,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'movies', component: MovieListComponent},
      {path: 'tv shows', component: TvListComponent},
      {path: "welcome", component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
