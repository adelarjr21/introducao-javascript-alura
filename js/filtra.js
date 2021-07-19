const inputContext = document.getElementById('filtrar-tabela')

inputContext.addEventListener('input', e => {
    // console.log(e.target.value);

    const pacientes = document.querySelectorAll('.paciente')

    if (e.target.value.length > 0) {
        pacientes.forEach(paciente => {
            const tdNome = paciente.querySelector('.info-nome').textContent;

            const exp = new RegExp(e.target.value, 'i')

            if (!exp.test(tdNome)) {
                paciente.classList.add('invisivel')
            } else {
                paciente.classList.remove('invisivel')
            }
        })
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove('invisivel')
        })
    }

})