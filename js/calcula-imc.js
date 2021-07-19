const pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
	const peso = paciente.querySelector('.info-peso').textContent,
		altura = paciente.querySelector('.info-altura').textContent,
		campoImc = paciente.querySelector('.info-imc');

		let pesoEhValido = validaPeso(peso),
			alturaEhValida = validaAltura(altura);

		if(!pesoEhValido){
			campoImc.textContent = 'Peso Invalido!'
			paciente.classList.add('paciente-invalido')
		}

		if(!alturaEhValida) {
			campoImc.textContent = 'Peso Invalido!'
			paciente.classList.add('paciente-invalido')
		}

		if(pesoEhValido && alturaEhValida) {
			campoImc.textContent = calculaImc(peso, altura)
		} else {
			console.log('Dados inválidos!');
		}
})

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true
	} else {
		return false
	}
}

function validaAltura(altura) {
	if(altura >= 0 && altura <= 3) {
		return true
	} else {
		return false
	}
}

function calculaImc(peso, altura) {
	let imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}