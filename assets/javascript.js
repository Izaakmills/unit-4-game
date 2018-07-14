
var heroHealth = 50;
var villianHealth = 50;
var heroPicked = false;
var villianPicked = false;

$("#btn-attack").hide()
$(".goodguy-status").hide()
$(".badguy-status").hide()
$(".villians").hide()

// selects users player and villian for game
$(".obiwan").on("click",function(){
    if (!heroPicked){
    $(".villians").show()
    $(".intro-text").css("display","none")
    $(".yoda-col").css("display","none")
    $(".goodguypicker").css("display","none")
    $("#btn-attack").show()
    heroPicked = true
    $(".goodguy-status").html("You have chosen Obi Wan, wise choice.")
    }
})

$(".yoda").on("click",function(){
    if (!heroPicked){
    $(".villians").show()
    $(".intro-text").css("display","none")
    $(".yoda-col").css("display","none") //hide yoda section and trasnplant over to obi wan
    $(".goodguypicker").css("display","none")//hide pick your hero section
    $(".replaceobi").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png")
    $(".obi-text").html("Yoda")
    $("#btn-attack").show()
    heroPicked = true
    $(".goodguy-status").html("You have chosen Yoda, choose wisely you did.")
    }
})
// villian entries
$(".jarjar").on("click",function(){
    if (!villianPicked){
    $(".jarjar-col").css("display","none");
    $(".jabba-col").css("display","none")
    $(".maul-col").css("display","none")
    $(".badguypicker").css("display","none")
    $(".yoda-col").css("display","")
    $("#yoda-text").html("jajar")
    $(".badguy-status").html("<br><p>You chose to fight jarjar, interesting</p>")
    $(".replaceyoda").attr("src","https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest?cb=20080303052132")
    // $(".yoda-col").css("display","")
    villianPicked = true
    }
})

$(".jabba").on("click",function(){
    if (!villianPicked){
    $(".maul-col").css("display","none");
    $(".jarjar-col").css("display","none");
    $(".jabba-col").css("display","none");
    $(".badguypicker").css("display","none");
    $(".yoda-col").css("display","")
    $(".yoda-text").html("jabba")
    $(".badguy-status").html("<p>You chose to fight jabba, interesting</p>");
    $(".replaceyoda").attr("src","http://www2.pictures.zimbio.com/mp/qAXmGpKrxaRl.jpg");
    $("#yoda-text").html("Jabba");
    villianPicked = true
    }
})

$(".maul").on("click",function(){
    if (!villianPicked){
    $(".jarjar-col").css("display","none")
    $(".jabba-col").css("display","none")
    $(".maul-col").css("display","none")
    $(".badguypicker").css("display","none")
    $(".yoda-col").css("display","")
    $("#yoda-text").html("Darth Maul")
    $(".badguy-status").html("<p>You chose to fight Darth Maul, interesting</p>")
    $(".replaceyoda").attr("src","https://www.sideshowtoy.com/wp-content/uploads/2015/10/star-wars-darth-maul-sixth-scale-feature-100156.jpg")
    villianPicked = true
    }
})

$("#btn-attack").on("click",attack)

function attack(){
    if (heroPicked == true && villianPicked == true)
    {
        $(".goodguy-status").show()
        $(".badguy-status").show()
        var hit1 = Math.floor(Math.random() * 10) + 1; //good guy hit point calc
        var hit2 = Math.floor(Math.random() * 10) + 1; // villian hit point calc
        villianHealth = villianHealth - hit1;
        heroHealth = heroHealth - hit2;
        // if health is below zero user wins
        if (villianHealth <= 0 )
        {
            $(".badguy-status").html("You have defeated your opponent!")
            resetGame()
            $(".goodguy-status").html("Select another hero to play again")

        } else 
        {
        // heroHealth --;
        $(".goodguy-status").html("You attack and hit your opponent for " + hit1 +" damage points!")
        $(".badguy-status").html("<p>Your opponent strikes back for "  + hit2 + " damage points</p>")
        }
};
};

function resetGame(){
    heroPicked = false;
    villianPicked = false;
    villianHealth = 50;
    heroHealth = 50;
    $(".jarjar-col").css("display","")
    $(".jabba-col").css("display","")
    $(".maul-col").css("display","")
    $(".yoda-col").css("display","")
    $(".obi-col").css("display","")
    $(".badguypicker").css("display","")
    $(".goodguypicker").css("display","")
    $(".goodguy-status").html("")
    $(".badguy-status").html("")
    $(".goodguy-status").hide()
    $(".badguy-status").hide()
    $("#btn-attack").hide()
    $(".intro-text").show()
    $(".intro-text").html("Pick another hero to play again")
    $(".replaceyoda").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png")
    $("#yoda-text").html("Yoda")
    $(".replaceobi").attr("src","https://nerdist.com/wp-content/uploads/2017/12/download.jpg")
    $(".obi-text").html("Obi Wan")
    $(".villians").hide()
};


