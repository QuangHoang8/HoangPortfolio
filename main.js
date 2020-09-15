$(function () {
  $(".toggle-menu").click(function () {
    $(this).toggleClass("active");
    $(".menu-drawer").toggleClass("open");
  });
});

// Chạy skill bar
(function () {
  var skillEl = $("div.skill-bar-color"),
    skillElOffset = skillEl.offset().top / 2,
    documentEl = $(document);

  documentEl.on("scroll", function () {
    if (documentEl.scrollTop() > skillElOffset) {
      skillEl.addClass("animate-push");
    } else {
      skillEl.removeClass("animate-push");
    }
  });
})();

// Số tăng dần
function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = window.setInterval(updateNumber, 17);
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  var statsEl = $("div.stats"),
    statsElOffset = statsEl.offset().top / 2,
    documentEl = $(document);

  documentEl.on("scroll", function () {
    if (documentEl.scrollTop() > statsElOffset) {
      animateNumber(500, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById("client-count").innerText = formattedNumber;
      });
      animateNumber(92, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById("project-count").innerText = formattedNumber;
      });

      animateNumber(1500, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById("follower-count").innerText = formattedNumber;
      });
      animateNumber(32, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString();
        document.getElementById("award-count").innerText = formattedNumber;
      });
    }
  });
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              // $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
