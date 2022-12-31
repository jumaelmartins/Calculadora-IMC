function calcularImc() {
  const alturaInput = document.querySelector(".alturaInput");
  let alturaValue = document.querySelector("#alturaValue");
  const pesoInput = document.querySelector(".pesoInput");
  let pesoValue = document.querySelector("#pesoValue");

  alturaInput.addEventListener("input", (e) => {
    return (alturaValue.innerHTML = e.target.value / 100).toFixed(2);
  });

  pesoInput.addEventListener("input", (e) => {
    return (pesoValue.innerHTML = parseFloat(e.target.value));
  });

  const form = document.querySelector(".form");
  const results = document.querySelector(".results");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
    //   const altura = parseFloat(form.querySelector('.altura').value);
    //   const peso = parseFloat(form.querySelector('.peso').value);

    console.log(typeof pesoValue.innerText, typeof alturaValue.innerText);

    const imc = pesoValue.innerText / (alturaValue.innerText * alturaValue.innerText);

    const imcResults = (imc) => {
      if (!imc) {
        results.classList.remove("blue");
        results.classList.remove("orange");
        results.classList.add("red");
        return "valor invalido";
      } else if (imc < 18.5) {
        results.classList.remove("blue");
        results.classList.remove("orange");
        results.classList.add("red");
        return `seu imc é ${imc.toFixed(2)} o seu peso está abaixo do normal`;
      } else if (imc >= 18.5 && imc < 24.9) {
        results.classList.remove("red");
        results.classList.remove("orange");
        results.classList.add("blue");
        return `seu imc é ${imc.toFixed(2)} o seu está peso normal`;
      } else if (imc >= 24.9 && imc < 30) {
        results.classList.remove("blue");
        results.classList.remove("orange");
        results.classList.add("orange");
        return `seu imc é ${imc.toFixed(2)} e vôce está com sobrepeso`;
      } else if (imc > 30) {
        results.classList.remove("blue");
        results.classList.remove("orange");
        results.classList.add("red");
        return `seu imc é ${imc.toFixed(2)} e você está obeso`;
      }
    };

    results.innerHTML = `<p>${imcResults(imc)}</p>`;
  });
}

calcularImc();
