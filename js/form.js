const botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.querySelector("#form-adiciona");

  const paciente = obtemPacienteDoFormulario(form);

  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    const mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = '';

    erros.forEach((erro) => {
      const li = document.createElement("li");
      li.textContent = erro;

      mensagemErro.appendChild(li);
    });

    return;
  }

  const pacienteTr = montaTr(paciente);

  // Adiciona paciente na tabela
  document.querySelector("#tabela-pacientes").appendChild(pacienteTr);

  form.reset();
  document.querySelector('#mensagem-erro').innerHTML = '';
});

function obtemPacienteDoFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  const erros = [];

  if (paciente.nome.length == 0) {
    erros.push('NOME INVALIDO')
  }

  if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
    erros.push("PESO INVALIDO");
  }

  if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
    erros.push("ALTURA INVALIDA");
  }

  if (paciente.gordura.length == 0) {
    erros.push('GORDURA INVALIDA')
  }

  return erros;
}