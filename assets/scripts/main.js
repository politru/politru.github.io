$('input[type=file]').bootstrapFileInput();

function handleChangeContentPost(e) {
    var val = $(e).val();

    var container = $(e).closest('.item-post');
    $(container).find('.js_show_text').html(val);
}

$(document).ready(function () {
    $('.save').on('click', function (e) {
        var canvas = document.getElementById("canvas"),
            html = $('.image').html();

        console.log(html);

        rasterizeHTML.drawHTML(html, canvas);
    });
/*    $(".save").on('click', function (e) {
        html2canvas($(".bottom-img"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image
                Canvas2Image.saveAsPNG(canvas);
                $("#img-out").append(canvas);
/!*
                var myImage = canvas.toDataURL("image/png");
                $('#out').attr('src', myImage);
*!/
            }
        });
    });*/
});

// Получаем изображение и вставляем в вартермарк
function readUrl(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader(),
            container = $(input).closest('.item-post');

        console.log(container);

        reader.onload = function (e) {
            $(container).find('.previewImg').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$('#createPost').on('click', function (e) {
    e.preventDefault();

    var container = $(this).closest('.item-post');

    html2canvas($(container).find('.image'), {
        onrendered: function(canvas) {
            theCanvas = canvas;
            document.body.appendChild(canvas);

            $("#img-out").append(canvas);
            // Clean up
            //document.body.removeChild(canvas);
        }
    });
});

;$(function () {
    $('#addPost').on('click', function (e) {
        e.preventDefault();

        var htmlPost = "";

        $('.lists').append(htmlPost);
    });

});


// Скрипт div to image (Canvas2Image ??)
/*
        html2canvas($(".image"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image
                Canvas2Image.saveAsPNG(canvas); 
                $("#img-out").append(canvas);
                // Clean up
                //document.body.removeChild(canvas);
            }
        });
*/