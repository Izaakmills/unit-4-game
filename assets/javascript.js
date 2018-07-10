
var heroHealth = 50;
var villianHealth = 50;
var heroPicked = false;
var villianPicked = false;

$("#btn-attack").hide()

// selects users player and villian for game
$(".obiwan").on("click",function(){
    $(".yoda").css("display","none")
    $("#btn-attack").show()
    $(".goodguypicker").css("display","none").css("float","left")
    heroPicked = true
    $(".goodguy-status").html("You have chosen Obi Wan, wise choice.")
})

$(".yoda").on("click",function(){
    $(".yoda").css("display","none")
    $("#btn-attack").show()
    $(".goodguypicker").css("display","none")
    $(".replaceobi").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png")
    heroPicked = true
    $(".goodguy-status").html("You have chosen Yoda, choose wisely you did.")
})

$(".jarjar").on("click",function(){
    $(".jabba").css("display","none")
    $(".maul").css("display","none")
    $(".badguypicker").css("display","none")
    $(".badguy-status").append("<br><p>You chose to fight jarjar, interesting</p>")
    $(".replaceyoda").attr("src","https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest?cb=20080303052132")
    villianPicked = true
})

$(".jabba").on("click",function(){
    $(".maul").css("display","none")
    $(".jarjar").css("display","none")
    $(".badguypicker").css("display","none")
    $(".badguy-status").append("<p>You chose to fight jabba, interesting</p>")
    $(".replaceyoda").attr("src","http://www2.pictures.zimbio.com/mp/qAXmGpKrxaRl.jpg")
    villianPicked = true
})

$(".maul").on("click",function(){
    $(".jarjar").css("display","none")
    $(".jabba").css("display","none")
    $(".badguypicker").css("display","none")
    $(".badguy-status").append("<p>You chose to fight Darth Maul, interesting</p>")
    $(".replaceyoda").attr("src","https://www.sideshowtoy.com/wp-content/uploads/2015/10/star-wars-darth-maul-sixth-scale-feature-100156.jpg")
    villianPicked = true
})


$(".btn-startGame").on(click,startGame())

function startGame(){
    if (heroPicked == true && villianPicked == true){
        alert("Welcome! Please play wisely")
    }
}


