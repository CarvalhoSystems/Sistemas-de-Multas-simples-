document.addEventListener('DOMContentLoaded', () => {
   const velocidade = document.querySelector('#vel');
   const resultado = document.querySelector('#resultado');
   const botao = document.querySelector('#verificar');
   
   botao.addEventListener("click", () => {
    const vel = Number(velocidade.value);
    resultado.innerHTML = `Sua velocidade foi de ${vel} km/h`
    

   if (!velocidade.value) {
    resultado.innerHTML = "DIgite sua Velocidade primeiro";
    return;
   }
   if(vel > 60){
    resultado.innerHTML = `Sua Velocidade é de <stong>${vel} km/h</strong>.Você Foi <strong>multado</strong>`;
      }else {
        resultado.innerHTML = `Sua Velocidade é de <strong> ${vel} km/h</strong>.Você está dentro do limite`;
      }
   });
});

