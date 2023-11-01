

const url = 'http://localhost:3000/menu';

export const nuevoProducto = async producto => {
    try {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(producto), // aqui en el body debo enviar JSON
            headers: {
                'Content-Type': 'application/json'
            }
        })

    } catch (error) {
        console.log(error)

    }
}

export const obternerProductos = async () => {
    try {
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;

    } catch (error) {
        console.log(error)

    }
}

export const obternerProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = resultado.json();
        return producto;
    } catch (error) {

    }
}

export const editarProducto = async producto => {
    try {

        await fetch(`${url}/${producto.id}`, {
            method: 'PUT', // put actualiza por id por id
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    } catch (error) {

        console.log(error)

    }
}

export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {

    }
}