import React from 'react';
import {render} from 'react-dom';

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
            maxHeight: null,
            callbacks: {
                onImageUpload: function(image) {
                    uploadImage(image[0]);
                }
            }
        });
        function uploadImage(image) {
            let data = new FormData();
            data.append("image", image);
            $.ajax({
                data: data,
                type: "POST",
                url: "http://localhost:8080/api/images",
                headers: {
                    Authorization : "Bearer b9781480-5872-4864-af68-fd5095826e55",
                },
                cache: false,
                contentType: false,
                processData: false,
                success: function(json) {
                    var img = $('<img>').attr('src', 'http://localhost:8080/api/images/file/' + json.data.result.originalPath);
                    $('#text').summernote("insertNode", img[0]);
                },
                error: function(data) {
                    class App extends React.Component {
                      render () {
                        return <p> {data} </p>;
                      }
                    }
                    render(<App/>, document.getElementById('modal-inf'));
                    $("#errorModal").modal('show');
                }
            });
        }
    });