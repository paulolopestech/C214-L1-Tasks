<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let result = '';
  
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		setResult(imc);
	  } else {
		imc = 0;
	  }
	}

	function setResult(imc) {
		if(imc < 18.5) {
			result = 'abaixo do peso';
		} else if (imc > 18.6 && imc < 24.9) {
			result = 'Peso ideal (parabéns)';
		} else if(imc > 25.0 && imc < 29.9) {
			result = 'Levemente acima do peso';
		}else if(imc > 30.0 && imc < 34.9) {
			result = 'Obesidade grau I';
		}else if(imc > 35.0 && imc < 39.9) {
			result = 'Obesidade II (severa)';
		} else {
			result = 'Obesidade III (mórbida)';
		}
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc}</p>
	  <p>Sua classificação é: {result}</p>
	{/if}
  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}
  </style>
  