<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <form action="#" id="form">
        <input type="text" placeholder="name" id="input">
        <button type="submit" id="btn">Submit</button>
    </form>
    <p id="result">Your name is: </p> -->

    <!-- 9g -->
    <h3>Challenge Exercise</h3>
    <form action="#" id="form">
        <input id="input" placeholder="enter number">
        <button id="btn" type="submit">Calculate</button>
    </form>
    <p id="result"></p>
    <!-- 9h -->
     <input type="text" id="s-input" onkeyup="liveFunction()">
     <p id="live-result"></p>
    <script>
        // const form = document.getElementById('form');
        // const input = document.getElementById('input');
        // const result = document.getElementById('result');

        // form.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     const name = input.value;
        //     result.textContent = Your name is ${name};
        //     input.value = '';
        // })

        // 9g
        const form = document.getElementById('form');
        const input = document.getElementById('input');
        const result = document.getElementById('result');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let number = Number(input.value) * 100;
            if (number < 4000) {
                number += 1000;
            }
            result.textContent = $${number / 100}
        })
        // 9h
        const sInput = document.getElementById('s-input');
        const liveResult = document.getElementById('live-result');

        // first option
        // sInput.addEventListener('input', () => {
        //     liveResult.textContent = sInput.value;
        // })
        // second option
        function liveFunction() {
            liveResult.textContent = sInput.value;
        }
        
    </script>
</body>
</html>