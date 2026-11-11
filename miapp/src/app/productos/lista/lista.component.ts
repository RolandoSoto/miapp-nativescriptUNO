import { Component, OnInit } from '@angular/core'
import { Application, isAndroid } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { Producto } from '../domain/producto'
import { ProductosService } from '../domain/productos.service'

@Component({
  standalone: false,
  selector: 'Lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  productos: Producto[] = []
  mensajePlataforma: string = ''

  // El servicio se inyecta por DI (instancia global, providedIn: 'root')
  constructor(private productosService: ProductosService, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.productos = this.productosService.getAll()

    // Se asigna un valor a la variable SOLO cuando se está en Android
    if (isAndroid) {
      this.mensajePlataforma = 'Estás usando Android'
    }
  }

  verDetalle(producto: Producto): void {
    this.routerExtensions.navigate(['/productos/detalle', producto.id])
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
