// Create chatBot in document window

let body = document.querySelector('body');

let chat_bot = document.createElement('div');
chat_bot.classList.add('chat-bar-collapsible');
chat_bot.innerHTML = `
<button id="chat-button" type="button" class="collapsible">
  <div class="chat-button-Avatar">
    <div class="chatAvatar"><img src="./img/chatbot/chatAvatar.JPG" alt=""></div>
    
    <div class="chat-button-Avatar-Block">
      <p>Александра <span><i
      id="chat-icon"
      style="color: #fff"
      class="fa fa-fw fa-comments-o"></i></span></p>
      <p>Cпециалист клиентской службы</p>
    </div>
    <div class="chat-Icon">
      <img src="./img/chatbot/downArrow.png" alt="">
    </div>
  </div>
  
  </button>
<div class="content">
<div class="full-chat-block">

  <div class="outer-container">
    <div class="chat-container">
      <div id="chatbox">
        <h5 id="chat-timestamp"></h5>
        <p id="botStarterMessage" class="botText">
          <span>Loading...</span>
        </p>
      </div>

      <div class="chat-bar-input-block">
        <div id="userInput">
          <input
            id="textInput"
            class="input-box"
            type="text"
            name="msg"
            placeholder="Нажмите 'Enter' чтобы отправить"
          />
          <p></p>
        </div>
        <div class="chat-bar-icons">
          <i
            id="chat-icon"
            style="color: crimson"
            class="fa fa-fw fa-heart"
            onclick="heartButton()"
          ></i>
          <i
            id="chat-icon"
            style="color: #333"
            class="fa fa-fw fa-send"
            onclick="sendButton()"
          ></i>
        </div>
      </div>
      <div id="chat-bar-bottom">
        <p></p>
      </div>
    </div>
  </div>
</div>
</div>
`
body.append(chat_bot);




// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Получает первое сообщение

function firstBotMessage() {
  let firstMessage = "Здравствуйте! У вас есть вопрос? <br> Или вам нужна помощь?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Извлекает ответ
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Получает текстовый текст из поля ввода и обрабатывает его
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "Здравствуйте";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Обрабатывает отправку текста с помощью нажатий кнопок
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("&#10084");
}

// enter для отправки сообщения
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});


function getBotResponse(input) {
  if (input == "hello") {
    return "Hello there! Do you have any questions?";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "how i can connact with hr manager?") {
    return "You can write to our mailing address: abc@gmail.com";
  } else {
    return "Мы ответим вам в ближайшее время)";
  }
}


let content = document.querySelector('.content');

// window.addEventListener('scroll', () => {
//   if (content.style.maxHeight = '450px') {
//     content.style = 'maxHeight: 0;';
//     coll[0].classList.remove('active');
//   }
// })




