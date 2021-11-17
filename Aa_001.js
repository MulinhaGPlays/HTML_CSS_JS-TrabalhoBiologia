btn_play.addEventListener("click", (event) => {
  event.preventDefault();
  bg_video.style.animation = "blur 0.5s ease-in";
  bg_video.style.filter = "blur(4px)";
  logo.style.display = "none";
  btn_play.style.display = "none";
  bg_form.style.display = "flex";
  pg_1.style.animation = "unhidden 0.7s ease-in";
})
    
btn_forward1.addEventListener("click", (event) => {
  event.preventDefault();
    pg_1.style.display = "none";
    pg_2.style.display = "flex";
})

btn_forward2.addEventListener("click", (event) => {
  event.preventDefault();
    pg_2.style.display = "none";
    pg_3.style.display = "flex";
})

btn_forward3.addEventListener("click", (event) => {
  event.preventDefault();
    pg_3.style.display = "none";
    pg_4.style.display = "flex";
})

btn_forward4.addEventListener("click", (event) => {
  event.preventDefault();
    pg_4.style.display = "none";
    pg_5.style.display = "flex";
})

btn_backward2.addEventListener("click", (event) => {
  event.preventDefault();
    pg_2.style.display = "none";
    pg_1.style.display = "flex";
    pg_1.style.animation = "";
})

btn_backward3.addEventListener("click", (event) => {
  event.preventDefault();
    pg_3.style.display = "none";
    pg_2.style.display = "flex";
})

btn_backward4.addEventListener("click", (event) => {
  event.preventDefault();
    pg_4.style.display = "none";
    pg_3.style.display = "flex";
})

btn_backward5.addEventListener("click", (event) => {
  event.preventDefault();
    pg_5.style.display = "none";
    pg_4.style.display = "flex";
})

pg_1a.addEventListener("click", (event) => {
  event.preventDefault();
    img_4.style.background = "url('sc_5.jpg')";
    img_4.style.backgroundRepeat = "no-repeat";
    img_4.style.backgroundSize = "cover";
})

pg_2a.addEventListener("click", (event) => {
  event.preventDefault();
    img_4.style.background = "url('sc_6.gif')";
    img_4.style.backgroundRepeat = "no-repeat";
    img_4.style.backgroundSize = "cover";
})

pg_3a.addEventListener("click", (event) => {
  event.preventDefault();
    img_4.style.background = "url('sc_4.jpg')";
    img_4.style.backgroundRepeat = "no-repeat";
    img_4.style.backgroundSize = "cover";
})

pg_1b.innerHTML = "<h1>"+quest1+"</h2>";


pg_2b.innerHTML = "<h1>"+quest2+"</h2>";


pg_3b.innerHTML = "<h1>"+quest3+"</h2>";


pg_4b.innerHTML = "<h1>"+quest4+"</h2>";