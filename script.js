function mostrarExplicacao(id) {
    var divExplicativa = document.getElementById(id);
    if (divExplicativa.style.display === 'none') {
      divExplicativa.style.display = 'block';
    } else {
      divExplicativa.style.display = 'none';
    }
  }