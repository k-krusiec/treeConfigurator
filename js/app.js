(function () {
  const form = document.querySelector('form');
  const input = form.querySelectorAll('input');
  let structure = {};

  console.log(form);
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }

  input[0].addEventListener('change', function () {
    structure.complicated = false;
    structure.simple = input[0].checked;
    console.log(structure);
  })

  input[1].addEventListener('change', function () {
    structure.simple = false;
    structure.complicated = input[1].checked;
    console.log(structure);
  })

  input[2].addEventListener('change', function () {
    structure.multiple = false;
    structure.single = input[2].checked;
    console.log(structure);
  })

  input[3].addEventListener('change', function () {
    structure.single = false;
    structure.multiple = input[3].checked;
    console.log(structure);
  })

  input[4].addEventListener('change', function () {
    structure.css = input[4].checked;
    console.log(structure);
  })

  input[5].addEventListener('change', function () {
    structure.images = input[5].checked;
    console.log(structure);
  })

  input[6].addEventListener('change', function () {
    structure.fonts = input[6].checked;
    console.log(structure);
  })

  input[7].addEventListener('change', function () {
    structure.javascript = input[7].checked;
    console.log(structure);
  })

  input[8].addEventListener('change', function () {
    structure.favicon = input[8].checked;
    console.log(structure);
  })

})();
