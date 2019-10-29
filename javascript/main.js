
var slideshow     = document.querySelector('.slideshow'),
	slideshowImgs = document.querySelectorAll('.slideshow > img'),
	chevronLeft   = document.querySelector('.chevron-left'),
    chevronRight  = document.querySelector('.chevron-right'),
    imageIndex = 0;

slideshow.style.height = slideshowImgs[imageIndex].height + 'px';

window.addEventListener('resize', function () {
	slideshow.style.height = slideshowImgs[imageIndex].height + 'px';
});

chevronLeft.style.display = 'none';


function slideshowRight() {
	chevronLeft.style.display = 'block';
	
	if (imageIndex < slideshowImgs.length - 1) {
		slideshowImgs[imageIndex].style.transform = 'translateX(100%)';
		slideshowImgs[imageIndex + 1].style.transform = 'translateX(0)';
		imageIndex++;
		if (imageIndex == slideshowImgs.length - 1) {
			chevronRight.style.display = 'none';
		}
	}
}

function slideshowLeft() {
	chevronRight.style.display = 'block';
	
	if (imageIndex > 0) {
		slideshowImgs[imageIndex].style.transform = 'translateX(-100%)';
		slideshowImgs[imageIndex - 1].style.transform = 'translateX(0)';
		imageIndex--;	
		if (imageIndex == 0) {
			chevronLeft.style.display = 'none';
		}	
	}
}

chevronRight.addEventListener('click', slideshowRight);
chevronLeft.addEventListener('click', slideshowLeft);