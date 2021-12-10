const portfolioContainer = document.querySelector('.portfolio-container');
const detailsLink = document.querySelectorAll('.portfolio-info .details-link');
const detailIframe = document.querySelector('.detail-iframe');

try {
  portfolioContainer.addEventListener('click', (e) => {
    if (e.target.dataset.id === 'solar') {
      let detailIframeSrc = 'portfolio-details.html';
      detailIframe.setAttribute('src', detailIframeSrc);
    }
    else if (e.target.dataset.id === 'equipment') {
      let detailIframeSrc = 'portfolio-details1.html';
      detailIframe.setAttribute('src', detailIframeSrc);
    }
    else if (e.target.dataset.id === 'customize') {
      let detailIframeSrc = 'portfolio-details2.html';
      detailIframe.setAttribute('src', detailIframeSrc);
    }
  });
} catch(error) {
  if (typeof (history.pushState) != "undefined") {   
    window.parent.history.pushState(null, null, 'index.html');
    // ex) 첫 페이지 www.example.com  -> 'index.html' -> www.example.com/index.html
  } else {
    // 브라우저가 pushState 지원하지 않는 경우 처리
    console.log('undefind');
  }
}