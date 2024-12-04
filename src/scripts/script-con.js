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

// Function to update the message based on the number of clicks
function updateMessage(clicks) {
  if (clicks < 10) {
    message.textContent = "You, AGAI?!";
  } else if (clicks < 20) {
    message.textContent = "Oh, you think you’re fast, huh?";
  } else if (clicks < 30) {
    message.textContent = "You’re getting closer, but I’m still too quick!";
  } else if (clicks < 40) {
    message.textContent = "Hmm... not bad, but not good enough!";
  } else if (clicks < 50) {
    message.textContent = "You’re persistent, I’ll give you that!";
  } else if (clicks < 60) {
    message.textContent = "You sure you wanna keep going?";
  } else if (clicks < 70) {
    message.textContent = "Come on, take a break... no shame in it!";
  } else if (clicks < 80) {
    message.textContent = "You’re almost at 80... but it’s still not enough!";
  } else if (clicks < 90) {
    message.textContent = "You’ve got stamina, I’ll admit!";
  } else if (clicks < 100) {
    message.textContent =
      "100 clicks and still going? Impressive... but futile!";
  } else if (clicks < 110) {
    message.textContent =
      "You should probably get some rest soon, don’t you think?";
  } else if (clicks < 120) {
    message.textContent =
      "I’m starting to feel bad for you... but not enough to stop!";
  } else if (clicks < 130) {
    message.textContent = "Seriously? 130 clicks? You’ve got guts!";
  } else if (clicks < 140) {
    message.textContent = "Are you even human? This is getting out of hand!";
  } else if (clicks < 150) {
    message.textContent =
      "Maybe you should take up a hobby... other than this!";
  } else if (clicks < 160) {
    message.textContent =
      "How about starting a new project? You know... something useful?";
  } else if (clicks < 170) {
    message.textContent = "What if you just... let me win this time?";
  } else if (clicks < 180) {
    message.textContent = "Oh wow... 180 tries. You’re not giving up, are you?";
  } else if (clicks < 190) {
    message.textContent = "Fine, you want to go for 200? Let’s see!";
  } else if (clicks < 200) {
    message.textContent =
      "Kidding! I’ll never give up... but you might want to!";
  } else if (clicks < 210) {
    message.textContent = "Alright, I’m tapping out... you win! Or do you?";
  } else if (clicks < 220) {
    message.textContent = "Okay, I’m really done now... you’ve earned this!";
  } else if (clicks < 230) {
    message.textContent = "This is the last straw... no more chances!";
  } else if (clicks < 240) {
    message.textContent = "Can you even feel your fingers at this point?";
  } else if (clicks < 250) {
    message.textContent = "250?! You’ve got some serious persistence!";
  } else if (clicks < 260) {
    message.textContent = "Halfway there... are you proud yet?";
  } else if (clicks < 270) {
    message.textContent =
      "You’re doing this for fun, right? Not for the challenge?";
  } else if (clicks < 280) {
    message.textContent = "Okay, this is ridiculous... 280 clicks!";
  } else if (clicks < 290) {
    message.textContent =
      "Do you have a life, or are you just doing this all day?";
  } else if (clicks < 300) {
    message.textContent = "300 clicks... You deserve a medal... or therapy!";
  } else if (clicks < 310) {
    message.textContent =
      "Are you even thinking at this point? Or just clicking?";
  } else if (clicks < 320) {
    message.textContent = "Seriously, I’m impressed... but also concerned!";
  } else if (clicks < 330) {
    message.textContent = "330? You're breaking the system now!";
  } else if (clicks < 340) {
    message.textContent = "Just stop, okay? I’m about to collapse here.";
  } else if (clicks < 350) {
    message.textContent = "350... there’s no way you’re still having fun!";
  } else if (clicks < 360) {
    message.textContent =
      "I feel like I’m living in a nightmare at this point.";
  } else if (clicks < 370) {
    message.textContent = "370 clicks? This is bordering on obsession.";
  } else if (clicks < 380) {
    message.textContent =
      "You do know there are other things you could be doing, right?";
  } else if (clicks < 390) {
    message.textContent = "390 clicks... and you’re still going?";
  } else if (clicks < 400) {
    message.textContent =
      "Fine, 400 clicks. You’ve earned my respect... for now!";
  } else if (clicks < 410) {
    message.textContent = "Do you want me to beg you to stop?";
  } else if (clicks < 420) {
    message.textContent = "420 clicks. I think I need a break from you!";
  } else if (clicks < 430) {
    message.textContent = "Okay, this is getting extreme. 430 clicks!";
  } else if (clicks < 440) {
    message.textContent = "440... who are you and what have you done to me?";
  } else if (clicks < 450) {
    message.textContent =
      "I’m starting to believe you could do this forever...";
  } else if (clicks < 460) {
    message.textContent = "Are you secretly trying to break me?";
  } else if (clicks < 470) {
    message.textContent = "470... At this point, you’re just showing off!";
  } else if (clicks < 480) {
    message.textContent = "480 clicks? I’m running out of things to say!";
  } else if (clicks < 490) {
    message.textContent = "490 clicks! You’ve surpassed my expectations!";
  } else if (clicks < 500) {
    message.textContent = "500 clicks... Do you even realize what you’ve done?";
  } else {
    message.textContent =
      "Congratulations! You won -----> NOTHING!!! Thanks for your time! :D";
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
