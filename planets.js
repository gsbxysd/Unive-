const curiosidades = [
  "Mercúrio não tem atmosfera significativa, então o céu é sempre preto.",
  "Um dia em Mercúrio dura 59 dias terrestres.",
  "Mercúrio não possui luas.",
  "Mercúrio é visível da Terra a olho nu."
];

document.getElementById('btn-curiosidade').addEventListener('click', () => {
  const sorteio = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  const div = document.getElementById('curiosidade');
  div.textContent = sorteio;
  div.style.display = "block";
});

