let producto= parseInt(prompt('Escoge el producto que deseas comprar: 1.Esmalte  2.Cabina  3.Torno  4.Alicate')); 
let totalCompra= 0; 
let seguirComprando = true;
let desicion;

while (seguirComprando == true) {
    if (producto === 1) {
        totalCompra = totalCompra + 200;         
    }else if (producto === 2) {
        totalCompra = totalCompra + 500; 
    }else if (producto === 3) {
        totalCompra = totalCompra + 1500;
    }else if (producto === 4) {
        totalCompra = totalCompra + 350;
    }else {
        alert ('Elige un producto valido');
        producto= parseInt(prompt('Escoge el producto que deseas comprar: 1.Esmalte  2.Cabina  3.Torno  4.Alicate'));
    }
desicion = parseInt(prompt('quieres seguir comprando? 1.Si - 2.No'));
if (desicion===1) {
    producto= parseInt(prompt('Escoge el producto que deseas comprar: 1.Esmalte  2.Cabina  3.Torno  4.Alicate'));
}else {
    seguirComprando = false;
}
}
alert (`el total de tu compra es ${totalCompra}`);