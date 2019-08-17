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
import { ManagerCategoryComponent } from './manager-category/manager-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


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
    path:'manager', component: ManagerCategoryComponent
  },
  {
    path:'category/:cateId/product/detail/:id', component: ProductDetailComponent
  },
  {
    path:'category/:id/product/add', component: AddProductComponent
  },
  {
    path:'category/add', component: AddCategoryComponent
  },
  {
    path:'category/:cateId/product/edit/:id', component: ProductEditComponent
  },
  {
    path:'cate/edit/:id', component: CateEditComponent
  },
  { 
    path: 'category/:cateId', component: ManagerComponent
  },
  { 
    path: 'category/:cateId/products', component: ProductComponent
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
