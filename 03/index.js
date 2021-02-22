const inputs = document.querySelectorAll('.controls input');

function atualizacao() {
    const tamanho = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + tamanho);
    // console.log(this.name)
    
    
}

inputs.forEach(input => input.addEventListener('change', atualizacao));
inputs.forEach(input => input.addEventListener('mousemove', atualizacao));

//  inputs.forEach(input => input.addEventListener('change', handleUpdate));
//  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
//
