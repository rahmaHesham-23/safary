document.getElementById('copyButton').addEventListener('click', function () {
    alert('تم نسخ النص');

    var statusText = document.getElementById('statusText');
    statusText.style.visibility = 'visible';
});





document.getElementById('deleteButton').addEventListener('click', function () {
    alert('هل تريد المسح؟');

    var deleteText = document.getElementById('deleteText');
    deleteText.style.visibility = 'visible';

});
