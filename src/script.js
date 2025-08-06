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

function menu() {
  const body = document.getElementById('body');
  const login = document.getElementById('navlogin');
  const signup = document.getElementById('navSignup');

  const currentOverflow = window.getComputedStyle(body).overflow;

  if (currentOverflow === "hidden") {
    // Show everything back
    body.style.overflow = "auto";
    login.classList.remove("hidden");
    signup.classList.remove("hidden");
  } else {
    // Hide body scroll and nav buttons
    body.style.overflow = "hidden";
    login.classList.add("hidden");
    signup.classList.add("hidden");
  }
}
document.getElementById('menu').addEventListener('click', menu);