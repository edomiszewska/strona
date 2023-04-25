let id=0;
    const btns=document.querySelector(`input[type="submit"]`)
   btns.addEventListener(`click`, function(evt){
    evt.preventDefault();
    const opiekun=document.querySelector(`input[name="opiekun"]:checked`).id

    const data1=document.querySelector(`#date`).value

    const temat=document.querySelector(`#temat`).value;

    const tekst=document.querySelector(`#sprawozd`).value

    const czyzrobione=Boolean(document.querySelector(`#rel:checked`))

    const hour=parseInt(document.querySelector(`#hour`).value)

    const opanowanie=document.querySelector(`#zakres`).value

   id++;

    const display=document.querySelector(`.container`)

    const element=document.createElement(`fieldset`)

    element.id=id;
    element.innerHTML=`data: ${data1} <br> opiekun: ${opiekun} <br> temat: ${temat} <br>sprawozdanie: ${tekst}
     <br> ile godzin: ${hour} <br> stopień opanowania materiału: ${opanowanie}`;



    display.appendChild(element)






   })



