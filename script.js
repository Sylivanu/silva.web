// Add event listener to post slider
const postSlider = document.querySelector('.post-slider');

postSlider.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = postSlider.scrollLeft;

    // Get the width of a single post slide
    const postSlideWidth = postSlider.querySelector('.post-slide').offsetWidth;

    // Calculate the current slide index
    const currentIndex = Math.floor(scrollPosition / postSlideWidth);

    // Add active class to the current slide
    const postSlides = postSlider.querySelectorAll('.post-slide');
    postSlides.forEach((postSlide, index) => {
        if (index === currentIndex) {
            postSlide.classList.add('active');
        } else {
            postSlide.classList.remove('active');
        }
    });
});
