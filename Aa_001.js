const size = 120;
const ulSquares = document.querySelector("ul.squares");
const random = (min, max) => Math.random() * (max - min) + min;
for (let i = 0; i < 150; i++) {
  const li = document.createElement("li");

  const size = Math.floor(random(25, 85));
  const position = random(-5, 100);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);
}

for (let i = 0; i < 150; i++) {
  const mli = document.createElement("mli");

  const size = Math.floor(random(5, 15));
  const position = random(-5, 100);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  mli.style.width = `${size}px`;
  mli.style.height = `${size}px`;
  mli.style.bottom = `-${size}px`;

  mli.style.left = `${position}%`;

  mli.style.animationDelay = `${delay}s`;
  mli.style.animationDuration = `${duration}s`;

  mli.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(mli);
}

for (let i = 0; i < 2; i++) {
  const sn = document.createElement("sn");
  sn.innerHTML = "<h2 class='txt1'>Sistema Nervoso</h2>"

  const position = random(5, 95);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  sn.style.width = `${size}px`;
  sn.style.height = `${size}px`;
  sn.style.bottom = `-${size}px`;

  sn.style.left = `${position}%`;

  sn.style.animationDelay = `${delay}s`;
  sn.style.animationDuration = `${duration}s`;

  sn.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(sn);
}

for (let i = 0; i < 2; i++) {
    const sd = document.createElement("sd");
    sd.innerHTML = "<h2 class='txt2'>Sistema Digestório</h2>"
  
    const position = random(5, 95);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sd.style.width = `${size}px`;
    sd.style.height = `${size}px`;
    sd.style.bottom = `-${size}px`;
  
    sd.style.left = `${position}%`;
  
    sd.style.animationDelay = `${delay}s`;
    sd.style.animationDuration = `${duration}s`;
  
    sd.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    ulSquares.appendChild(sd);
  }

  for (let i = 0; i < 2; i++) {
    const se = document.createElement("se");
    se.innerHTML = "<h2 class='txt3'>Sistema Excretor</h2>"
  
    const position = random(5, 95);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    se.style.width = `${size}px`;
    se.style.height = `${size}px`;
    se.style.bottom = `-${size}px`;
  
    se.style.left = `${position}%`;
  
    se.style.animationDelay = `${delay}s`;
    se.style.animationDuration = `${duration}s`;
  
    se.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    ulSquares.appendChild(se);
  }

  for (let i = 0; i < 2; i++) {
    const sc = document.createElement("sc");
    sc.innerHTML = "<h2 class='txt4'>Sistema Cardiovascular</h2>"
  
    const position = random(5, 95);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sc.style.width = `${size}px`;
    sc.style.height = `${size}px`;
    sc.style.bottom = `-${size}px`;
  
    sc.style.left = `${position}%`;
  
    sc.style.animationDelay = `${delay}s`;
    sc.style.animationDuration = `${duration}s`;
  
    sc.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    ulSquares.appendChild(sc);
  }

  for (let i = 0; i < 2; i++) {
    const sen = document.createElement("sen");
    sen.innerHTML = "<h2 class='txt5'>Sistema Endocrino</h2>"
  
    const position = random(5, 95);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sen.style.width = `${size}px`;
    sen.style.height = `${size}px`;
    sen.style.bottom = `-${size}px`;
  
    sen.style.left = `${position}%`;
  
    sen.style.animationDelay = `${delay}s`;
    sen.style.animationDuration = `${duration}s`;
  
    sen.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    ulSquares.appendChild(sen);
  }