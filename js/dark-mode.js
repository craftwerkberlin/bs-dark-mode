jQuery(document).ready(function ($) { 


    // Dark mode
    const btn = document.querySelector(".btn-toggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add("dark-theme");
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        let theme = "light";
        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });



    // Checked State Switch
    function App() {}

    App.prototype.setState = function (state) {
        localStorage.setItem('checked', state);
    }

    App.prototype.getState = function () {
        return localStorage.getItem('checked');
    }

    function init() {
        var app = new App();
        var state = app.getState();
        var checkbox = document.querySelector('#dark-mode');

        if (state == 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('click', function () {
            app.setState(checkbox.checked);
        });
    }

    init();

    // Dark Mode End
    
    });