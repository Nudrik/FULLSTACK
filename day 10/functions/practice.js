const cars = [
    { name: "Toyota Camry", type: "sedan", price: 1500 },
    { name: "Honda Accord", type: "sedan", price: 1200 },
    { name: "Ford F-150", type: "truck", price: 2000 },
    { name: "Chevrolet Silverado", type: "truck", price: 1800 },
    { name: "Tesla Model S", type: "electric", price: 3000 },
    { name: "Nissan Leaf", type: "electric", price: 900 },
    { name: "Tesla Model 3", type: "electric", price: 35000 },
    { name: "Chevrolet Bolt EV", type: "electric", price: 27000 },
    { name: "BMW i3", type: "electric", price: 44000 },
    { name: "Hyundai Kona Electric", type: "electric", price: 34000 },
    { name: "Ford Mustang Mach-E", type: "electric", price: 42000 },
    { name: "Audi e-tron", type: "electric", price: 67000 },
    { name: "Porsche Taycan", type: "electric", price: 90000 },
    { name: "Jaguar I-PACE", type: "electric", price: 71000 },
    { name: "Mercedes-Benz EQC", type: "electric", price: 68000 },
    { name: "Hyundai Elantra", type: "sedan", price: 1800 },
    { name: "Toyota Corolla", type: "sedan", price: 1700 },
    { name: "Honda Civic", type: "sedan", price: 1600 },
    { name: "BMW 3 Series", type: "sedan", price: 3500 },
    { name: "Audi A4", type: "sedan", price: 4000 },
    { name: "Mercedes-Benz C-Class", type: "sedan", price: 4200 },
    { name: "Tesla Model X", type: "electric", price: 90000 },
    { name: "Tesla Model Y", type: "electric", price: 50000 },
    { name: "Ford Explorer", type: "SUV", price: 3000 },
    { name: "Chevrolet Tahoe", type: "SUV", price: 4500 },
    { name: "Honda CR-V", type: "SUV", price: 2800 },
    { name: "Toyota RAV4", type: "SUV", price: 2900 },
    { name: "Jeep Wrangler", type: "SUV", price: 3200 },
    { name: "Nissan Rogue", type: "SUV", price: 2700 },
    { name: "Subaru Outback", type: "SUV", price: 3100 },
    { name: "Toyota Highlander", type: "SUV", price: 3600 },
    { name: "Lexus RX", type: "SUV", price: 5000 },
    { name: "BMW X5", type: "SUV", price: 6000 },
    { name: "Mercedes-Benz GLE", type: "SUV", price: 6200 },
    { name: "Range Rover Evoque", type: "SUV", price: 6800 },
    { name: "Porsche Cayenne", type: "SUV", price: 7500 },
    { name: "Lamborghini Urus", type: "SUV", price: 200000 },
    { name: "Toyota Prius", type: "hybrid", price: 2500 },
    { name: "Honda Insight", type: "hybrid", price: 2400 },
    { name: "Hyundai Ioniq", type: "hybrid", price: 2600 },
    { name: "Kia Niro", type: "hybrid", price: 2700 },
    { name: "Ford Escape Hybrid", type: "hybrid", price: 2800 },
    { name: "Lexus UX Hybrid", type: "hybrid", price: 3100 },
    { name: "Volvo XC90 Hybrid", type: "hybrid", price: 7000 },
    { name: "BMW 7 Series", type: "luxury", price: 12000 },
    { name: "Audi A8", type: "luxury", price: 12500 },
    { name: "Mercedes-Benz S-Class", type: "luxury", price: 13000 },
    { name: "Rolls-Royce Ghost", type: "luxury", price: 350000 },
    { name: "Bentley Continental GT", type: "luxury", price: 250000 },
    { name: "Bugatti Chiron", type: "hypercar", price: 3000000 },
    { name: "Ferrari SF90", type: "supercar", price: 500000 },
    { name: "Lamborghini Aventador", type: "supercar", price: 600000 },
    { name: "McLaren P1", type: "supercar", price: 1200000 },
    { name: "Ford GT", type: "supercar", price: 500000 },
    { name: "Chevrolet Corvette Z06", type: "sports", price: 80000 },
    { name: "Porsche 911", type: "sports", price: 120000 },
    { name: "Nissan GT-R", type: "sports", price: 150000 },
];

function filterCarsByType(type) {
    return cars.filter(car => car.type.toLowerCase() === type.toLowerCase() && car.price > 1000);
}

document.getElementById("filterButton").addEventListener("click", function() {
    const carType = document.getElementById("carType").value;
    const filteredCars = filterCarsByType(carType);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (filteredCars.length > 0) {
        filteredCars.forEach(car => {
            const carElement = document.createElement("div");
            carElement.textContent = `${car.name} - $${car.price}`;
            resultDiv.appendChild(carElement);
        });
    } else {
        resultDiv.textContent = "No cars found.";
    }
});
