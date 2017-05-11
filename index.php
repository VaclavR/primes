<!DOCTYPE html>
<html>
    <head>
        <title>Sieve of Eratosthenes</title>
        <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css" />
    </head>
    <body>
        <div id="wrapper">
            
            <div class="leftDiv">
                <h1>Prime Numbers - Sieve of Eratosthenes</h1>
                <p class="lead">An Ancient Greek Algorythm</p>
                <p>Select a number</p>
                <div id="inputDiv">
                    <input type="range" min="2" max="50000" value="25000">
                    <span>25000</span>  
                </div>
                <button>GO</button>
            </div>
            
            <div class="rightDiv">
                <p class="info"></p>
                <p class="info"></p>
                <p class="info"></p>
                <p class="info"></p>
            </div>
            
            
            <hr>
        </div>
        
        <table id="result" cellspacing="0"></table>

    <script type="text/javascript" src="script.js"></script>
    </body>
</html>