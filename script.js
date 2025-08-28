  // ==-==  Event Listener For heart Icons ==-== // 

   const heartIcon = document.getElementsByClassName('heart-icon');

   for ( const heart of heartIcon) {
    
         heart.addEventListener('click', function() {
            
            let heartCount =parseInt (document.getElementById('heart-count').innerText);
           
            document.getElementById('heart-count')
                .innerText = heartCount + 1; 

         })
  }

// ==-== Event listener for call icon ==-== //