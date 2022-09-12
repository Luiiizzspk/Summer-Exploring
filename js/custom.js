/* /////////////////// Funções ///////////////// */
const aviso = (msg)=>{
    alert(msg)
}

const mostraIdade = () =>{
    let span = document.getElementById('txt-idade')
    let campoIdade = document.getElementById('idade')
    span.innerText = campoIdade.value
}


/*---------------------------------------------------------------------------*/





/* //////////////// eventos e execuxões automaticas ////////////// */

/*aviso('tenha um bom dia Dave')
document.getElementById('nome').addEventListener('click', function(){
    aviso('Ola mundo!! Este é o planeta Terra??')
})*/

mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)

//Inicializa animçoes scroll do AOS 

AOS.init();


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()