import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { DisplayComponent } from './components/display/display.component';
import { DisplayreviewComponent } from './components/displayreview/displayreview.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NonvegpizzaComponent } from './components/nonvegpizza/nonvegpizza.component';
import { OrderdComponent } from './components/orderd/orderd.component';
import { RegisterComponent } from './components/register/register.component';
import { VegCardComponent } from './components/veg-card/veg-card.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"menu",component:DisplayComponent,canActivate : [AuthGuard]},
  {path:"home",component:HomeComponent},
  {path:"category",component:CategoryComponent},
  {path:"vegpizza",component:VegCardComponent},
  {path:"cart",component:CartComponent},
  {path:"nonvegpizza",component:NonvegpizzaComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"displayreviews",component:DisplayreviewComponent},
  {path:"addreview",component:AddreviewComponent},
  {path:"oderd",component:OrderdComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
