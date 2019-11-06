    /*Função logar*/
    function logar(){

        var login_entrar = login.value;
        var senha_entrar = senha.value;

        if(login_entrar == "italo" && senha_entrar == "123"){
            alert('Olá Italo! :)');
        }
        else{
            alert('Usuario invalido!');
            login.innerHTML = "";
            senha.innerHTML = "";
        }
    }

    function cadastrar()
        {
        /*Função cadastrar*/
        if(nome.value == '' || email.value == ''  ||cad_login.value == '' ||cad_senha.value == '' ||confirmacao.value == '' ){
            alert('Um dos campos está vazio! :(');
            alert('Verifique se tudo esta preenchido corretamente e tente novamente!');
        }
            else if(cad_senha.value == confirmacao.value){
            alert('Cadastro feito com sucesso!');
        }
                else{
                    alert('As senhas não estão iguais!');
                    alert('Verifique se tudo esta preenchido corretamente e tente novamente!');
        }
    }