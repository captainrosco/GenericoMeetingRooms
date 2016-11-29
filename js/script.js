
$(document).ready(function() {
  $('.level').click(function(){
    var level = $(this).attr('value');
    console.log(level);
     $.getJSON('js/rooms.json', function(data){
       var newListItem = '<div>';
       $.each(data[level] , function(index, floor){
         newListItem += '<div class="listItem"><div class="' + floor.vacant + '">' + floor.room + '</div><div class="info">';
         newListItem += "<h4>" + floor.author + "</h4>";
         newListItem += '</div></div>';
       }); //end data.floor
         newListItem += "</div>";
        $('.list').html(newListItem);
        console.log(newListItem);
     }); //end getJSON
  }); // end click
}); //end document.ready
