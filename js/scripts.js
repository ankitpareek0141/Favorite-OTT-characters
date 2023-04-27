
/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
function loadAllData(characters) {
  $('#all-characters').html('');
  characters.forEach(character => {
    $('#all-characters').append(`
      <div class="col">
        <div class="card h-100">
            <img data-img="${character.image}" data-lazy="${character.image}" class="card-img-top" style="
                object-fit: contain;
                width: auto;
                height: 300px;
                background-color: black;
            " alt="..." /> 
          <div class="card-body">
            <h5 class="card-title">${character.title}</h5>
            <p class="card-text">
              ${character.description}
            </p>
          </div>
        </div>
      </div>
    `);
  });

  let len = characters.length;

  if(!len) {
    $('#all-characters').html('<div class="w-100">No match found!</div>');
  }

  let classNames = 'row-cols-lg-3 row-cols-md-1 row-cols-md-2 row-cols-md-3';

  if(len > 2) {
    $('#all-characters').removeClass(classNames).addClass('row-cols-lg-3 row-cols-md-2');
  }

  if(len < 3) {
    $('#all-characters').removeClass(classNames).addClass('row-cols-md-2');
  }

  if(len < 2) {
    $('#all-characters').removeClass(classNames).addClass('row-cols-md-1');
  }
  let bp = BiggerPicture({
    target: document.body,
    noPinch: true
  })

  let sScale = 0.5;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    sScale = 1;
  }

  // open (will be a child of the target element above)

  $('#all-characters img').on('click', function (e) {
    e.preventDefault()
    bp.open({
      items: e.target,
      scale: sScale
    })
  })
  addLazyLoading();
}

$('#SearchTxt').on('keyup', function () {
  let str = $(this).val();
  var re = new RegExp(`.*${str}.*`, 'i');
  var found = ALL_CHARACTERS.filter(function (character) { return re.test(character.title) || re.test(character.description); });
  loadAllData(found);
});

window.addEventListener('DOMContentLoaded', event => {

  loadAllData(ALL_CHARACTERS);

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 72,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });




});

//Dark mode

var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

function checktheme() {
  //check storage if dark mode was on or off
  if (sessionStorage.getItem("mode") == "dark") {
    setBulb(false);
    darkmode(); //if dark mode was on, run this funtion
  } else {
    setBulb(true);
    nodark(); //else run this funtion
  }
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    setBulb(false);
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    setBulb(true);
    nodark(); //else run this funtion
  }
});

$('#lightbulb').on('click', function () {
  $('#ChangeTheme').click();
});

function setBulb(isActive) {
  if(isActive) {
    $('#lightbulb').next().text('Light Mode');
    $('.divider-custom-line').css('background-color', '#2c3e50');
    $('.divider-custom-icon').css('color', '#2c3e50');
    $('#lightbulb').css('background-image',`url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0%29 --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 480.8 480.8' style='enable-background:new 0 0 480.8 480.8;' xml:space='preserve'%3E%3Cpath style='fill:%23FFD517;' d='M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6 c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z'/%3E%3Cg%3E%3Cpath style='fill:%23E5E5E5;' d='M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z'/%3E%3Cpath style='fill:%23E5E5E5;' d='M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23210B20;' d='M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6 c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4 s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2 c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4 c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z'/%3E%3Cpath style='fill:%23210B20;' d='M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2 c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z'/%3E%3Cpath style='fill:%23210B20;' d='M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4 c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z'/%3E%3Cpath style='fill:%23210B20;' d='M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2 c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z'/%3E%3Cpath style='fill:%23210B20;' d='M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6 C244.712,66.4,247.912,63.2,247.912,58.8z'/%3E%3Cpath style='fill:%23210B20;' d='M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2 c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z'/%3E%3Cpath style='fill:%23210B20;' d='M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4 c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z'/%3E%3Cpath style='fill:%23210B20;' d='M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4 l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z'/%3E%3Cpath style='fill:%23210B20;' d='M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2 l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")`);
  } else {
    $('#lightbulb').next().text('Dark Mode');
    $('.divider-custom-line').css('background-color', '#fff');
    $('.divider-custom-icon').css('color', '#fff');
    $('#lightbulb').css('background-image',`url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0%29 --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 480.8 480.8' style='enable-background:new 0 0 480.8 480.8;' xml:space='preserve'%3E%3Cpath style='fill:%23ffffff;' d='M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6 c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z'/%3E%3Cg%3E%3Cpath style='fill:%23E5E5E5;' d='M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z'/%3E%3Cpath style='fill:%23E5E5E5;' d='M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23210B20;' d='M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6 c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4 s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2 c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4 c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z'/%3E%3Cpath style='fill:%23210B20;' d='M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2 c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z'/%3E%3Cpath style='fill:%23210B20;' d='M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4 c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z'/%3E%3Cpath style='fill:%23210B20;' d='M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2 c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z'/%3E%3Cpath style='fill-opacity:0;' d='M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6 C244.712,66.4,247.912,63.2,247.912,58.8z'/%3E%3Cpath style='fill-opacity:0;' d='M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2 c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z'/%3E%3Cpath style='fill-opacity:0;' d='M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4 c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z'/%3E%3Cpath style='fill-opacity:0;' d='M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4 l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z'/%3E%3Cpath style='fill-opacity:0;' d='M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2 l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")`);
  }
}

//function for checkbox when checkbox is checked
function darkmode() {
  const body = document.querySelector('body');
  const cards = document.querySelectorAll('.card');
  body.classList.add('dark-mode');
  cards.forEach(card => card.classList.add('dark-box'));
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  const body = document.querySelector('body');
  const cards = document.querySelectorAll('.card')
  document.body.classList.remove("dark-mode"); //remove added class from body tag
  cards.forEach(card => card.classList.remove('dark-box'))
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
/// SCROLL TO TOP
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


function addLazyLoading() {
  const images = document.querySelectorAll('.card-img-top');

  const lazyLoad = target => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute('data-lazy');
          image.setAttribute('src', src);
          observer.disconnect();
        }
      })
    });
    intersectionObserver.observe(target);
  }

  images.forEach(lazyLoad);
}