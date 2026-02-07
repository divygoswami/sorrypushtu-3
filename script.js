document.addEventListener(“DOMContentLoaded”, () => {

  const yesBtn = document.getElementById(“yes”);
  const noBtn = document.getElementById(“no”);

  noBtn.onclick = () => {
    noBtn.innerText = “Please maan jao 🥺”;
  };

  yesBtn.onclick = () => {
    document.body.innerHTML = `
      <div style=“
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#ffe6ea;
        text-align:center;
        font-family:Arial;
      “>
        <h1>Thank you, Pushtu 🤍</h1>
        <p>pushtu i am sorry abse esa nahi hoga i promise🥺 maf kardona meri motichur ki laddoo myy pushtuuu🎀💋.</p>
      </div>
    `;
  };

});
