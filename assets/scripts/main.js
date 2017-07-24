$('input[type=file]').bootstrapFileInput();

function handleChangeContentPost(e) {
    var val = $(e).val();

    var container = $(e).closest('.item-post');
    $(container).find('.js_show_text').html(val);
}

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

;$(function () {
    $('#addPost').on('click', function (e) {
        e.preventDefault();

        var htmlPost = ' <div class="row item-post"> <input type="file" onchange="readUrl(this)" class="inp_upload-image" title="Загрузить изображение" name="uploadImg"/> <div class="main-block"> <div class="image"> <div class="top-img"></div><div class="upload-img"> <img src="" class="previewImg" alt=""> </div><div class="bottom-img"> <h3 class="js_show_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quod!</h3> </div></div><div class="form input-group"> <div class="form-group"> <label for="text-post">Текс поста: <br />(юзай &lt;br /&gt)для переноса</label> <textarea class="form-control js_text_post" onkeyup="handleChangeContentPost(this)" rows="8" id="text-post"></textarea> </div></div></div></div>';

        $('.lists').append(htmlPost);
    });

});