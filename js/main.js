const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


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
            placeholder="Tap 'Enter' to send a message"
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