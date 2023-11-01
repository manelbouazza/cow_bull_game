document.addEventListener("DOMContentLoaded", function () {
    // Find elements in the HTML
    var gameInterface = document.getElementById("gameInterface");
    var playGameInterface = document.getElementById("playGameInterface");
    var playerNameInput = document.getElementById("playerName");
    var attemptsInput = document.getElementById("attempts");
    var startGameButton = document.getElementById("startGameButton");
    var guessInput = document.getElementById("guessInput");
    var submitButton = document.getElementById("submitButton");
    var gameStatus = document.getElementById("gameStatus");

    
    startGameButton.addEventListener("click", function () {
        
        var playerName = playerNameInput.value;
        var attempts = parseInt(attemptsInput.value);

        gameInterface.style.display = "none";
        playGameInterface.style.display = "block";
    });

    submitButton.addEventListener("click", function () {
        // Get the player's guess
        var playerGuess = guessInput.value;

        playGame(playerGuess);
    });

    // Function to make an AJAX request to play the game
    function playGame(playerGuess) {
        // Construct the SOAP request 
        var soapRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://isg.soa.game.tn">
            <soapenv:Header/>
            <soapenv:Body>
                <web:play_game>
                    <web:player_proposition>${playerGuess}</web:player_proposition>
                </web:play_game>
            </soapenv:Body>
        </soapenv:Envelope>`;

        
        $.ajax({
            url: 'soap-endpoint/', 
            type: 'POST',
            data: soapRequest,
            contentType: 'text/xml',
            dataType: 'xml',
            success: function (data) {
                
                displayGameResult(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    
    function displayGameResult(data) {
        
    }
});
