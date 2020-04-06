$(document).ready(function() {
    $('#dark-toggle').on('click', ()=> {
      $('body').toggleClass('dark-mode');
      $('#dark-mode-icon').toggleClass('fa-sun');
      
      if ($('body').hasClass('dark-mode') == true) {
        $('#text-set').text('Light Mode');
      } else {
        $('#text-set').text('Dark Mode');
      }
    })
});