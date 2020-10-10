// grab the input

document.querySelector('.js-go').addEventListener("click",function(){
    var input=document.querySelector("input").value;
 //   console.log(input);
    pushToDom(input);

});

document.querySelector('.js-userinput').addEventListener("keyup",function(e){
    var input=document.querySelector("input").value;
  //  console.log(input);
    if(e.which=== 13){
        pushToDom(input);
   }
    
});



//do data stuff


var url="http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load",function(e){
       var data=e.target.response;
   // console.log(data);

    pushToDom(data);
       
});







//show me the gifs
function pushToDom (input){
     
    var response=JSON.parse(input);
   // var imageUrl=response.data[0].images.fixed_height.url;
   //var imageUrls=response.data;
   // console.log(imageUrls);

   var imageUrls = response.data;

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

   var container=document.querySelector(".js-container");
   container.innerHTML +="<img src=\""+src+"\" class=\"container-image\">";

});
}
