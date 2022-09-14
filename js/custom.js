/* /////////////////// Funções ///////////////// */
const aviso = (msg) => {
  alert(msg)
}

const mostraIdade = () => {
  let span = document.getElementById('txt-idade')
  let campoIdade = document.getElementById('idade')
  span.innerText = campoIdade.value
}

var dataAtual = new Date
const mostraData = () => {
  let dia = dataAtual.getDay()
  let mes = dataAtual.getMonth() + 1
  let ano = dataAtual.getFullYear()
  let hora = dataAtual.getHours()
  let valor = dia + '/' + mes + '/' + ano + ' - ' + hora

  document.getElementById('dt-cadastro').value = valor
}

//Preenche o select "estado" com os estados da API do IBGE
const getEstados = () => {
  let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  let select = document.getElementById('estado')

  // Lê a API através do fetch(),  1o then captura os dados, 2o then trata os dados 
  fetch(api).then(resposta => resposta.json()).then(json => {
    let options = '<option>Selecione</option>'

    //PERCORRE O OBJETO JSON COM OS ESTADOS DO BRASIL 
    for (const index in json) {
      options += `<option value=${json[index].sigla}>${json[index].nome}</option>`
    }
    select.innerHTML = options
  })
}



//PREENCHE O SELECT DE CIDADES DE ACORDO COM O UF SELECIONADO
//A FUNCAO RECEBE UM PARAMETRO COM O SIGLA DA UF
const getCidadesByUf = (uf)=>{
  let api = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  let select = document.getElementById('cidade')

  fetch(api).then(resposta => resposta.json()).then(json => {
    let options = '<option>Selecione</option>'

    for (const index in json) {
      options += `<option value=${json[index].nome}>${json[index].nome}</option>`
    }
    select.innerHTML = options
  })
}
 



/*EXEMPLO LAÇO FOR
var semestre = ['Jan', 'Fev','Mar','Abr','Mai','Jun']
var texto = ''
for (let index = 0; index < semestre.length; index++) {
  const element = semestre[index];
  texto += element + '<br>'

  document.getElementById('explorar').innerHTML = texto 
}*/


/*---------------------------------------------------------------------------*/


/* //////////////// eventos e execuxões automaticas ////////////// */

getEstados()

mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)

mostraData()
//Inicializa animçoes scroll do AOS 

AOS.init();


// Impede o envio do formulario quando os campos estao invalidos 
(() => {
  'use strict'

  // váriavel captura as tags <form> que contem a classe "needs-validation"
  const forms = document.querySelectorAll('.needs-validation')

  // Executa para ada formulário da variável forms
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      //se houver campos invalidos, interrompe o submit
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.getElementById('estado').addEventListener('change', function(){
  getCidadesByUf(this.value)
})

//(THIS) REPRESENTA O OBJETO Q EXECUTA O EVENTO 