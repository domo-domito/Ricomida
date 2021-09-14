$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...");
    });
    
    $('#addFav').click(function(){
        alert("La receta ha sido agregada a tus favoritos");   
    });
     
    $('h2.prep').dblclick(function(){
        $('h2.prep').css({'color':'red'});   
    });
    
    $('h2.ing').dblclick(function(){
        $('h2.ing').css({'color':'red'});   
    });

    $('.card-title').click(function(){
        $('p.card-text').toggle("slow");   
    });
});