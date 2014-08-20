var fileExtentionRange = '.zip .rar .tar .pdf .doc .docx .xls .xlsx .ppt .pptx';
var MAX_SIZE = 30; // MB

$(document).on('change', '.lezhi-file-btn :file', function() {
    var input = $(this);

    if (navigator.appVersion.indexOf("MSIE") != -1) { // IE
        var label = input.val();

        input.trigger('fileselect', [ 1, label, 0 ]);
    } else {
        var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        var numFiles = input.get(0).files ? input.get(0).files.length : 1;
        var size = input.get(0).files[0].size;

        input.trigger('fileselect', [ numFiles, label, size ]);
    }
});

$('.lezhi-file-btn :file').on('fileselect', function(event, numFiles, label, size) {
    $('#lezhi-file-upload').attr('name', 'lezhi-file-upload'); // allow upload.
    console.log("asdf");
    var postfix = label.substr(label.lastIndexOf('.'));
    if (fileExtentionRange.indexOf(postfix.toLowerCase()) > -1) {
        if (size > 1024 * 1024 * MAX_SIZE ) {
            alert('max size：<strong>' + MAX_SIZE + '</strong> MB.');

            $('#lezhi-file-upload').removeAttr('name'); // cancel upload file.
        } else {
            $('#lezhi-file-upload-name').val(label);
        }
    } else {
        alert('file type：<br/> <strong>' + fileExtentionRange + '</strong>');

        $('#lezhi-file-upload').removeAttr('name'); // cancel upload file.
    }
});

$('.ui.selection.dropdown').dropdown();
