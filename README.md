

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  
    getElementById(id): Returns a single element with the given id. It is the fastest and most direct method.
    getElementsByClassName(className): Returns all similar class name.
    querySelector(selector): Returns the first element that matches the CSS selector.
    querySelectorAll(selector): Returns all elements that match the CSS selector as a static NodeList.


 2. How to Create and Insert a New Element into the DOM
    
    javascript
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am a programmar!"; 
    document.body.appendChild(newDiv); 


 3. What is Event Bubbling and How Does It Work?

    Event Bubbling হলো এমন একটি প্রক্রিয়া, যেখানে ইভেন্টটি সবার নিচের এলিমেন্ট থেকে শুরু হয়ে ধাপে ধাপে উপরের parent এলিমেন্টগুলোতে পৌঁছে।


 4. What is Event Delegation in JavaScript? Why Is It Useful?

    Event Delegation* হলো এমন একটি কৌশল, যেখানে অনেকগুলো child এলিমেন্টে আলাদা আলাদা event listener না দিয়ে, শুধুমাত্র একটি parent এলিমেন্টে ইভেন্ট লিসেনার যোগ করা হয়।
    ইভেন্টটি bubble করে parent-এ পৌঁছায়, এবং parent তখন event.target দেখে বুঝে নেয় কোন child থেকে ইভেন্ট এসেছে।
    
    কেন দরকারী:
    
    কম ইভেন্ট লিসেনার লাগে (পারফরম্যান্স ভালো হয়)
    ডায়নামিকভাবে যোগ হওয়া এলিমেন্টের জন্যও কাজ করে


 5. Difference Between `preventDefault()` and `stopPropagation()`

    preventDefault(): Stops the default behavior of the browser.
    stopPropagation(): Stops the event from bubbling up to parent elements.
  
