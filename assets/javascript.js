
var heroHealth = 50;
var villianHealth = 50;
var heroPicked = false;
var villianPicked = false;



$(".obiwan").on("click",function(){
    $(".yoda").css("display","none")
    heroPicked = true
})

$(".yoda").on("click",function(){
    $(".obiwan").css("display","none")
    heroPicked = true
})

$(".jarjar").on("click",function(){
    $(".jabba").css("display","none")
    $(".maul").css("display","none")
    villianPicked = true
})

$(".jabba").on("click",function(){
    $(".maul").css("display","none")
    $(".jarjar").css("display","none")
    villianPicked = true
})

$(".maul").on("click",function(){
    $(".jarjar").css("display","none")
    $(".jabba").css("display","none")
    villianPicked = true
})


startGame()

function startGame(){
    if (heroPicked == true && villianPicked == true){
        alert("Welcome! Please play wisely")
    }
}


