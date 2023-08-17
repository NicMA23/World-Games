$(document).ready(function () {

    //Close btn
    $('#close').click(function () {
        $('#Submit-message').hide()
    })


    //Hide #Submit-message
    $('#Submit-message').hide()


    //Name Validation
    $.validator.addMethod('nomeCompleto', function () {
        const name = $('#nome').val()
        const nameArray = name.trim().split(' ')
        return nameArray.length > 1
    })

    $.validator.addMethod('nomeNum', function () {
        const ilegalNuns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        const name = $('#nome').val()
        const nomeArray = name.split('')
        for (const element of nomeArray) {
            if (ilegalNuns.includes(element)) {
                return false
            }
        } return true;
    })

    //Tel Validation
    $.validator.addMethod('telCompleto', function () {
        const tel = $('#tel').val()
        return tel.length === 0 || tel.length === 19
    })

    //Mask
    $('#tel').mask('(+00) 00 00000-0000')

    //Validator 
    $('form').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true,
                nomeNum: true
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true
            },
            tel: {
                telCompleto: true,
            }
        },
        messages: {
            nome: {
                required: 'Nome completo',
                nomeNum: 'Contêm números',
                nomeCompleto: 'Nome completo'
            },
            email: 'Email inválido',
            textarea: 'Sem assunto',
            tel: '11 digitos (min.)'


        },
        submitHandler: function (form) {
            $('form input').val('')
            $('form textarea').val('')
            $('#Submit-message').show()
        },
        invalidHandler: function (evento, validador) {
            $('#Submit-message').hide()
        }
    })
})