import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthGuard } from './guards/auth.guard';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { MenuService } from './services/menu.service';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { VegCardComponent } from './components/veg-card/veg-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { NonvegpizzaComponent } from './components/nonvegpizza/nonvegpizza.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewComponent } from './components/review/review.component';
import { DisplayreviewComponent } from './components/displayreview/displayreview.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { AuthService } from './services/auth.service';
import { ReviewService } from './services/review.service';
import { OrderdComponent } from './components/orderd/orderd.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HomeComponent,
    CategoryComponent,
    VegCardComponent,
    CartComponent,
    NonvegpizzaComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent,
    DisplayreviewComponent,
    AddreviewComponent,
    OrderdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [MenuService,CartService,AuthService,ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
