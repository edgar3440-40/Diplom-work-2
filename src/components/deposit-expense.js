const deleteBtn = document.querySelectorAll('.delete');
const deletePopup = document.getElementById('popup');
const notApproveToDelete = document.getElementById('not-approve');


deleteBtn.forEach(function (btn) {
    btn.onclick = function () {
        deletePopup.classList.add('active');
    }
})
notApproveToDelete.onclick = function () {
    deletePopup.classList.remove('active');
}
