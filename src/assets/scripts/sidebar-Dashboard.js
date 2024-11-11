if (window.location.pathname.includes('/dashboard')) {

  function toggleSideBar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContainer = document.querySelector('.main-container');
    const nameSite = document.querySelector('.site-name');
    const imgLogo = document.querySelector('.logo-img');
    const dashboard = document.querySelector('.dashboard');

    sidebar.classList.toggle('closed');

    if (sidebar.classList.contains('closed')) {
        mainContainer.style.marginLeft = '110px';
        nameSite.style.display = 'none';
        imgLogo.style.width = '65px';
        imgLogo.style.height = '65px';
        dashboard.classList.add('maximized');
    } else {
        mainContainer.style.marginLeft = '270px';
        nameSite.style.display = 'flex';
        imgLogo.style.width = '80px';
        imgLogo.style.height = '80px';
        dashboard.classList.remove('maximized');
    }
  }

  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', toggleSideBar);

  window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 674) {
        sidebar.classList.add('show-sidebar');
    } else {
        sidebar.classList.remove('show-sidebar');
    }
  });
}
