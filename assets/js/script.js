document.addEventListener('DOMContentLoaded', function() {
 
    fetch('../essentials/navbar.html')
        .then(response => response.text())
        .then(data => {

            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Ada kesalahan:', error));

    fetch('../essentials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Ada kesalahan:', error));
});
