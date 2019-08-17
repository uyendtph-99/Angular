import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Category } from '../Category';

@Component({
  selector: 'app-manager-category',
  templateUrl: './manager-category.component.html',
  styleUrls: ['./manager-category.component.css']
})
export class ManagerCategoryComponent implements OnInit {
  categories : Category[];
  public popoverTitle: string = 'Delete Product';
  public popoverMessage: string = 'Bạn có chắc chắn muốn xóa danh mục này?';
  public  confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCategoryies();
  }
  getCategoryies(){
    this.productService.getCates().subscribe(cate => {
      this.categories = cate
    })
  }
  removeCategory(cate){
    this.productService.deleteCategory(cate.id).subscribe( data =>{
      //console.log(data);
      this.categories = this.categories.filter(item => item.id != data.id)
    })
  }
}
