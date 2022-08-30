// template_el6dcos
// service_zwvxgl3
// 1Rc9bBLpVfuIUVxrU

// function contact(event) {
//   event.preventDefault();
//   const loading = document.querySelector(".modal__overlay--loading");
//   const success = document.querySelector(".modal__overlay--success");
//   loading.classList += " modal__overlay--visible";
//   emailjs
//     .sendForm(
//       "service_zwvxgl3",
//       "template_el6dcos",
//       event.target,
//       "1Rc9bBLpVfuIUVxrU"
//     )
//     .then(() => {
//       loading.classList.remove("modal__overlay--visible");
//       success.classList += " modal__overlay--visible";
//     })
//     .catch(() => {
//       loading.classList.remove("modal__overlay--visible");
//       alert(
//         "The email service is temporarili unavailable. Please contact me directly on nguyentrihieu253@gmail.com"
//       );
//     });
// }

const scaleFactor = 1 / 20;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 === 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
  }
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// let isModalOpen = false;
// function toggleModal() {
//   if (isModalOpen) {
//     isModalOpen = false;
//     return document.body.classList.remove("modal--open");
//   }
//   isModalOpen = true;
//   document.body.classList += " modal--open";
// }

let isModalOpen = false;
function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
    return (document.body.classList += " modal--open");
  }
  return document.body.classList.remove("modal--open");
}
