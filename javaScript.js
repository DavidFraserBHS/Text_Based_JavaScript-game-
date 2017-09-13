

//Health Variables
	var playerHealth = 100;
	var enemyHealth = 80;
	var enemyDead = false;
//Damage Variables
	//var playerDamage = 10;
	//var enemyDamage = 5;
	
	var magicSkill = 20;
	var weaponSkill = 20;
	
//Misc Variables
	var actionChoice;
	var attackChoice;
	
	var inventory = ["jug of water x1", "food x1"];
	var scrolls = ["fire", "water"];
	
//function containing all code
	function RunGame()
	{
		alert("You Have encountered an enemy!");
		alert("What is your corse of action?");
		actionChoice = prompt("Attack | Check Items | Run");
		checkActionChoice();	
	}

//Check Players actionchoice Function
	function checkActionChoice()
	{
		
		if (actionChoice == "attack")
		{
			playerAttack();
		} 
		else if(actionChoice == "check items")
		{
			check_items();
			actionChoice = prompt("Attack | Check Items | Run");
			checkActionChoice();
		}
		else if(actionChoice == "run")
		{
			flee(10);
		}
		else 
		{
			alert("invalid");
			actionChoice = prompt("Attack | Check Items | Run");
			checkActionChoice();
		}
		
	}
//Attack Functionality
	function playerAttack()
	{
		while (enemyDead == false)
		{
		
		//Transfer to functions !!!!! 
		attackChoice = prompt("Use: Magic | Weapon | Scroll");
		if (attackChoice == "magic") {
			alert("You Landed a hit on the enemy");
			enemyHealth -= magicSkill;
			alert("The enemy has " + enemyHealth + " HP remaining!");
		}
		else if (attackChoice == "weapon") {
			alert("You Landed a hit on the enemy");
			enemyHealth -= weaponSkill;
			alert("The enemy has " + enemyHealth + " HP remaining!");
		}
		else if (attackChoice == "scroll") {
			if (scrolls.length > 0) 
			{
			alert("you have used the " + scrolls[0] + " scroll");
			scrolls.shift();
			console.log(scrolls[0]);
			alert("enemy has been defeated");
			enemyDead = true;
			}
			else
			{
				alert("no scrolls left");
			}
		}
		
		if (enemyHealth == 0){ enemyDead = true;
			alert("You have defeated the enemy");
		}
		/*
		alert("You Landed a hit on the enemy");
		enemyHealth -= playerDamage;
		alert("The enemy has " + enemyHealth + " HP remaining!");
		*/
		}
	}
//check inventory
	function check_items(){
		alert("you have " + inventory);
	}
//Flee Attempt	
	function flee(int){
		var resulty = Math.floor((Math.random() * int) + 1);
		alert(resulty);
		if (resulty < 4)
		{
			throw new Error("crude game crash");
		} 
		else
		{
			alert("you ran away");
		}			
	}
	
	RunGame();