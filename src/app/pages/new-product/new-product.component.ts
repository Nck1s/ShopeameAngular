import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceComponent } from 'src/app/service/service.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})


export class NewProductComponent {
  productForm: FormGroup;

  constructor(private service: ServiceComponent, private router: Router, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: null,
      tipo: '', 
      precio: null, 
      color: '', 
      marca: '', 
      imagen: ''
    });
  }

  submitForm(){
    this.service.postProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(["/listado"]);
    });
  }
}
