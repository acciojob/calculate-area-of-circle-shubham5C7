 function calculateArea() {
       let radius = prompt("Enter the radius of the circle:");
	 let r =Number(radius);
	 	return {radius: r ,area: Math.PI * r * r};

 }
let result = calculateArea();
alert(`The area of the circle with radius ${result.radius} is ${result.area.toFixed(2)}`)