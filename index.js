//  changing the content 
 function updateweekday(day){
    // the code below access the tag h3 in the html document.and returns the 
    // content of that tag.
    let h3=document.querySelector('h3') 
    //  to cahnge the content of the above element in the tag stated abve 
    // the conctent of the element will be changed to the argument that will be passed when the 
    // function is passed.
    h3.innerHTML = day
 }
 updateweekday('tuesday')


//  changing attributes.
function update(day){
    let h2=document.querySelector('h2')
    // to change or add an Id to a DOM element 
    h2.id= day;
    // inorder to add a class to a DOM element 
    h2.className = "anotherDayOfTheWeek"
    // how to cahnhe the style of an element in css 
    h2.style.color= 'green'
}
update('dayOfTheWeek');

// add a piture to application.
function addImage (imageLink){
    //  this is to access the DOM element image in the html document.
    let img=document.querySelector('img')
    //  changing the image url in html document to that that is passed an a argument in this function.
    img.src= imageLink
}
addImage('add Link of image her to display')

// innerHTML
function innerHTML(something){
let h4 =document.querySelector('h4')
h4.innerHTML= `
   <li>her name </li>
   <li>${day}</li>
   <img src="google.com">
   `
}
innerHTML("wednesday")
// innerHTML can be used to add new element tags in the HTML document.
// be careful using innerHTML as it can remove or delete or clear content in a html document.
