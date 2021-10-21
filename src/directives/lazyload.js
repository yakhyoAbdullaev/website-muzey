// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     }
//     img.src = src;  

// }


// const imgOptions = {};

// const imgObserver = new IntersectionObserver((entries,
//     imgObserver) => {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting) {
//                 return;
//             }else {
//                 preloadImage(entry.target);
//                 imgObserver.unobserve(entry.target);
//             }
//         });
//     }, imgOptions);

//     images.forEach(image => {
//         imgObserver.observe(image);
//     });





// export default {
//     inserted: el => {
//         function loadImage() {
//             el.src = el.dataeset.src
//         }
//         function callback(entries, observer){
//             entries.forEach(entry => {
//                 if(entry.isIntersecting){
//                     loadImage()
//                     observer.unobserver(el)
//                 }
//             })
//         }
//         function createIntersectionObserver(){
//             const options = {
//                 root: null,
//                 threshold: 0,
//             }

//             const observer= new IntersectionObserver(callback, options)
//             observer.observer(el)
//         }
//         if(!window['IntersectionObserver'])
//         loadImage()
//         else{
//             createIntersectionObserver()
//         }
//     }
    
// }