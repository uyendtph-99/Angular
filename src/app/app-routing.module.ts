import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'product', component: ProductComponent
  },
  {
    path:'manager', component: ManagerComponent
  },
  {
    path:'product/detail/:id', component: ProductDetailComponent
  },
  {
    path:'product/add', component: AddProductComponent
  },
  {
    path:'product/edit/:id', component: ProductEditComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
