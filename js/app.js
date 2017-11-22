(function () {
  const form = document.querySelector('form');
  const treeView = document.querySelector('.tree-view');
  const structure = document.querySelectorAll('input[name="structure"]');
  const simpleSet = document.querySelectorAll('.simple-set');
  const complicatedSet = document.querySelectorAll('.complicated-set');
  let itsComplicated = false;
  let newUl = document.createElement('ul');
  let newLi = document.createElement('li');
  let mainFolder = treeView.children[0].children[0];
  const element = '<ul class="complicated-folder"><li>src</li><li>dist</li></ul>';

  for (let i = 0, len = structure.length; i < len; i++) {
    structure[i].addEventListener('change', function () {
      if (this.value.toUpperCase() === 'COMPLICATED') {
        for (let j = 0, setLength = simpleSet.length; j < setLength; j++) {
          simpleSet[j].classList.add('hidden');
        }
        for (let j = 0, setLength = complicatedSet.length; j < setLength; j++) {
          complicatedSet[j].classList.remove('hidden');
        }

        mainFolder.insertAdjacentHTML('beforeend', element);

        itsComplicated = true;
      } else {
        const complicatedFolder = document.querySelector('.complicated-folder');
        for (let j = 0, setLength = simpleSet.length; j < setLength; j++) {
          simpleSet[j].classList.remove('hidden');
        }
        for (let j = 0, setLength = complicatedSet.length; j < setLength; j++) {
          complicatedSet[j].classList.add('hidden');
        }
        itsComplicated = false;
      }
    })

  }

})();
