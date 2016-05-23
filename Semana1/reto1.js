//Lo que piden: localhost:3000/posts muestre un objeto json con los siguientes datos:
//id:"a5d79e7a-329e-4d76-10b9-7f0157bbcb58", "nombre":"Samara Hammmes",
//contenido:"lorem ipsum",
//fecha:"2015-04-13T19:10:39.0947",
//imagen:"http://lorempixel.com/648/40/people"

var express=require("express");
var app=express();
var faker=require("faker");
var _=require("lodash");

var generarPost=function(){
    var randomID=faker.random.uuid();
    var randomName=faker.name.findName();
    var randomContent=faker.lorem.sentence();
    var randomDate=faker.date.recent();
    var randomImage=faker.image.people();
    return{
        id:randomID,
        nombre:randomName,
        contenido:randomContent,
        fecha:randomDate,
        imagen:randomImage
    }
}

app.get('/', function(req,res){
    res.send('Servidor Reto 1 Backend Susan Delgado');
})

app.get('/posts',function(req,res){
    var cantidad=_.random(5,10)
    var posts=_.times(cantidad,generarPost)
    res.json(posts);
})

app.listen(3000);