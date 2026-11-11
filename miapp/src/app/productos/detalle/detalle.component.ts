import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { Producto } from '../domain/producto'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  producto: Producto | undefined

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.producto = this.productosService.getById(id)
  }

  volver(): void {
    this.routerExtensions.back()
  }
}
