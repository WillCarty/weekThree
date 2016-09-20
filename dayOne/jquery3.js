function myButton_Click() {
    alert('Clicked!')
}


$(function() {
$("#myButton").on("click", myButton_Click)

$("li:contains('mad')").on("click", function(){
$(this).hide();

});
});
