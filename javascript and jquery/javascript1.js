// typing animating script
var typed = new Typed(".typing", {
  strings: [
    "youtuber",
    "developer",
    "blogger",
    "designer",
    "freelancer",
    "logo designer",
  ],
  typedSpeed: 3000,
  backSpeed: 200,
  fadeOut: true,
  loop: true,
  cursorChar: "!",
});
var typed = new Typed(".typings", {
  strings: [
    "youtuber",
    "developer",
    "blogger",
    "designer",
    "freelancer",
    "logo designer",
  ],
  typedSpeed: 3000,
  backSpeed: 200,
  fadeOut: true,
  loop: true,
  cursorChar: "!",
});

//  login form strat here

$(document).ready(function () {
  $(document).on("click", "#login", function () {
    $(".form,sing").addClass("login-active");
  });
  $(document).on("click", ".sign-up-btn", function () {
    $(".form,.sing").addClass("sign-up-active").removeClass("login-active");
  });

  $(document).on("click", ".log-cancel", function () {
    $(".form").removeClass("login-active");
  });

  // Sing  up  form strat here

  $(document).on("click", "#mehedi", function () {
    $(".sing").addClass("sign-up-active");
  });

  $(document).on("click", ".already-acount ", function () {
    $(".sing").addClass("login-active").removeClass("sign-up-active");
  });

  $(document).on("click", ".log-cancel", function () {
    $(".sing,.form").removeClass("sign-up-active");
  });
});

// isotope script
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// coming soon script 1
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 11:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo1").innerHTML = "TIME FINESH";
  }
}, 1000);

// coming soon script 2
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo2").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo2").innerHTML = "TIME OVER";
  }
}, 1000);
// coming soon script 3
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo3").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo3").innerHTML = "TIME OVER";
  }
}, 1000);

// data connection
var a = 0;
$(window).scroll(function () {
  var oTop = $(".counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 40000,
          easing: "swing",
          step: function () {
            $this.text(commaSeparateNumber(Math.floor(this.countNum)));
          },
          complete: function () {
            $this.text(commaSeparateNumber(this.countNum));
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
  }
  return val;
}

// my team script
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}