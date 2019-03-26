        var squares = $(".rounded-squares")
        
            $(".rounded-squares").bind('mouseenter mouseleave click touch', function (event) {
                if (event.type == 'click' || event.type=='touch') {
                    if($(this).hasClass('stay blue-bg')){
                        $(this).removeClass('stay blue-bg');
                        $('.rounded-squares').removeClass('stay blue-bg');
                    }else{
                        $(this).addClass('stay blue-bg'); 
                    }; 
                } else if (event.type == 'mouseenter') {
                    $(this).addClass('grow')
                    if($('.rounded-squares').hasClass('grow')){
                        $('.rounded-squares').removeClass('grow');
                        $(this).addClass('grow');
                    };
                } else if (event.type == 'mouseleave') {
                    if($('.rounded-squares').not('stay')){
                        $(this).removeClass('grow');
                    };
                }
            });
        

        function scrollToAnchor(aid){
            var aTag = $("section[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top -95},'slow');
        }

        (function() {
            'use strict';
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
                }, false);
                });
            }, false);
            })();

        $('#submit').bind('touchstart click', function(event){

            var validator = $('#contactForm')

            if (validator.hasClass('was-validated')) {
                $.ajax({
                    url: "assets/test.php",
                    type: "POST",
                    data: {
                    institution: institution,
                    telephone: telephone,
                    username: username,
                    email: email,
                    how: how,
                    description: description,
                    },
                    cache: false,
                    success: function() {
                      // Success message
                      alert ("Message accepted");
                      //clear all fields
                      $('#contactForm').trigger("reset");
                    }
                })                
            }
        });

        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });