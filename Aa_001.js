const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
const btn_3 = document.querySelector(".btn_3");
const btn_4 = document.querySelector(".btn_4");
const btn_5 = document.querySelector(".btn_5");
const btn_6 = document.querySelector(".btn_6");
const btn_7 = document.querySelector(".btn_7");
const btn_8 = document.querySelector(".btn_8");
const btn_9 = document.querySelector(".btn_9");
const btn_10 = document.querySelector(".btn_10");

const txt = document.querySelector("txt");
const dados = document.querySelector("dados");
const local = document.querySelector("local");
const ext = document.querySelector("ext");
const system = document.querySelector("system");
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

for (let i = 0; i < random(2, 5); i++) {
  const sn = document.createElement("sn");
  sn.classList.add("btn");
  const size = 80;

  sn.innerHTML = "<h2 class='txt1'>Sistema Nervoso</h2>"

  const position = random(-2, 98);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  sn.style.width = `${size}px`;
  sn.style.height = `${size}px`;
  sn.style.bottom = `-${size}px`;

  sn.style.left = `${position}%`;

  sn.style.animationDelay = `${delay}s`;
  sn.style.animationDuration = `${duration}s`;

  sn.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  sn.addEventListener("click", (event) => {
    event.preventDefault();
    dados.style.display = "flex"
    system.innerHTML = "Nervoso";
    btn_1.style.display = "flex";
    btn_2.style.display = "flex";
    btn_3.style.display = "flex";
    btn_6.style.display = "flex";
    btn_7.style.display = "flex";
    btn_8.style.display = "flex";
    btn_1.innerHTML = "<h2>Sistema Nervoso Central</h2>";
    btn_2.innerHTML = "<h2>Encéfalo</h2>";
    btn_3.innerHTML = "<h2>Medula Espinal</h2>";
    btn_6.innerHTML = "<h2>Sistema Nervoso Periférico</h2>";
    btn_7.innerHTML = "<h2>Nervos</h2>";
    btn_8.innerHTML = "<h2>Gânglios</h2>";
    btn_4.style.display = "none";
    btn_5.style.display = "none";
    btn_9.style.display = "none";
    btn_10.style.display = "none";
    txt.innerHTML = "<h2>O sistema nervoso está relacionado com a compreensão, percepção e resposta aos estímulos internos e do ambiente que nos rodeia.Podemos dividir o sistema nervoso em duas partes: o sistema nervoso central e periférico. Fazem parte do SNC o encéfalo e a medula espinal. E já no SNP, são os nervos e gânglios</h2>"
  })

  ulSquares.appendChild(sn);
} 

for (let i = 0; i < random(2, 5); i++) {
    const sd = document.createElement("sd");
    sd.classList.add("btn");
    const size = 100;
    sd.innerHTML = "<h2 class='txt2'>Sistema Digestório</h2>"
  
    const position = random(-2, 98);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sd.style.width = `${size}px`;
    sd.style.height = `${size}px`;
    sd.style.bottom = `-${size}px`;
  
    sd.style.left = `${position}%`;
  
    sd.style.animationDelay = `${delay}s`;
    sd.style.animationDuration = `${duration}s`;
  
    sd.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    sd.addEventListener("click", (event) => {
      event.preventDefault();
      dados.style.display = "flex";
      system.innerHTML = "Digestório";
      btn_1.style.display = "flex";
      btn_2.style.display = "flex";
      btn_3.style.display = "flex";
      btn_4.style.display = "flex";
      btn_5.style.display = "flex";
      btn_6.style.display = "flex";
      btn_7.style.display = "flex";
      btn_8.style.display = "flex";
      btn_9.style.display = "flex";
      btn_1.innerHTML = "<h2>Boca</h2>";
      btn_2.innerHTML = "<h2>Faringe</h2>";
      btn_3.innerHTML = "<h2>Esôfago</h2>";
      btn_4.innerHTML = "<h2>Estômago</h2>";
      btn_5.innerHTML = "<h2>Intestino Delgado</h2>";
      btn_6.innerHTML = "<h2>Intestino Grosso</h2>";
      btn_7.innerHTML = "<h2>Glândulas Salivares</h2>";
      btn_8.innerHTML = "<h2>Fígado</h2>";
      btn_9.innerHTML = "<h2>Pâncreas</h2>";
      btn_10.style.display = "none";
      txt.innerHTML = "<h2>Apresenta órgãos especializados na quebra dos alimentos em partículas menores e no aproveitamento dos nutrientes neles presentes. Esse sistema é também responsável por eliminar o material que não foi digerido. O sistema digestório humano é formado por uma espécie de canal alimentar, o qual se comunica com várias glândulas acessórias que liberam dentro dele substâncias essenciais para o processo de digestão.</h2>"
    })

    ulSquares.appendChild(sd);
  }

  for (let i = 0; i < random(2, 5); i++) {
    const se = document.createElement("se");
    se.classList.add("btn");
    const size = 80;
    se.innerHTML = "<h2 class='txt3'>Sistema Excretor</h2>"
  
    const position = random(-2, 98);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    se.style.width = `${size}px`;
    se.style.height = `${size}px`;
    se.style.bottom = `-${size}px`;
  
    se.style.left = `${position}%`;
  
    se.style.animationDelay = `${delay}s`;
    se.style.animationDuration = `${duration}s`;
  
    se.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    se.addEventListener("click", (event) => {
      event.preventDefault();
      dados.style.display = "flex";
      system.innerHTML = "Excretor";
      btn_1.style.display = "flex";
      btn_2.style.display = "flex";
      btn_3.style.display = "flex";
      btn_4.style.display = "flex";
      btn_1.innerHTML = "<h2>Rins</h2>";
      btn_2.innerHTML = "<h2>Ureteres</h2>";
      btn_3.innerHTML = "<h2>Bexiga</h2>";
      btn_4.innerHTML = "<h2>Uretra</h2>";
      btn_5.style.display = "none";
      btn_6.style.display = "none";
      btn_7.style.display = "none";
      btn_8.style.display = "none";
      btn_9.style.display = "none";
      btn_10.style.display = "none";
      txt.innerHTML = "<h2>O sistema excretor é formado pelo conjunto de órgãos que atuam no processo de “limpeza” do organismo. Esses órgãos atuam de modo a eliminar as substâncias tóxicas ou que estão em nível elevado na circulação sanguínea. O processo de excreção acontece através do líquido denominado urina. Por isso, o sistema excretor também é conhecido como sistema ou aparelho urinário. A excreção garante a homeostase - equilíbrio interno do organismo. Ela faz isso por meio do controle do volume de água, eliminação dos resíduos resultantes da quebra de proteínas e do ácido nucleico.</h2>"
    })

    ulSquares.appendChild(se);
  }

  for (let i = 0; i < random(2, 5); i++) {
    const sc = document.createElement("sc");
    sc.classList.add("btn");
    const size = 120;
    sc.innerHTML = "<h2 class='txt4'>Sistema Cardiovascular</h2>"
  
    const position = random(-2, 98);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sc.style.width = `${size}px`;
    sc.style.height = `${size}px`;
    sc.style.bottom = `-${size}px`;
  
    sc.style.left = `${position}%`;
  
    sc.style.animationDelay = `${delay}s`;
    sc.style.animationDuration = `${duration}s`;

    sc.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
    sc.addEventListener("click", (event) => {
      event.preventDefault();
      dados.style.display = "flex";
      system.innerHTML = "Cardiovascular";
      btn_1.style.display = "flex";
      btn_2.style.display = "flex";
      btn_3.style.display = "flex";
      btn_4.style.display = "flex";
      btn_5.style.display = "flex";
      btn_6.style.display = "flex";
      btn_7.style.display = "flex";
      btn_8.style.display = "flex";
      btn_9.style.display = "flex";
      btn_1.innerHTML = "<h2>Vasos Sanguíneos</h2>";
      btn_2.innerHTML = "<h2>Veias</h2>";
      btn_3.innerHTML = "<h2>Artérias</h2>";
      btn_4.innerHTML = "<h2>Capilares</h2>";
      btn_5.innerHTML = "<h2>Coração</h2>";
      btn_6.innerHTML = "<h2>Átrios</h2>";
      btn_7.innerHTML = "<h2>Ventrículos</h2>";
      btn_8.innerHTML = "<h2>Valva Esquerda</h2>";
      btn_9.innerHTML = "<h2>Valva Direita</h2>";
      btn_10.style.display = "none";
      txt.innerHTML = "<h2>O sistema cardiovascular humano é formado por uma certa quantidade de orgãos que trabalham juntos para garantir que todas as células do corpo recebam nutrientes e oxigênio.</h2>"

      btn_1.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>Uma rede de tubos que transporta sangue, divididos em artérias, veias e capilares.</h2>"
      })

      btn_2.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>São vasos responsáveis por levar o sangue do corpo para o coração. Também possuem três túnicas, porém são menos espessas que as artérias. Esses vasos apresentam valvas que se abrem no sentido do coração, impedindo, assim, que ocorra um refluxo. A pressão sanguínea nas veias é relativamente baixa.</h2>"
      })

      btn_3.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>São responsáveis por transportar o sangue do coração para o corpo. Apresentam paredes grossas formadas por três camadas de tecidos (túnicas). Paredes elásticas e fortes são essenciais para assegurar o transporte do sangue, que está sendo levado sob alta pressão. A medida que se afastam do coração, as artérias diminuem seu calibre, formando ramos mais finos que recebem o nome de arteríolas, que, por sua vez, ramificam-se em capilares.</h2>"
      })

      btn_4.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>São vasos de pequeno calibre que apresentam parede formada por uma única camada de célula, o que permite a troca de substância entre a corrente sanguínea e o líquido intersticial.</h2>"
      })

      btn_5.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>É um órgão musculoso responsável por impulsionar o sangue pelo corpo. Ele é encontrado entre os dois pulmões e sobre o diafragma, com aproximadamente dois terços de sua massa mais alinhados à esquerda. Esse órgão é revestido por um tecido muscular cardíaco chamado de miocárdio e, internamente, é dividido em quatro câmaras: dois átrios e dois ventrículos.</h2>"
      })

      btn_6.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>As duas cavidades superiores são chamadas de átrios, que possuem paredes mais finas que as dos ventrículos, pois eles bombeiam sangue apenas para os ventrículos.</h2>"
      })

      btn_7.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>Os ventrículos bombeiam sangue para o corpo inteiro após o recebimento do sangue vindo dos átrios.</h2>"
      })

      btn_8.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>Faz a comunicação entre o átrio esquerdo com o ventrículo esquerdo.</h2>"
      })

      btn_9.addEventListener("click", (event) => {
        event.preventDefault();
        txt.innerHTML = "<h2>Faz a comunicação entre o átrio direito com o ventrículo direito.</h2>"
      })
    })

    ulSquares.appendChild(sc);
  }

  for (let i = 0; i < random(2, 5); i++) {
    const sen = document.createElement("sen");
    sen.classList.add("btn");
    const size = 100;
    sen.innerHTML = "<h2 class='txt5'>Sistema Endocrino</h2>"
  
    const position = random(-2, 98);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
  
    sen.style.width = `${size}px`;
    sen.style.height = `${size}px`;
    sen.style.bottom = `-${size}px`;
  
    sen.style.left = `${position}%`;
  
    sen.style.animationDelay = `${delay}s`;
    sen.style.animationDuration = `${duration}s`;
  
    sen.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    sen.addEventListener("click", (event) => {
      event.preventDefault();
      dados.style.display = "flex";
      system.innerHTML = "Endocrino";
      btn_1.style.display = "flex";
      btn_2.style.display = "flex";
      btn_3.style.display = "flex";
      btn_4.style.display = "flex";
      btn_5.style.display = "flex";
      btn_6.style.display = "flex";
      btn_1.innerHTML = "<h2>Hipofíse</h2>"
      btn_2.innerHTML = "<h2>Tireoide</h2>"
      btn_3.innerHTML = "<h2>Paratireoides</h2>"
      btn_4.innerHTML = "<h2>Timo</h2>"
      btn_5.innerHTML = "<h2>Pâncreas</h2>"
      btn_6.innerHTML = "<h2>Glândulas Sexuais</h2>"
      btn_7.style.display = "none";
      btn_8.style.display = "none";
      btn_9.style.display = "none";
      btn_10.style.display = "none";
      txt.innerHTML = "<h2>O Sistema Endócrino é o conjunto de glândulas responsáveis pela produção dos hormônios que são lançados no sangue e percorrem o corpo até chegar aos órgãos-alvo sobre os quais atuam. Junto com o sistema nervoso, o sistema endócrino coordena todas as funções do nosso corpo.</h2>"
    })

    ulSquares.appendChild(sen);
  }

  ext.addEventListener("click", (event) => {
    event.preventDefault();
    dados.style.display = "none";
  })