btn_play.addEventListener("click", (event) => {
  event.preventDefault();
  bg_video.style.animation = "fade 1s ease-in alternate backwards"
  bg_video.style.filter = "blur(4px)";
  logo.style.display = "none";
  btn_play.style.display = "none";
  bg_form.style.display = "flex";
  txt_1.innerHTML = TXT_1;
})

form_lyt2.addEventListener("click", (event) => {
  event.preventDefault();
  if (VAR_1 == 0) {
    form_lyt2.style.transition = "all 0.5s ease";
    form_lyt2.style.transform = "scale(1.5) translateX(-110%)";
    Number(VAR_1 = VAR_1 + 1);
  } else {
    form_lyt2.style.transition = "all 0.5.s ease";
    form_lyt2.style.transform = "scale(1) translateX(0)";
    Number(VAR_1 = VAR_1 - 1);
  }
})

form_lyt3.addEventListener("click", (event) => {
  event.preventDefault();
  if (VAR_1 == 0) {
    form_lyt3.style.transition = "all 0.5s ease";
    form_lyt3.style.transform = "scale(1.5) translateX(108%) translateY(-40%)";
    Number(VAR_1 = VAR_1 + 1);
  } else {
    form_lyt3.style.transition = "all 0.5s ease";
    form_lyt3.style.transform = "scale(1) translateX(0)";
    Number(VAR_1 = VAR_1 - 1);
  }
})
    
    