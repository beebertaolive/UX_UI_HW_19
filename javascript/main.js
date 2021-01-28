// alert('You successfully linked your JavaScript file!');
// console.log("Congrats!");
/* jan 28 - tutor - hw 19 */
$(document).ready(function(){
    $(".projects").hover(
        function(){
            $(".dropdown-menu").slideDown(200);
        },
        function(){
            $(".dropdown-menu").slideUp(200);

        }
    )





})
