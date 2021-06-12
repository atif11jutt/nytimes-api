jQuery(function($){
    $("#button").click(function(){
        console.log("sdsdf")
        var txt = $("#taAPIOutput").val();
        var jsonFile=  fetch ('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+txt+'&api-key=WAHlEPxMyaWX2TRUgbdVPm9ZqUx0OEbw ')
    .then(response=> response.json())
    .then(data => (loadDoc(data)
    ))

    })

    
})




//get the text
function loadDoc(data){
console.log("data:")
console.log(data)
for(var i=0; i<data.results.lenght; i++){
    console.log(i)
}
}
//now we have this to hold the html
var html = "";
   
    //fetch the json file DO NOT CHANGE THIS> -< I do not want to go looking for the api key this gets your json file

//   var jsonFile=  fetch ('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=WAHlEPxMyaWX2TRUgbdVPm9ZqUx0OEbw ')
//     .then(response=> response.json())
//     .then(data => (console.log(data)))

//stringify (make the json into a string before turning it to object)
// var turnToString = JSON.stringify(jsonFile);
// document.write(turnToString);
    
//  console.log(turnToString);

 //now we need to make it into an object 
//  var turnToString = JSON.stringify(jsonFile);
//  var obj = JSON.parse(turnToString);
// //  document.write(turnToString);
//  console.log(obj);
   




//     for (var i = 0 ; i <obj.results.length; i++)
//     {
//       html+= "<p><b>" +obj.results[i].title +"</b></p>";
//       html+= "<p><b>" +obj.results[i].title +"</b></p>";

      
//     }

// document.write(html);
    
    // for ( var i = 0 ; i < obj.results.length;i++)
    // {
    //     html+= <p><b> + obj.results[i].title+ </b></p>
    
    // }