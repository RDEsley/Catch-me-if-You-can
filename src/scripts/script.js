const message = document.getElementById("message");
let clickCount = 0;
const maxClicks = 230;
let isLastMessage = false; // Variável para saber se a última mensagem foi exibida

// Função para gerar posições aleatórias dentro da janela
function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - message.offsetWidth);
  const y = Math.random() * (window.innerHeight - message.offsetHeight);
  return { x, y };
}

// Função para atualizar a mensagem conforme o número de cliques
function updateMessage(clicks) {
  if (clicks < 10) {
    message.textContent = "Catch me if you can!";
  } else if (clicks < 20) {
    message.textContent = "You really think you can catch me?";
  } else if (clicks < 30) {
    message.textContent = "Just give up...";
  } else if (clicks < 40) {
    message.textContent = "You really won't give up?";
  } else if (clicks < 50) {
    message.textContent = "Still going?";
  } else if (clicks < 60) {
    message.textContent = "Why don't you stop?";
  } else if (clicks < 70) {
    message.textContent = "Come on, quit!";
  } else if (clicks < 80) {
    message.textContent = "You’re crazy!";
  } else if (clicks < 90) {
    message.textContent = "I can do this all day... or until you stop!";
  } else if (clicks < 100) {
    message.textContent = "I'm getting tired...";
  } else if (clicks < 110) {
    message.textContent = "Do you know you're really annoying?";
  } else if (clicks < 120) {
    message.textContent = "Give up already!!!";
  } else if (clicks < 130) {
    message.textContent = "Bro, you tried 130 times...";
  } else if (clicks < 140) {
    message.textContent = "Don't you have anything better to do?";
  } else if (clicks < 150) {
    message.textContent = "Like, maybe doing homework?";
  } else if (clicks < 160) {
    message.textContent = "You could be doing something more productive...";
  } else if (clicks < 170) {
    message.textContent = "How about getting a job? What do you think?";
  } else if (clicks < 180) {
    message.textContent = "Crazy... 180 tries!";
  } else if (clicks < 190) {
    message.textContent =
      "Okay, if you won't give up, I will give up on you...";
  } else if (clicks < 200) {
    message.textContent = "Kidding! I will never give up!";
  } else if (clicks < 210) {
    message.textContent = "Alright... I give up!";
  } else if (clicks < 220) {
    message.textContent = "Seriously, I’m giving up now!";
  } else if (clicks < 230) {
    message.textContent = "Okay, okay, OK!";
  } else {
    message.textContent =
      "Here, you just have to click here and go to the Success Page!";
    isLastMessage = true; // Marca que chegou na última mensagem
  }
}

// Movendo a mensagem ao passar o mouse e atualizando a mensagem
message.addEventListener("mouseover", () => {
  if (!isLastMessage) {
    // Se ainda não for a última mensagem, movimenta
    clickCount++; // Incrementando o número de cliques ao passar o mouse
    const { x, y } = getRandomPosition(); // Pegando uma posição aleatória
    message.style.position = "absolute"; // Para poder mover a mensagem
    message.style.left = `${x}px`;
    message.style.top = `${y}px`;
    updateMessage(clickCount); // Atualizando a mensagem com base no número de cliques
  }
});

// Redirecionamento após o clique, quando a última mensagem for exibida
message.addEventListener("click", () => {
  if (isLastMessage) {
    window.location.href = "/assets/sucess.html"; // Redirecionando para a página de sucesso
  }
});
