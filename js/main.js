document.addEventListener('DOMContentLoaded', function () {
	let buttons = document.querySelectorAll('.list-button')

	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			if (button.classList.contains('clicked')) {
				button.classList.remove('clicked')
				button.textContent = 'Active'
			} else {
				button.classList.add('clicked')
				button.textContent = 'Inactive'
			}
		})
	})
})

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.querySelectorAll('.sidebar__list-item');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      let targetPage = document.getElementById(button.dataset.target);
      let isActive = targetPage.classList.contains('active');

      if (!isActive) {
        let activePage = document.querySelector('.page.active');
        if (activePage) {
          activePage.classList.remove('active');
          document.querySelector('.sidebar__list-item.active').classList.remove('active');
        }
        targetPage.classList.add('active');
        button.classList.add('active');
      } else {
        targetPage.classList.remove('active');
        button.classList.remove('active');
      }
    });
  });

  let page1 = document.getElementById('page1');
  let buttonForPage1 = document.querySelector('[data-target="page1"]');
  
  if (page1 && buttonForPage1) {
    page1.classList.add('active');
    buttonForPage1.classList.add('active');
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const pagination = document.querySelector('.pagination');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  const itemsPerPage = 1; // Сколько слайдов показывать на странице
  let currentPage = 1;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i >= (index - 1) * itemsPerPage && i < index * itemsPerPage) {
        slide.style.display = 'block';
        slide.classList.add('active');
      } else {
        slide.style.display = 'none';
        slide.classList.remove('active'); 
      }
    });
  }

  function updatePagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(slides.length / itemsPerPage);

    const pages = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, totalPages);
      }
    }

    pages.forEach(page => {
      const button = document.createElement('button');
      if (page === '...') {
        button.textContent = '...';
        button.disabled = true;
      } else {
        button.textContent = page;
        button.addEventListener('click', function() {
          if (typeof page === 'number') {
            currentPage = page;
            showSlide(currentPage);
          } else if (page === '...') {
            const currentPageIndex = pages.indexOf(currentPage);
            if (currentPageIndex === 4) {
              currentPage = pages[currentPageIndex + 1];
            } else if (currentPageIndex === pages.length - 3) {
              currentPage = totalPages;
            } else {
              currentPage = pages[3];
            }
            showSlide(currentPage);
          }
          updatePagination();
        });
      }
      if (page === currentPage) {
        button.classList.add('active');
      }
      pagination.appendChild(button);
    });
  }

  prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      showSlide(currentPage);
      updatePagination();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentPage < Math.ceil(slides.length / itemsPerPage)) {
      currentPage++;
      showSlide(currentPage);
      updatePagination();
    }
  });

  showSlide(currentPage);
  updatePagination();
});
















