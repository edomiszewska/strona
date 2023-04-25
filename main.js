const form = document.querySelector("form");

const section = document.querySelector("section");

const but = document.querySelector('input[type="submit"]');

but.addEventListener("click", function (evt) {
  evt.preventDefault();

  const name = document.querySelector("#name").value;

  const surname = document.querySelector("#surname").value;

  const klasa = document.querySelector("#class").value;

  const rokszkol = document.querySelector("#year").value;

  const place = document.querySelector("#place").value;

  const date1 = document.querySelector("#date").value;

  const date2 = document.querySelector("#date2").value;

  const display = document.querySelector("#metryka");

  display.innerHTML = `<h2>Dane ucznia</h2>
     <p>Imię i nazwisko: ${name} ${surname}</p>
     <p>Klasa: ${klasa} Rok szkolny: ${rokszkol}</p>
     <p>Odbytej w: ${place} </p>
     <p>Odbytej w terminie: od ${date1} do ${date2}</p>
     <button id="edytuj">edytuj</button>`;

  form.classList.toggle("klasa1");
  section.classList.toggle("klasa1");
  const butedit = document.querySelector("#edytuj");
  butedit.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("klasa1");
    section.classList.toggle("klasa1");
  });
});
