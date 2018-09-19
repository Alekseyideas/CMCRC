export const Loader = ()=> {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.remove();
    }, 1000)
  })
};