 let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains3 = document.getElementById('mountains3');
    let mountains4 = document.getElementById('mountains4');
    let river = document.getElementById('river');
    let boat = document.getElementById('boat');
    let nouvil = document.querySelector('.nouvil');
    let mainSection = document.querySelector('.main');

    window.onscroll = function() {
      let value = scrollY;
      stars.style.left = value + 'px';
      moon.style.top = value * 4 + 'px';
      mountains3.style.top = value * 2 + 'px';
      mountains4.style.top = value * 1.5 + 'px';
      river.style.top = value + 'px';
      boat.style.top = value + 'px';
      boat.style.left = value * 3 + 'px';
      nouvil.style.fontSize = value < 67 ? value + 'px' : '67px';
      nouvil.style.position = value >= 67 ? 'fixed' : 'absolute';
      nouvil.style.display = (value >= 487) ? 'none' : 'block';
      mainSection.style.background = value >= 127 
        ? 'linear-gradient(rgb(39, 107, 127), rgb(29, 65, 85))' 
        : 'linear-gradient(rgb(41, 2, 25), rgb(44, 4, 54))';
    }