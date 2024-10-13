// Функция для вычисления площади круга
function calculateCircleArea() {
    const radius = document.getElementById('radius').value;
    if (radius && radius > 0) {
        const area = Math.PI * Math.pow(radius, 2);
        document.getElementById('circle-result').textContent = `Площадь круга: ${area.toFixed(2)}`;
    } else {
        document.getElementById('circle-result').textContent = 'Введите корректное значение радиуса.';
    }
}

// Функция для решения квадратного уравнения
function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('quadratic-result').textContent = `Корни уравнения: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        document.getElementById('quadratic-result').textContent = `Корень уравнения: x = ${x.toFixed(2)}`;
    } else {
        document.getElementById('quadratic-result').textContent = 'Корней нет (дискриминант меньше 0).';
    }
}

// Функция для конвертации градусов в радианы
function convertToRadian() {
    const degrees = document.getElementById('degrees').value;
    if (degrees) {
        const radians = degrees * (Math.PI / 180);
        document.getElementById('radian-result').textContent = `${degrees} градусов = ${radians.toFixed(2)} радиан.`;
    } else {
        document.getElementById('radian-result').textContent = 'Введите корректное значение градусов.';
    }
}

// Функция для вычисления гипотенузы
function calculateHypotenuse() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    if (sideA > 0 && sideB > 0) {
        const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        document.getElementById('pythagoras-result').textContent = `Гипотенуза:
