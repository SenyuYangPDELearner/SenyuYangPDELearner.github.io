fetch('https://SenyuYangPDELearner.github.io/template/bloghead.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#headnav').innerHTML = data;
            });
fetch('https://SenyuYangPDELearner.github.io/template/foot.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#footbar').innerHTML = data;
            });
