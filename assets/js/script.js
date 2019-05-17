        var circles = $(".white-circle")
        $.each(circles, function (index, value) {
            $(circles).bind('mouseenter mouseleave click touchstart', function (event) {
                if (event.type == 'click' || event.type=='touchstart') {
                    $("#exampleModal").modal("show");
                    /*$("#third-section").addClass("after_modal_appended");
                    $('.modal-backdrop').appendTo('#third-section');   */
                    $('body').removeClass("modal-open")
                    $('body').css("padding-right","");
                        
                } else if (event.type == 'mouseenter') {
                    $(this).addClass('cyan-circle')
                    if($('.white-circle').hasClass('cyan-circle')){
                        $('.white-circle').removeClass('cyan-circle');
                        $(this).addClass('cyan-circle');
                        
                    };
                } else if (event.type == 'mouseleave') {
                    if($('.white-circle').not('stay')){
                        $(this).removeClass('cyan-circle');
                    };
                }
            });
        });
        
        /*Open modal*/
        function whatever (index){
            $.ajax({
                url: "modals/modal-" + index + ".html",
                beforeSend: function () {
                    $('#modal').fadeIn();
                },
                success: function (result) {
                    $('#mainModal').html(result);
                    $('#mainModal').fadeIn();
                    $("#modal").toggleClass('show');
                }
            });
        }

        function scrollToAnchor(aid){
            var aTag = $("section[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top -95},'slow');
            $('#menu').fadeOut();
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