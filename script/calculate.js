let count = 0;

function getInputValueById(id) {
    const input = document.getElementById(id)
    return parseFloat(input.value)
}

function areaCalculation(area) {
    document.getElementById('calculation-list').appendChild(area)
}

//triangle--------

function triangleArea() {
    const base = getInputValueById('triangle-base');

    const height = getInputValueById('triangle-height');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Triangle: ${0.5 * base * height} cm<sup>2</sup></p>`

    areaCalculation(area)
}

//rectangle--------

function rectangleArea() {
    const width = getInputValueById('rectangle-width');

    const length = getInputValueById('rectangle-length');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Rectangle: ${width * length} cm<sup>2</sup></p>`

    areaCalculation(area)
}

//parallelogram--------

function parallelogramArea() {
    const base = getInputValueById('parallelogram-base');

    const height = getInputValueById('parallelogram-height');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Parallelogram: ${base * height} cm<sup>2</sup></p>`

    areaCalculation(area)
}

//rhombus--------------

function rhombusArea() {
    const d1 = getInputValueById('rhombus-d1');

    const d2 = getInputValueById('rhombus-d2');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Rhombus: ${0.5 * d1 * d2} cm<sup>2</sup></p>`

    areaCalculation(area)
}

//pentagon-----------

function pentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');

    const apothem = getInputValueById('pentagon-apothem');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Pentagon: ${0.5 * perimeter * apothem} cm<sup>2</sup></p>`

    areaCalculation(area)
}

//ellipse------------

function ellipseArea() {
    const axisA = getInputValueById('ellipse-axisA');

    const axisB = getInputValueById('ellipse-axisB');

    count += 1;

    let area = document.createElement('li');
    area.innerHTML = `<p>${count}. Ellipse: ${(Math.PI * axisA * axisB).toFixed(3)} cm<sup>2</sup></p>`

    areaCalculation(area)
}