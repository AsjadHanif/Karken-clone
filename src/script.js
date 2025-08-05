function changingelembybtn() {
// Button IDs and their corresponding element IDs
const btns = [
    { btn: "popularbtn", elem: "popularelem" },
    { btn: "rewardbtn", elem: "rewardelem" },
    { btn: "stablebtn", elem: "stableelem" },
    { btn: "newlybtn", elem: "newlyelem" }
  ];

  // Active classes
  const activeClasses = ["bg-white", "rounded-xl" , "h-9" , "w-[88px]" , ];
  const inactiveClasses = ["bg-transparent", "rounded-none"]; // adjust as needed
  
  btns.forEach(({ btn, elem }) => {
    document.getElementById(btn).addEventListener("click", function () {
      btns.forEach(({ btn: b, elem: e }) => {
        const button = document.getElementById(b);
        const element = document.getElementById(e);
  
        if (b === btn) {
          // Active button
          button.classList.add(...activeClasses);
          button.classList.remove(...inactiveClasses);
          element.style.display = "block";
        } else {
          // Inactive buttons
          button.classList.remove(...activeClasses);
          button.classList.add(...inactiveClasses);
          element.style.display = "none";
        }
      });
    });
  });
  
  // By default, show only popular
  window.addEventListener("DOMContentLoaded", () => {
    btns.forEach(({ btn, elem }, i) => {
      const button = document.getElementById(btn);
      const element = document.getElementById(elem);
      if (i === 0) {
        button.classList.add(...activeClasses);
        element.style.display = "block";
      } else {
        button.classList.remove(...activeClasses);
        element.style.display = "none";
      }
    });
  });
}
changingelembybtn();

function Paymentprogressloader(){
  var loader = lottie.loadAnimation({
    container: document.getElementById('loader'), // ID of container
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './Insider-loading.json' // OR hosted URL
  });

}
Paymentprogressloader();

function menu(){
  document.getElementById('menu').addEventListener('click',function(){
    document.getElementById('navlogin').classList.add("hidden");
    document.getElementById('navSignup').classList.add("hidden");

})
}
menu();