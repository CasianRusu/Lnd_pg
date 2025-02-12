function scrollToNextSection() {
    const nextSection = document.querySelector('#next-section1');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToNextSection2() {
    const nextSection = document.querySelector('#next-section2');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}


$(document).ready(function () {
    let zindex = 10;

    $("div.card").click(function (e) {
        if ($(e.target).is("button")) {
            e.preventDefault();
        }

        let isShowing = $(this).hasClass("show");

        if ($("div.cards").hasClass("showing")) {
            $("div.card").removeClass("focus blur");
            $("div.card.show").removeClass("show");

            if (isShowing) {
                $("div.cards").removeClass("showing");
            } else {
                $(this).css({ zIndex: zindex }).addClass("show focus");
                $("div.card").not(this).addClass("blur");
            }
        } else {
            $("div.cards").addClass("showing");
            $(this).css({ zIndex: zindex }).addClass("show focus");
            $("div.card").not(this).addClass("blur");
        }

        zindex++;
    });
});


function toggleJoinUsForm() {
const formContainer = document.getElementById('join-us-form');
if (formContainer.classList.contains('hidden')) {
formContainer.classList.remove('hidden');
formContainer.classList.add('visible');
} else {
formContainer.classList.add('hidden');
formContainer.classList.remove('visible');
}
}




document.querySelectorAll('.read-more').forEach(item => {
    item.addEventListener('click', function() {
      const wrapper = this.parentElement; 
      wrapper.classList.toggle('expanded');
      if (wrapper.classList.contains('expanded')) {
        this.textContent = 'Read less';
      } else {
        this.textContent = 'Read more';
      }
    });
  });



  // Scroll function to target section by ID
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // hide the menu after clicking
    const menu = document.getElementById('nav-menu');
    if (menu.classList.contains('visible')) {
      menu.classList.remove('visible');
    }
  }
  
  
  // Get the hamburger element and nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle hamburger active state and menu visibility
hamburger.addEventListener('click', function() {
  // Toggle active class on the hamburger icon
  this.classList.toggle('active');

  // Toggle the nav menu visibility
  navMenu.classList.toggle('visible');
});

// Scroll function to target section by ID
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  // Optionally, hide the menu after clicking
  if (navMenu.classList.contains('visible')) {
    navMenu.classList.remove('visible');
  }
  // Also remove the active state from the hamburger icon
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
  }
}


window.addEventListener('scroll', function() {
    const navTitle = document.querySelector('.nav-title');
    if (window.scrollY > 50) {
      navTitle.style.display = 'none';
    } else {
      navTitle.style.display = 'block';
    }
  });

  window.addEventListener('scroll', function() {
    const navTitle = document.querySelector('.image-row');
    if (window.scrollY > 150) {
      navTitle.style.display = 'none';
    } else {
      navTitle.style.display = 'flex';
    }
  });

  window.addEventListener('scroll', function() {
    const navTitle = document.querySelector('.image-row2');
    if (window.scrollY > 150) {
      navTitle.style.display = 'none';
    } else {
      navTitle.style.display = 'flex';
    }
  });


  // Ensure this script runs after the DOM is loaded
/*document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.partners-grid');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentIndex = 0;
  
    // Assume all partner-box elements have the same width
    const partnerBox = document.querySelector('.partner-box');
    const partnerWidth = partnerBox ? partnerBox.offsetWidth + 10 : 0; // add extra for padding/margin (adjust as needed)
    
    // Calculate how many partners can be visible in the container at once
    const containerWidth = document.querySelector('.partners-container').offsetWidth;
    const visibleCount = Math.floor(containerWidth / partnerWidth);
    
    // Total number of partner items
    const totalItems = document.querySelectorAll('.partner-box').length;
    
    // Calculate maximum index (ensure we don't scroll past the last item)
    const maxIndex = totalItems - visibleCount;
    
    rightBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        grid.style.transform = `translateX(-${currentIndex * partnerWidth}px)`;
      }
    });
    
    leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        grid.style.transform = `translateX(-${currentIndex * partnerWidth}px)`;
      }
    });
  });*/

  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.partners-grid');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentIndex = 0;
    
    // Function to calculate slider parameters
    function getSliderParams() {
      const partnerBox = document.querySelector('.partner-box');
      // Ensure the partner-box exists; add extra for margin/padding if needed (e.g., 20px)
      const partnerWidth = partnerBox ? partnerBox.offsetWidth + 10 : 0;
      const containerWidth = document.querySelector('.partners-container').offsetWidth;
      const visibleCount = Math.floor(containerWidth / partnerWidth);
      const totalItems = document.querySelectorAll('.partner-box').length;
      const maxIndex = totalItems - visibleCount;
      return { partnerWidth, visibleCount, totalItems, maxIndex };
    }
    
    // Update slider transform based on currentIndex
    function updateSlider() {
      const { partnerWidth } = getSliderParams();
      grid.style.transform = `translateX(-${currentIndex * partnerWidth}px)`;
    }
    
    // Attach click events with recalculation
    rightBtn.addEventListener('click', () => {
      const { maxIndex } = getSliderParams();
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });
    
    leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    // Recalculate slider parameters on window resize
    window.addEventListener('resize', () => {
      // Optionally reset the index if needed:
      currentIndex = 0;
      updateSlider();
    });
  });
  

  
  