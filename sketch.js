let tela = 0;
let carros = [];

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(220);

  switch (tela) {
    case 0:
      telaInicial();
      break;
    case 1:
      telaCampo();
      break;
    case 2:
      telaCidade();
      break;
    case 3:
      telaFinal();
      break;
  }
}

function mousePressed() {
  if (tela < 3) {
    tela++;
  }
}

// === TELA 0 ===
function telaInicial() {
  background(80, 170, 255);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Descubra o Campo e a Cidade!", width / 2, height / 2 - 20);
  textSize(16);
  text("Clique para começar", width / 2, height / 2 + 20);
}

// === TELA 1 - CAMPO ===
function telaCampo() {
  // Céu
  background(100, 200, 255);

  // Sol pixelado
  fill(255, 204, 0);
  rect(500, 50, 20, 20);
  rect(480, 50, 20, 20);
  rect(500, 30, 20, 20);
  rect(520, 50, 20, 20);
  rect(500, 70, 20, 20);

  // Chão verde com grama pixelada
  fill(0, 180, 0);
  rect(0, 350, width, 50);

  // Desenhar fileira de "grama" simples em pixel
  for (let i = 0; i < width; i += 8) {
    stroke(0, 100, 0);
    line(i, 350, i, 340 + sin(frameCount * 0.1 + i) * 3); // animação simples de vento
  }

  // Casinha pixelada
  noStroke();
  fill(150, 75, 0); // base
  rect(100, 290, 60, 60);
  fill(200, 0, 0); // telhado
  triangle(90, 290, 130, 250, 170, 290);
  fill(255); // janela
  rect(115, 310, 15, 15);

  // Texto
  fill(0);
  textAlign(CENTER);
  textSize(18);
  text("🌾 Você sabia?", width / 2, 40);
  textSize(14);
  text("Mais de 70% dos alimentos vêm do campo!", width / 2, 65);
  text("Clique para ver sobre a cidade...", width / 2, 380);
}

// === TELA 2 - CIDADE ===
function telaCidade() {
  background(30); // céu noturno

  // Prédios estilo pixel
  for (let x = 0; x < width; x += 60) {
    let predioAltura = 150 + (x % 3) * 20;
    fill(40);
    rect(x, height - predioAltura, 50, predioAltura);

    // Janelas simples em pixel
    fill(255, 255, 0);
    for (let y = height - predioAltura + 10; y < height - 10; y += 20) {
      rect(x + 10, y, 5, 5);
      rect(x + 30, y, 5, 5);
    }
  }

  // Rua
  fill(60);
  rect(0, 360, width, 40);

  // Carros se movimentando em estilo simples
  if (frameCount % 30 === 0) {
    carros.push({ x: 0, y: 370, speed: random(2, 4) });
  }

  for (let i = carros.length - 1; i >= 0; i--) {
    let carro = carros[i];
    fill(255, 0, 0);
    rect(carro.x, carro.y, 30, 15);
    fill(255);
    rect(carro.x + 5, carro.y + 3, 5, 5);
    rect(carro.x + 20, carro.y + 3, 5, 5);
    carro.x += carro.speed;

    if (carro.x > width) {
      carros.splice(i, 1);
    }
  }

  // Texto
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text("🏙 Curiosidade urbana!", width / 2, 40);
  textSize(14);
  text("Mais da metade da população mundial vive nas cidades.", width / 2, 65);
  text("Clique para encerrar...", width / 2, 385);
}

// === TELA 3 - FINAL ===
function telaFinal() {
  background(20, 100, 160);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Obrigado por explorar!", width / 2, height / 2 - 20);
  textSize(16);
  text("Campo e cidade juntos constroem o nosso mundo.", width / 2, height / 2 + 20);
}
