import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManagerCategoryComponent } from './manager-category/manager-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    AddProductComponent,
    HomeComponent,
    NotfoundComponent,
    ManagerComponent,
    ProductEditComponent,
    ContactComponent,
    AboutComponent,
    ManagerCategoryComponent,
    AddCategoryComponent,
    CateEditComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule, 
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success' // set defaults here
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
