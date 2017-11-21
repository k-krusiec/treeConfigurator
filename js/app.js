(function () {
  const form = document.querySelector('form');
  const input = form.querySelectorAll('input');
  let structure = {};
  let key;
  let val;

  for (var i = 0; i < input.length - 1; i++) {
    key = input[i].name + '-' + input[i].value;
    val = input[i].checked;

    structure[key] = val;

    input[i].addEventListener('change', function () {
      console.log(key + " " + this.checked);
      console.log(this.type);
    })
  }

  console.log(structure);

})();
