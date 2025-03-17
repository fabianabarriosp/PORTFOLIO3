// Selects all elements with the "reveal" class
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Listens to the scroll event
window.addEventListener('scroll', revealOnScroll);

// Triggers on page load to reveal elements already in view
revealOnScroll();


//Project Modals
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

//Projects section 
// Toggle project dropdown view
document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function() {
      // Toggle the dropdown for the clicked project
      this.classList.toggle('active');
    });
  });
  
  // Toggle additional text visibility (Ideation, Design, Reflection)
  function toggleDetails(id) {
    const moreText = document.getElementById(id);
    const btn = document.querySelector(`#${id}`).previousElementSibling;
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      btn.classList.add('open');
    } else {
      moreText.style.display = 'none';
      btn.classList.remove('open');
    }
  }
  
  // Go back to the original project boxes
  function backToProjects() {
    document.querySelectorAll('.project-box').forEach(box => {
      box.classList.remove('active');
    });
  }

  //PROCESS PAGES
  function openProcessPage(projectId) {
    if (projectId === 1) {
      window.location.href = 'process1.html';
    } else if (projectId === 2) {
      window.location.href = 'process2.html';
    } else if (projectId === 3) {
      window.location.href = 'process3.html';
    }
  }

  //process dropdown
         // Get all dropdowns
         const dropdowns = document.querySelectorAll('.dropdown');

         dropdowns.forEach(dropdown => {
             dropdown.addEventListener('click', () => {
                 dropdown.classList.toggle('active');
             });
         });
