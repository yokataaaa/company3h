const portfolioContainer = document.querySelector('.portfolio-container');
const detailsLink = document.querySelectorAll('.portfolio-info .details-link');
const detailIframe = document.querySelector('.detail-iframe');

portfolioContainer.addEventListener('click', (e) => {
  if (e.target.dataset.id === 'solar') {
    let detailIframeSrc = 'portfolio-details.html';
    detailIframe.setAttribute('src', detailIframeSrc);
    console.log(e.target.dataset.id);
    console.log(detailIframe);
  }
  else if (e.target.dataset.id === 'equipment') {
    let detailIframeSrc = 'portfolio-details1.html';
    detailIframe.setAttribute('src', detailIframeSrc);
    console.log(e.target.dataset.id);
    console.log(detailIframe);
  }
  else if (e.target.dataset.id === 'customize') {
    let detailIframeSrc = 'portfolio-details2.html';
    detailIframe.setAttribute('src', detailIframeSrc);
    console.log(e.target.dataset.id);
    console.log(detailIframe);
  }
});