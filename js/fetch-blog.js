fetch('../template/bloghead.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#headnav').innerHTML = data;
            });
fetch('../template/foot.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#footbar').innerHTML = data;
            });
