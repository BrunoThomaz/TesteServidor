function validaTelefone(event){
    let input = event.target
    input.value = mascaraTelefone(input.value)

    function mascaraTelefone(value) {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }
    validateForm()
}
function validaCPFCNPJ(event){
    let input = event.target
    validateForm()
    if(input.value.length < 15) {
        input.value = validaCPF(input.value)
    } else {
        input.value = validaCNPJ(input.value)
    }

    function validaCPF(v){
        if (!v) return ""
        v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                 //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        return v
    }

    function validaCNPJ(v){
        if (!v) return ""
        v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
        return v
    }
}

let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextTab(e) {
    e.preventDefault()
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (!validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + 1;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    return false;
  }
  personalizaNome();
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function personalizaNome() {
  let nome = document.getElementById('nome').value;
  let primeiroNome = nome.split(' ')[0];
  let cliente = document.getElementById('PrimeiroNome');
  cliente.textContent = primeiroNome;
}

function validateForm() {  
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value.length < 5) {
      // add an "invalid" class to the field:
      y[i].classList.add('invalid');
      // and set the current valid status to false:
      valid = false;
    } else {
      y[i].classList.remove('invalid')
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function validaSubmit(ev) {
  ev.preventDefault();
  let form = document.querySelector('form')
  validateForm() ? form.submit() : false
  
}





