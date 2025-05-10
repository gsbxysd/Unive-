<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Explorando o Universo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: black;
      color: white;
      text-align: center;
    }
    h1 {
      font-size: 3em;
      margin-top: 20px;
    }
    .section {
      margin: 50px 0;
    }
    .item {
      display: inline-block;
      margin: 20px;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .item:hover {
      transform: scale(1.1);
    }
    .item img {
      width: 200px;
      border-radius: 10px;
      border: 2px solid white;
    }
    .label {
      margin-top: 10px;
      font-size: 1.2em;
    }
  </style>
</head>
<body>

<h1>Explorando o Universo</h1>

<div class="section" id="planetas">
  <h2>Planetas</h2>
  <div class="item" onclick="playSound('terra')">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg" alt="Terra">
    <div class="label">Terra</div>
  </div>
  <div class="item" onclick="playSound('marte')">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" alt="Marte">
    <div class="label">Marte</div>
  </div>
</div>

<div class="section" id="estrelas">
  <h2>Estrelas</h2>
  <div class="item" onclick="playSound('sol')">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg" alt="Sol">
    <div class="label">Sol</div>
  </div>
</div>

<div class="section" id="galaxias">
  <h2>Galáxias</h2>
  <div class="item" onclick="playSound('via-lactea')">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Milky_Way_Arch.jpg" alt="Via Láctea">
    <div class="label">Via Láctea</div>
  </div>
</div>

<!-- Sons -->
<audio id="terra" src="https://www.soundjay.com/button/beep-07.mp3"></audio>
<audio id="marte" src="https://www.soundjay.com/button/beep-08b.mp3"></audio>
<audio id="sol" src="https://www.soundjay.com/button/beep-09.mp3"></audio>
<audio id="via-lactea" src="https://www.soundjay.com/button/beep-10.mp3"></audio>

<script>
  function playSound(id) {
    document.getElementById(id).play();
  }
</script>

</body>
</html>
