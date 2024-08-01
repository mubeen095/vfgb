jQuery("#carousel,#carousel1").owlCarousel({
          autoplay: false,   
          rewind: true, /* use rewind if you don't want loop */
          margin: 0,
           /*
          animateOut: 'fadeOut', 
          animateIn: 'fadeIn', 
          */
          responsiveClass: true,
          autoHeight: true,
          autoplayTimeout: 3000,
          lazyLoad: true,
          lazyLoadEager:1,
          smartSpeed: 800,
          nav: true,
          dotsEach: 1,
          responsive: {
            0: {        
              items: 1      
            },                  
                                
            600: {              
              items: 2      
            },          
                    
            1024: {
              items: 3
            },
          }
});                 
