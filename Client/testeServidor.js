const urlConsultaMovimentacao=`http://${servidor}:8081/integracao/movimentacao/consulta`


var token = "";

let cadastroCliente = `{"dto":{
"clientes":
[
{
"codigo":0000198689,
"nome":"CLIENTE TESTE",
"nomeFantasia":"CLIENTE TESTE",
"logradouro":"av teste",
"numero":"103",
"complemento":"complemento", 
"bairro":"BAIRRO MACIO",
"cidade":"NATAL",
"codigoIbge":2408102,
"telefone":88888888888,
"tipoPreco":1,
"numeroDocumento":04770238070319,
"rgIe":"200938355",
"orgaoExpedidor":"SSP CE"
"tipoPessoa":"J",
"dataNascimento":"06/10/1990",
"estadoCivil":"C",
"sexo":"M",
"email":"email@gmail.com",
"cep":60740003,
"status":1
}
]
}
}
`

let consultaMovimentacao = `{
    "data": "2024-06-01",
    "horaInicio": "1025",
    "horaFim": "1125",
    "loja": 12,
    "caixa": 12,
    "sequencial": 995,
    "tipo": "1"
    "xmlNotaDescompactado":true
}`


async function iniciaTeste(ev) {
    ev.preventDefault()
    let headers = {
        "Content-Type":"application/json",
        "Token":token,
    }
    testeAutenticacao();
    testeCadastroCliente();

}

function testeAutenticacao() {
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let servidor = document.getElementById('servidor').value
    let urlAutenticacao=`http://${servidor}:8081/integracao/auth`
    let autenticacao = {
        "auth": {
            "usuario":usuario,
            "senha":senha
        }
    };

    fetch(urlAutenticacao, {
        headers:{
            "Content-Type":"application/json"
        },
        method:'POST',
        body: JSON.stringify(autenticacao)
    })
        .then(response => response.json())
        .then(json => {
            let resultados = document.getElementById('resultados')
            if (json.token) {
                resultados.textContent += `\nTeste de autenticação usuário/senha: \n ${JSON.stringify(json)}\n TESTE REALIZADO COM SUCESSO`
            } else {
                resultados.textContent += `\nTeste de autenticação usuário/senha com erro.`
            }
            if (json.token) token = json.token
            console.log(token);
        })
        .catch(err => {
            resultados.textContent += `\nERRO:\n${err}\n\n`
        })
}

function testeCadastroCliente() {
    const urlCadastroCliente = `http://${servidor}:8081/integracao/cliente/insertOrUpdate`
    let resultados = document.getElementById('resultados')
    let dadosCliente = {
        "dto":{
            "clientes": [
                {
                    "codigo":Math.random()*10000,
                    "nome":`CLIENTE TESTE${Math.random()*10000}`,
                    "nomeFantasia":"CLIENTE TESTE",
                    "logradouro":"av teste",
                    "numero":"103",
                    "complemento":"complemento", 
                    "bairro":"BAIRRO MACIO",
                    "cidade":"NATAL",
                    "codigoIbge":2408102,
                    "telefone":88888888888,
                    "tipoPreco":1,
                    "numeroDocumento":Math.random()*10000,
                    "rgIe":"200938355",
                    "orgaoExpedidor":"SSP CE",
                    "tipoPessoa":"J",
                    "dataNascimento":"06/10/1990",
                    "estadoCivil":"C",
                    "sexo":"M",
                    "email":"email@gmail.com",
                    "cep":60740003,
                    "status":1
                }
            ]
        }
    }
    let url = 'http://localhost:3001/cadastroCliente'
    fetch(urlCadastroCliente, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Token":token
        },
        body: JSON.stringify(dadosCliente)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            resultados.textContent += '\nTeste de Cadastro de cliente:\n' + JSON.stringify(data);
        })
        .catch(error => {
        // trate erros de requisição
        });
}
