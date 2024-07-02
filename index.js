
  function jumpToSection(n) {
    var tar = "target" + n;
    document.getElementById(tar).scrollIntoView();
  }

 
const dropdownContainer = document.getElementById('dropdown-container');
const toggleButton = document.getElementById('toggle-button');


toggleButton.addEventListener('click', () => {
  dropdownContainer.classList.toggle('show-dropdown');
});
