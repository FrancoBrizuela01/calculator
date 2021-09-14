const buttonNumber = document.getElementsByName('number'); /*capturo todos los botones number*/
const buttonOperations = document.getElementsByName('operations');
const buttonIgual = document.getElementsByName('igual')[0];/*pongo 0 para q no me devuelva un arreglo sino q me de el boton*/
const buttonDelete = document.getElementsByName('delete')[0];
var result = document.getElementById('result'); /*var pq el resultado va a ir cambiando*/

var opActual = '';
var opAnterior = '';
var operation = undefined;

				/*CAPTURA DE LOS EVENTOS*/

buttonNumber.forEach(function(boton){ //recorro el arreglo y llamo a una funcion que le doy como parametro(boton)
	boton.addEventListener('click', function(){ // cada vez q yo haga click llamo a una funcion
		agregarNumero(boton.innerText);
	})
});

buttonOperations.forEach(function(boton){
	boton.addEventListener('click', function(){
		selectOperations(boton.innerText);
		agregarOperacion(boton.innerText);
	})
});

buttonIgual.addEventListener('click', function(){
	calcular();
	actualizarDisplay();
});

buttonDelete.addEventListener('click', function(){
	clear();
	actualizarDisplay();
});


				/*IMPLEMENTAR METODOS*/

function selectOperations(op){
	if(opActual === '') return; // significa q si no hay ningun numero me salga
	if(opActual !== ''){
		calcular();
	}

	operation = op.toString();
	opAnterior = opActual;
	opActual = '';
}

function calcular(){
	var calculo;
	const anterior = parseFloat(opAnterior);
	const actual = parseFloat(opActual);
	if(isNaN(anterior) || isNaN(actual)) return; //pregunto si son numericos esos valores
  	
  	switch(operation){  //para seleccionar la operacion
  		case '+':      // en caso de que sea suma
  			calculo = anterior + actual;
  			break;
  		case '-':
  			calculo = anterior - actual;
  			break;
  		case 'x':
  			calculo = anterior * actual;
  			break;
  		case '/':
  			calculo = anterior / actual;
  			break;
  		default:  //si llegamos aca es pq no se tubo ningun operador
  			return;
  	} 
  	opActual = calculo;
  	operation = undefined;
  	opAnterior = ''; 
}


function agregarNumero(num){
	opActual = opActual.toString() + num.toString(); //tostring para poder capturar el valor y pasarlo a texto
	actualizarDisplay();
}

function agregarOperacion(ope){
	opActual = operation.toString();
	actualizarDisplay();
	opActual = '';	
}

function clear(){
	opActual = '';
	opAnterior = '';
	operation = undefined;
}

function actualizarDisplay(){
	result.value = opActual;
}

clear();

