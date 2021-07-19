const botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
    fetch("https://api-pacientes.herokuapp.com/pacientes")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((data) => {
                const dataTr = montaTr(data);
                document.querySelector("#tabela-pacientes").appendChild(dataTr);
            });

            botaoBuscar.disabled = true;
        });

    // const xhr = new XMLHttpRequest();

    // xhr.responseType = 'json';

    // xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes")

    // xhr.addEventListener('load', () => {

    //     if (xhr.status == 200) {
    //         const data = xhr.response;

    //         data.forEach(data => {
    //             const dataTr = montaTr(data);
    //             document.querySelector("#tabela-pacientes").appendChild(dataTr);
    //         })
    //     } else {
    //         console.log('Error ' + xhr.status + ': Page not found');
    //     }
    // })

    // xhr.send()

    // botaoBuscar.disabled = true;

});