(function() {
    
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated'); 
          if (form.checkValidity()) {
            $('#myModal').modal('show');
            event.preventDefault();
            event.stopPropagation();
          }  
        }, false);
        
      });
    }, false);
   
  })();

  $('#myModal').on('hide.bs.modal', function (e) {
    var formsElements = document.getElementsByClassName('tab-pane fade show active text-align form-new');
    if(formsElements[0].id == "admin"){
        window.location.href = "https://gangadhar993.github.io/DreamSpot/admin.html";
    }
    else{
        window.location.href = "https://gangadhar993.github.io/DreamSpot/user.html";
    }
    
  });

  function goToRegister(){
    window.location.href = "https://gangadhar993.github.io/DreamSpot/register.html";
  }

