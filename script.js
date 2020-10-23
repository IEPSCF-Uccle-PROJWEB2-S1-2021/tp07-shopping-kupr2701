// Écrivez votre code JavaScript ici.
let lst = document.querySelector("ul");
let ipt = document.querySelector("input");
let btn = document.querySelector("button");

btn.onclick = function () {
  let valcourt = ipt.value;
  ipt.value = '';

  let lstli = document.createElement("li");
  let spnli = document.createElement("span");
  let btnli = document.createElement("button");

  lstli.appendChild(spnli);
  spnli.textContent = valcourt;
  lstli.appendChild(btnli);
  btnli.textContent = 'delete';
  lst.appendChild(lstli);

  btnli.onclick = function () {
    lst.removeChild(lstli);
  }
  ipt.focus();
}

