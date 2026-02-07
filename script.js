document.addEventListener(“DOMContentLoaded”, () => {

  const yesBtn = document.getElementById(“yes”);
  const noBtn = document.getElementById(“no”);

  noBtn.addEventListener(“mouseover”, () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  yesBtn.addEventListener(“click”, () => {
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
        padding:20px;
      “>
        <h1 style=“color:#333;”>Thank you for giving me a chance 🤍</h1>
        <p style=“margin-top:15px;font-size:18px;color:#555;”>
          abse pakka vala promise nahi repear krunga ye mistake.<br>
          maaf karde meri pyari motichur ke ladoo jesi pushtu!
        </p>
      </div>
    `;
  });


});
