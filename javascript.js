const cars = [
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

let updating = false;
let updatingId = -1;

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
                    <button onclick="enableUpdateCar(${element.id})" class="btn btn-primary">
                        Actualizar
                    </button>
                </td>
            </tr>`;
    });
    container.innerHTML = car;
}

function deleteCar(id) {
    const index = cars.findIndex((element) => element.id === id );
    cars.splice(index, 1);

    printCars();
    
}

function enableUpdateCar (id){
    updatingId = id;
    const car = cars.find((element) => element.id === id );
   document.getElementById('brand').value = car.brand;
   document.getElementById('model').value = car.model;
   document.getElementById('color').value = car.color;
   document.getElementById('year').value = car.year;
   document.getElementById('price').value = car.price;

   updating = true;
    const button = document.getElementById('save');
    button.textContent = 'Actualizar';
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');
}

function addCar() {
    if(updating){
        updateCar();
    } else {
    let id = 1;
    if(cars.length > 0){
    const id = cars[cars.length-1].id + 1;
    }

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
}

function updateCar(){
    const car = cars.find((car) => car.id === updatingId);
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    car.brand = brand;
    car.model = model;
    car.color = color;
    car.year = year;
    car.price = price;
    printCars();
    document.getElementById('form-car').reset();
    updating = false;
    updatingId = -1;
    const button = document.getElementById('save');
    button.textContent = 'Submit';
    button.classList.remove('btn-primary');
    button.classList.add('btn-secondary');    
}

printCars();
