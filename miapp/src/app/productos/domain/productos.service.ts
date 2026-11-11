import { Injectable } from '@angular/core'
import { Producto } from './producto'

// providedIn: 'root' => servicio global, inyectado a nivel de la aplicación
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Camiseta', precio: 15, descripcion: 'Camiseta de algodón 100%.' },
    { id: 2, nombre: 'Zapatos', precio: 45, descripcion: 'Zapatos deportivos livianos.' },
    { id: 3, nombre: 'Gorra', precio: 10, descripcion: 'Gorra ajustable.' },
    { id: 4, nombre: 'Mochila', precio: 30, descripcion: 'Mochila resistente al agua.' },
  ]

  getAll(): Producto[] {
    return this.productos
  }

  getById(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id)
  }
}
