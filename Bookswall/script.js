var popupoverlay=document.querySelector(".overlay-button")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("pop-button")
 

addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
    
var deletebook=document.getElementById("delete-book")
deletebook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktittle=document.getElementById("enter-book-tittle")
var bookauthor=document.getElementById("enter-book-author")
var text=document.getElementById("enter-description-book")


addbook.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktittle.value}</h2>
                   <h3>${bookauthor.value}</h3>
                    <h5>${text.value}</h5>
                  <button onclick="deletepop(event)">delete</button>`
                   
         container.append(div)
           popupoverlay.style.display="none"
           popupbox.style.display="none"
         
})

function deletepop(event){
    event.target.parentElement.remove();
}
