$().ready(function() {
     
     $("button").click(function() {
        var inputValue = $("#txt").val();
        $("label").text(inputValue);
     });
});












// function loaded() {
//     document.getElementById("lbl").innerHTML ="Lance";
// }




// function clicked() {
//     // alert("It Worked!");

//     var inputCtrl = document.getElementById("txt");
//     var inputValue = inputCtrl.value;
//     console.log("The value is: ",inputValue);
//     // get access to label
//     var labelCtrl = document.getElementById("lbl");
//     labelCtrl.innerText = inputValue;



// }

// function clicked2() {
//     var inputCtrl2 = document.getElementById("passwordtxt");
//     var inputValue2 = inputCtrl2.value;
//     console.log("The value is: ",inputValue2);
//     // get access to label
//     var labelCtrl2 = document.getElementById("lblPassword");
//     labelCtrl2.innerText = inputValue2;
// }