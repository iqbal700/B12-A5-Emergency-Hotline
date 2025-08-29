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

      const callIcon = document.getElementsByClassName('call-icon');
   
       
       for( const call of callIcon) {
             
              call.addEventListener('click', function() {

             let coinCount = parseInt(document.getElementById('coin-count')
                      .innerText);      

             if ( coinCount >= 20) { 

              document.getElementById('coin-count')
                     .innerText = coinCount - 20; 

                   const instituteName = call.parentNode.parentNode.children[0].children[1].innerText;
                   
                   const instituteNum = call.parentNode.parentNode.children[1].innerText;

                   alert(`You are calling ${instituteName} - ${instituteNum}`)

             } else {
                alert ('sorry you dont have sufficient coin for calling')
             }
                   
              } )


       }


 
