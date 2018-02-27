//counter code
var button = document.getElementById('counter');

button.onClick = function(){
   
    //create a request
    var request = new XMLHttpRequest();
   
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
   
    //make a request
    request.open('GET','http://http://deepak787098.imad.hasura-app.io//counter',true);
    request.send(null);
};

//submit name


var submit = document.getElementById('submit_btn');
submit.onClick = function(){
  //make a request to the server and send the name
   //create a request
    var request = new XMLHttpRequest();
   
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
              //create a list of name and render it as a list
              var name = request.responseText;
              names=JSON.parse(names);
              var list = '';
              for(var i=0 ; i<names.length;i++){
                  list += '<li>'+names[i]+'<li>';
              }
              var ul = document.getElementById('nameList');
              ul.innerHTML = list;  
            }
        }
    };
   
    //make a request
    var nameInput=document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://http://deepak787098.imad.hasura-app.io//submit-name?name='+name,true);
    request.send(null);
  
  
 
};