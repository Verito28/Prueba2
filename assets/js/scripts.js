$(document).ready(function(){

$(".profile__img span").click(function(e){

     $(".profile__selector").fadeIn(1000);
   
});

 $(".profile__selector img").click(function(event){
 

        
        $(".profile__img img").attr("src","./assets/img/profile/" + $(this).attr("id"));
        $(".profile__selector").fadeOut(1000);

      	
      
    });

 $(".twitts__footer span").click(function(event){
 	

      	 $(this).addClass('twitts__footer--like');
      	 


      	 $(this).find('small').html(parseInt($(this).find('small').html(), 10)+1);


        event.stopPropagation();
      	event.preventDefault();
    });


 $( ".sidebar__form" ).submit(function( event ) {
      	event.preventDefault();
      	event.stopPropagation();

    	let id =parseInt($('.twitts:last-child').attr("id"))+1
      	let image =$(".profile__img img").attr('src');	
        let text= $('#texto').val();
    

      
      $('.twitts__container').append($( ".twitts:first-child" ).clone(true).attr('id',id));

	 	
	  $("#"+id+" img").attr("src",image);
	  $("#"+id+" p").text(text);
	  $("#"+id).removeAttr('hidden');
	  $("#"+id).appendTo(".twitts__container").hide().fadeIn(1000);


	  $('#texto').val('');

	 

	});

  $(".twitts__footer i").click(function(event){
 	

      $( this).parent().parent().fadeOut();
      	 




        event.stopPropagation();
      	event.preventDefault();
    });




});