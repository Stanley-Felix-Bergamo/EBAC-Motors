$(document).ready(function () {
    menuAcoes();
    aplicandoMascara();
    validandoFormulario();
    acaoDoFormulario();
});


function menuAcoes() {

    $('#carousel-imagens').slick({ autoplay: true, });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });
}

function aplicandoMascara() {
    $('#telefone').mask('(00) 0000-0000');
}

function validandoFormulario() {

    $('form').validate({

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            },
        },

        messages: {
            nome: 'Por favor, informe o seu nome',
            email: 'Por favor, informe o seu E-mail',
            telefone: 'Por favor,informe o seu telefone',
            mensagem: 'Por favor, informe sua mensagem',
            veiculoDeInteresse: 'Por favor, informe o carro interessado'
        },
 

        submitHandler: function (form) {
            console.log(form);
        },

        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos`);
        },

    });

}

function acaoDoFormulario() {

    $('.lista-veiculos button').click(function () {

        //Capitura o nome do veiculo, e insere no formulario
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculoDeInteresse').val(nomeVeiculo);

        // Ao clicar no botão,será escrolado para baixo        
        const destino = $('#contato');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
}
