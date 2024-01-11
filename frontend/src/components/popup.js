const deletePopup = document.getElementById('popup');
const deleteBtns = document.querySelectorAll('.income__item--button.delete');
const notApproveToDelete = document.getElementById('not-approve');
console.log(1);

deleteBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        console.log(1)
        deletePopup.classList.add('active');
    })
})

notApproveToDelete.onclick = function () {
    deletePopup.classList.remove('active');
}