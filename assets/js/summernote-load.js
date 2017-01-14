$(document).ready(function() {
        $("#text").summernote({
            toolbar: [
                ["style", ["style"]],
                ["font", ["bold", "italic", "underline", "clear"]],
                ["fontsize", ["fontsize"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["insert", ["link", "picture", "video" , "hr"]],
                ['view', ['fullscreen', 'codeview']],
            ],
            lang: 'ru-RU',
            height: 400,
            minHeight: 150,
            maxHeight: null
        });
    });