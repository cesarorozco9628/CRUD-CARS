let cars = [
    {   
        id: 1,
        brand: 'Chevrolet',
        model: 'Silverado',
        color: 'Azul',
        year: 2015,
        price: '310000'
    },
    {   
        id: 2,
        brand: 'Ford',
        model: 'Munstang',
        color: 'Negro',
        year: 2013,
        price: '570000'
    },
    {   
        id: 3,
        brand: 'Mazda',
        model: 'CX-3',
        color: 'Rojo',
        year: 2018,
        price: '270000'
    },
    {   
        id: 4,
        brand: 'Nissan',
        model: 'Sentra',
        color: 'Blanco',
        year: 2017,
        price: '279000'
    }
];

function printCars() {
    const container = document.getElementById('container-cars');
    let car = '';
    cars.forEach((element) => {
     car += `<tr>
                <td>${element.brand}</td>
                <td>${element.model}</td>
                <td>${element.color}</td>
                <td>${element.year}</td>
                <td>${element.price}</td>
                <td>
                     <button onclick="deleteCar(${element.id})" class="btn btn-secondary">
                        Eliminar
                    </button>
                </td>
            </tr>`;
    });
    container.innerHTML = car;
}

function deleteCar(id) {
    const index = cars.findIndex((element) => element.id == id );
    cars.splice(index, 1);

    printCars();
    
}

function addCars() {
    const id = cars[cars.length-1].id + 1;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;


    const newCar = {
        id,
        brand,
        model,
        color,
        year,
        price

    }
    cars.push(newCar);
    printCars();
    document.getElementById('form-car').reset();
}


printCars();
