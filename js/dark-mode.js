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


    /*
        $('#dark-mode').click(function (e) {
            if (e.target.checked) {
                localStorage.checked = true;
            } else {
                localStorage.checked = false;
            }
        })

        $(document).ready(function () {

            document.querySelector('#dark-mode').checked = localStorage.checked

        });
    */


    // Dark Mode End


    // Show on media queries in top-nav-module
    /*
        if (window.matchMedia("(max-width: 991px)").matches) {
            $(".top-module-1.d-none.d-lg-block .dark-mode-switch").remove();

        }


        if (window.matchMedia("(min-width: 992px)").matches) {
            $(".top-module-1.flex-fill.justify-content-end.d-flex.pr-3.d-lg-none .dark-mode-switch").remove();

        }
        */


    /*
    if (window.matchMedia("(max-width: 991px)").matches) {
$(".top-module-1.d-none.d-lg-block .dark-mode-switch").empty();
    }
    
   
        if (window.matchMedia("(min-width: 992px)").matches) {
$(".top-module-1.flex-fill.justify-content-end.d-flex.pr-3.d-lg-none .dark-mode-switch").empty();
    }
    */

    // Show on media queries End


    //$('.top-sm input[type=checkbox]').removeAttr('id');


});



