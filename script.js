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

                   

       const date = new Date().toLocaleTimeString();
       const newDiv = document.createElement('div');
       const historyContainer = document.getElementById('history-container');

                      newDiv.innerHTML = `

                     <div class="cart-div flex justify-between items-center bg-gray-100 p-2 rounded-lg mt-5">
                            <div class="px-2">
                                   <h1>${instituteName}</h1>
                                   <h2>${instituteNum}</h2>
                            </div>
                            <h1>${date}</h1>
                            
                     </div>
                             
                     `
                     historyContainer.append(newDiv);

             } else {
                alert ('sorry you dont have sufficient coin for calling')
             }
                   
              } )


       }


       // ==-== clear history section ==-== // 

          const clearBtn = document.getElementById('clear-history-btn');

          clearBtn.addEventListener('click', function(){

              const domElement = document.getElementById('history-container')
               .innerHTML = '';
          })




 
