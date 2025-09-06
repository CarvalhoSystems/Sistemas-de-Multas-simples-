document.addEventListener('DOMContentLoaded', () => {
   const velocidade = document.querySelector('#vel');
   const resultado = document.querySelector('#resultado');
   const botao = document.querySelector('#verificar');
   const vias = document.querySelector('#vias'); // select das vias
   
   botao.addEventListener("click", () => {
      const vel = Number(velocidade.value);

      if (!velocidade.value.trim()) {
         resultado.innerHTML = "Digite sua Velocidade primeiro";
         return;
      }

      resultado.innerHTML = `Sua velocidade foi de ${vel} km/h`;

      if (vias.value === "avenida" && vel > 60) {
         resultado.innerHTML = `Sua Velocidade é de <strong>${vel} km/h</strong>. Você Foi <strong>multado</strong>`;
      } else if (vias.value === "Rodovia" && vel > 120) {
         resultado.innerHTML = `Sua Velocidade é de <strong>${vel} km/h</strong>. Você Foi <strong>multado</strong>`;
      } else {
         resultado.innerHTML = `Sua Velocidade é de <strong>${vel} km/h</strong>. Você está dentro do limite`;
      }
   });
});
