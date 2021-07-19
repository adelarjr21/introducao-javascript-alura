const tbPacientes = document.getElementById('tabela-pacientes')

tbPacientes.addEventListener('dblclick', e => {
    const nome = e.target.parentNode.children[0].textContent

    const resultado = window.confirm(`Você realmente deseja excluir o paciente ${nome}?`)

    if (resultado) {
        e.target.parentNode.classList.add('fadeOut');

        setTimeout(() => {
            e.target.parentNode.remove();
        }, 500)
    }
})