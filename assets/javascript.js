
var heroHealth = 50;
var villianHealth = 50;
var heroPicked = false;
var villianPicked = false;


// selects users player and villian for game
$(".obiwan").on("click",function(){
    $(".yoda").css("display","none")
    heroPicked = true
    $(".status-bar").html("You have chosen Obi Wan, wise choice.")
})

$(".yoda").on("click",function(){
    $(".obiwan").css("display","none")
    heroPicked = true
    $(".status-bar").html("You have chosen Yoda, choose wisely you did.")
})

$(".jarjar").on("click",function(){
    $(".jabba").css("display","none")
    $(".maul").css("display","none")
    $(".status-bar").append("<p>You chose to fight jarjar, interesting</p>")
    villianPicked = true
    
})

$(".jabba").on("click",function(){
    $(".maul").css("display","none")
    $(".jarjar").css("display","none")
    $(".status-bar").append("<p>You chose to fight jabba, interesting</p>")
    villianPicked = true
})

$(".maul").on("click",function(){
    $(".jarjar").css("display","none")
    $(".jabba").css("display","none")
    $(".status-bar").append("<p>You chose to fight Darth Maul, interesting</p>")
    villianPicked = true
})


startGame()

function startGame(){
    if (heroPicked == true && villianPicked == true){
        alert("Welcome! Please play wisely")
    }
}


