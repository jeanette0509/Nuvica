      function scrollArticles(direction) {
            const container = document.getElementById('articlesScroll');
            const scrollAmount = 300; 
            
            if (direction > 0) {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
        
 
        document.addEventListener('DOMContentLoaded', function() {
   
            console.log('Website loaded successfully');
        });