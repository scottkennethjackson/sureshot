!(function(d) {
    let carouselSlide = 'carousel-slide';
    let items = document.getElementsByClassName(carouselSlide);
    let totalItems = items.length;
    let slide = 0;
    let moving = true;
    
    const setInitialClasses = () => {
        items[totalItems - 1].classList.add('prev');
        items[0].classList.add('active');
        items[1].classList.add('next');
    };

    const moveNext = () => {
        if (!moving) {
            if (slide === (totalItems - 1)) {
              slide = 0;
            } else {
              slide++;
            }
            
            moveCarouselTo(slide);
        };
    };

    const movePrev = () => {
        if (!moving) {
            if (slide === 0) {
              slide = (totalItems - 1);
            } else {
              slide--;
            }

            moveCarouselTo(slide);
        };
    };

    const setEventListeners = () => {
        let next = d.getElementsByClassName('next-btn')[0];
        let prev = d.getElementsByClassName('prev-btn')[0];
        
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    };

    const disableInteraction = () => {
        moving = true;
        
        setTimeout(function(){
            moving = false
        }, 500);
    };

    const moveCarouselTo = (slide) => {
        if(!moving) {
            disableInteraction();
            
            let newPrevious = slide - 1;
            let newNext = slide + 1;
            
            if (totalItems = 3) {
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                } else if (slide === (totalItems -1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                };
                
                items[newPrevious].className = carouselSlide + " prev";
                items[slide].className = carouselSlide + " active";
                items[newNext].className = carouselSlide + " next";
            };
        };
    };

    const initCarousel = () => {
        setInitialClasses();
        setEventListeners();
        setInterval(moveNext, 5000)

        moving = false;
    };

    initCarousel();
}(document));