console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});
// localstorage
function setData() {
  var i = localStorage.length;
  var datastorage = {
      titre: document.getElementById('titre').value,
      desc: document.getElementById('desc').value,
      montant: document.getElementById('montant').value,
      operator: document.getElementById('operator').value,
  };

  localStorage.setItem(i, JSON.stringify(datastorage));
}

let montantCredit = 0;
let montantDebit = 0;
for (let i = 0; i < localStorage.length; i++) {
  let obj = JSON.parse(localStorage.getItem(i));
  var img = '';

  if (obj.operator == 'credit') {
      img = 'sac-dargent';
      montantCredit = montantCredit + Number(obj.montant);
  } else {
      img = 'depenses';
      montantDebit = montantDebit + Number(obj.montant);
  }
  var solde = document.getElementById('solde');
  solde.innerHTML = montantCredit - montantDebit + '€';
// pourcentage

  for (let i = 0; i < localStorage.length; i++) {
      let obj = JSON.parse(localStorage.getItem(i));
      var soldefinal = montantCredit - montantDebit;
      var pourcentage = (soldefinal * 100) / obj.montant;
  }

  // html

  var html = ` 
  <div class="grid-container" >
              <div class="operation ${obj.operator}">
                  <div class="grid-x grid-padding-x align-middle">
                      <div class="cell shrink">
                          <div class="picto">
                              <img src="./assets/images/${img}.png" alt="${obj.operator}" />
                          </div>
                      </div>
                      <div class="cell auto">
                          <div>
                              <h2>${obj.titre}</h2>
                              <small>${obj.desc}</small>
                          </div>
                      </div>
                      <div class="cell small-3 text-right">
                          <div>
                              <p class="count">${obj.montant} €</p>
                              <small>${pourcentage.toFixed(2)}%</small>
                          </div>
                      </div>
                  </div>
              </div>
          </div>  `
      ;

  var replace = document.getElementById('grid-container');

  replace.insertAdjacentHTML('afterbegin', html);
}
