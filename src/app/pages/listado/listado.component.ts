import { Component, ViewChild } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})


export class ListadoComponent {

  productList: any[] = [];
  filteredList: any[] = [];

  constructor (private servicio:ServiceComponent){}

  ngOnInit():void {
    this.servicio.getProducts().subscribe((data:any) => {
      console.log(data);
      this.productList=[...data];
      this.filteredList=[...this.productList];
    })
  }

  deleteProduct(productId: any):void {
    this.servicio.deleteProductById(productId).subscribe(() => {
      this.productList = this.productList.filter(product => product.id!== productId);
      this.filteredList=[...this.productList];
    })
  }

  applyFilter(filterValue: any) {
    this.filteredList = this.productList.filter(item => {
      return (filterValue.brand.length==0 || item.marca == filterValue.brand) 
      && (filterValue.text.length==0 || item.color.toLowerCase().includes(filterValue.text.toLowerCase()) || item.tipo.toLowerCase().includes(filterValue.text.toLowerCase())) 
    });
  }

}
