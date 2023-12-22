var Capa = function(){


    var init = function(){
        $(document).ready(function() {
            $('#meuBotao').on('click', function() {
                abrirPageInicial();
            });
        });
    }

    var abrirPageInicial = function(){
        window.location.href = 'painel.html';
    }

    return{
        init: function(){
            init();
        }
    }
}();