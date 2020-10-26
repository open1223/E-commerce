$(document).ready(function() { 
    $('.replyAction').click(function(event){
        $('.bodyText').fadeToggle();
    });
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })