$.validator.addMethod("js-email", function(value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}, "Введите корректный email");




$('.js-input-name').on('input', function() {
    var value = $(this).val();
    value = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/ig, '');
    $(this).val(value);
});

$('.js-form').validate({
    errorPlacement: function(error, element) {
        var $parent = element.parent();
        $parent.append(error);
        
    },
    submitHandler: function(form) {
        $(form).trigger("formSubmit");
    }        
});



