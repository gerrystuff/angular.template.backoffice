import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../../services/product.service';
import { AddProducto } from './add/add-producto.component';
import { EditProducto } from './edit/edit-producto.component';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']


})
export class ProductoComponent implements OnInit {

  // estaciones:Estacion[] = [];
  columns: string[] = [
    'status',
    'title'
  ]
  productos: any[] = []
  title = "Productos";
  selected!: Producto;
  addComponent = AddProducto;
  editComponent = EditProducto;


  constructor(
    private __productoService: ProductoService,

  ) { }


  ngOnInit(): void {
    this.cargar_productos();
  }

  private cargar_productos() {
    this.__productoService.list()
      .subscribe((res: any) => {
        console.log(res);

        !res.error ?
          this.productos = res.data :
          this.productos = []
      })

  }

  setSelected = (producto: Producto) => this.selected = producto;
  getSelected = () => this.selected;
  getService = () => this.__productoService;
  getTitle = () => this.__productoService.title;




  /** Styles */

  getStatusClass = (status: boolean) => status ? 'glowing-circle-active' : 'glowing-circle-down';

  getSelectedClass(producto: Producto) {

    if (this.selected == undefined) {
      return '';
    }
    if (producto.title === this.selected.title) {
      return 'activeClass';
    }

    return '';
  }


}
