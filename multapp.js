var multOne = ["1 X 1", "1 X 2", "1 X 3", "1 X 4", "1 X 5", "1 X 6", "1 X 7", "1 X 8", "1 X 9"];
var multTwo = ["2 X 1", "2 X 2", "2 X 3", "2 X 4", "2 X 5", "2 X 6", "2 X 7", "2 X 8", "2 X 9"];
var multThree = ["3 X 1", "3 X 2", "3 X 3", "3 X 4", "3 x 5", "3 X 6", "3 X 7", "3 X 8", "3 X 9"];
var multFour = ["4 X 1", "4 X 2", "4 X 3", "4 X 4", "4 X 5", "4 X 6", "4 X 7", "4 X 8", "4 X 9"];
var multFive = ["5 X 1", "5 X 2", "5 X 3", "5 X 4", "5 X 5", "5 X 6", "5 X 7", "5 X 8", "5 X 9"];
var multSix = ["6 X 1", "6 X 2", "6 X 3", "6 X 4", "6 X 5", "6 X 6", "6 X 7", "6 X 8", "6 X 9"];
var multSeven = ["7 X 1", "7 X 2", "7 X 3", "7 X 4", "7 X 5", "7 X 6", "7 X 7", "7 X 8", "7 X 9"];
var multEight = ["8 X 1", "8 X 2", "8 X 3", "8 X 4", "8 X 5", "8 X 6", "8 X 7", "8 X 8", "8 X 9"];
var multNine = ["9 X 1", "9 X 2", "9 X 3", "9 X 4", "9 X 5", "9 X 6", "9 X 7", "9 X 8", "9 X 9"];

    function modifyGridOne() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multOne[i];
            }
        }

	function modifyGridTwo() {
	for (var i = 0; i < 9; i++)
		{
			var listItem = "item" + (i + 1); 
			document.getElementById(listItem).innerHTML = multTwo[i];
		}
    }

    function modifyGridThree() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multThree[i];
            }
        }
    
    function modifyGridFour() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multFour[i];
            }
        }    

    function modifyGridFive() {
            for (var i = 0; i < 9; i++)
                {
                    var listItem = "item" + (i + 1); 
                    document.getElementById(listItem).innerHTML = multFive[i];
                }
            }    

    function modifyGridSix() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multSix[i];
            }
        }
        
    function modifyGridSeven() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multSeven[i];
            }
        }    

    function modifyGridEight() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multEight[i];
            }
        }    

    function modifyGridNine() {
        for (var i = 0; i < 9; i++)
            {
                var listItem = "item" + (i + 1); 
                document.getElementById(listItem).innerHTML = multNine[i];
            }
        }    

        document.getElementById("Ones").addEventListener("click", modifyGridOne, false);
        document.getElementById("Twos").addEventListener("click", modifyGridTwo, false);
        document.getElementById("Threes").addEventListener("click", modifyGridThree, false);
        document.getElementById("Fours").addEventListener("click", modifyGridFour, false);
        document.getElementById("Fives").addEventListener("click", modifyGridFive, false);
		document.getElementById("Sixes").addEventListener("click", modifyGridSix, false);
		document.getElementById("Sevens").addEventListener("click", modifyGridSeven, false);
		document.getElementById("Eights").addEventListener("click", modifyGridEight, false);
		document.getElementById("Nines").addEventListener("click", modifyGridNine, false);


