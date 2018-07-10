
var heroHealth = 0;
var villianHealth = 0;
var heroPicked = false;
var villianPicked = false;



$(".obiwan").on("click",function(){
    $(".yoda").hide()
    heroPicked = true
})

$(".yoda").on("click",function(){
    $(".obiwan").hide()
    heroPicked = True
})

$(".jarjar").on("click",function(){
    $(".jabba").hide()
    $(".maul").hide()
    villianPicked = true
})

$(".jabba").on("click",function(){
    $(".maul").hide()
    $(".jarjar").hide()
    villianPicked = true
})

$(".maul").on("click",function(){
    $(".jarjar").hide()
    $(".jabba").hide()
    villianPicked = true
})


function gameStart(){
    if (heroPicked && villianPicked){
        alert("Welcome! Please play wisely")
    }
}


