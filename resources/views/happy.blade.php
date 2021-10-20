<!doctype html>
<html >
<head>
    <meta name="google-site-verification" content="M02GNeZ8rP6-Or9mT-vXmCLybydwiPT6zapodI06HYQ" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Happy 20/10</title>
    <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/clown-face_1f921.png"/>
    <style>
        html, body {
            height: 100%;
            width: 100%;
            background: #122139;
            overflow: hidden;
        }

        .container {
            width: 100px;
            height: 300px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            -moz-transform: scale(0.6);
            -ms-transform: scale(0.6);
            -webkit-transform: scale(0.6);
            transform: scale(0.6);
        }
        .container div {
            position: absolute;
        }
        .container .glass {
            height: 420px;
            width: 250px;
            border: 3px solid rgba(255, 255, 255, 0.5);
            -moz-border-radius: 300px 300px 0px 0px;
            -webkit-border-radius: 300px;
            border-radius: 300px 300px 0px 0px;
            left: -80px;
            top: -100px;
            border-bottom: 15px solid rgba(255, 255, 255, 0.5);
        }
        .container .glass:after {
            width: 8px;
            background: rgba(255, 255, 255, 0.28);
            content: '';
            position: absolute;
            height: 80px;
            top: 430px;
            border-radius: 100px;
            left: 10px;
            top: 180px;
        }
        .container .glass:before {
            width: 8px;
            background: rgba(255, 255, 255, 0.28);
            content: '';
            position: absolute;
            height: 15px;
            top: 430px;
            border-radius: 100px;
            left: 10px;
            top: 280px;
        }
        .container .glow {
            position: absolute;
            width: 170px;
            height: 170px;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            border: 1px solid rgba(245, 148, 184, 0.47);
            box-shadow: 0px 0px 10px #f594b8;
            left: -40px;
            top: -40px;
            -moz-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            -moz-animation: glowing 2.5s ease-in-out infinite;
            -webkit-animation: glowing 2.5s ease-in-out infinite;
            animation: glowing 2.5s ease-in-out infinite;
        }
        .container .rose-petals > div {
            background: #d52d58;
            width: 45px;
            height: 80px;
            position: absolute;
            -moz-transition: all 0.5s ease-out;
            -o-transition: all 0.5s ease-out;
            -webkit-transition: all 0.5s ease-out;
            transition: all 0.5s ease-out;
        }
        .container .rose-petals > div:nth-child(1) {
            border-radius: 15px;
            left: 20px;
            top: -6px;
            background: #d52d58;
        }
        .container .rose-petals > div:nth-child(2), .container .rose-petals > div:nth-child(4), .container .rose-petals > div:nth-child(6) {
            border-radius: 0px 30px 0px 30px;
            background: #b81b43;
            left: 0;
            transform-origin: bottom right;
        }
        .container .rose-petals > div:nth-child(3), .container .rose-petals > div:nth-child(5), .container .rose-petals > div:nth-child(7) {
            border-radius: 30px 0px 30px 0px;
            left: 40px;
            transform-origin: bottom left;
        }
        .container .rose-petals > div:nth-child(2) {
            -moz-animation: openRose2 3s ease-in-out;
            -webkit-animation: openRose2 3s ease-in-out;
            animation: openRose2 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 5;
            background: #9e183a;
            top: 10px;
            height: 70px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-petals > div:nth-child(3) {
            -moz-animation: openRose3 3s ease-in-out;
            -webkit-animation: openRose3 3s ease-in-out;
            animation: openRose3 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 4;
            background: #9e183a;
            top: 10px;
            height: 70px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-petals > div:nth-child(4) {
            -moz-animation: openRose4 3s ease-in-out;
            -webkit-animation: openRose4 3s ease-in-out;
            animation: openRose4 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 3;
            background: #b81b43;
            top: 5px;
            height: 75px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-petals > div:nth-child(5) {
            -moz-animation: openRose5 3s ease-in-out;
            -webkit-animation: openRose5 3s ease-in-out;
            animation: openRose5 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 2;
            background: #b81b43;
            top: 5px;
            height: 75px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-petals > div:nth-child(6) {
            -moz-animation: openRose6 3s ease-in-out;
            -webkit-animation: openRose6 3s ease-in-out;
            animation: openRose6 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 1;
            background: #c9204b;
            top: "";
            height: "";
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-petals > div:nth-child(7) {
            -moz-animation: openRose7 3s ease-in-out;
            -webkit-animation: openRose7 3s ease-in-out;
            animation: openRose7 3s ease-in-out;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 0;
            background: #c9204b;
            top: "";
            height: "";
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .rose-leaves > div:nth-last-child(1) {
            width: 55px;
            height: 30px;
            background: #338f37;
            position: absolute;
            top: 60px;
            left: 15px;
            -moz-border-radius: 100px;
            -webkit-border-radius: 100px;
            border-radius: 100px;
        }
        .container .rose-leaves > div:nth-child(1) {
            width: 6px;
            height: 230px;
            border: none;
            top: 80px;
            background: #066406;
            left: 40px;
        }
        .container .thorns > div {
            width: 30px;
            height: 30px;
            background: #066406;
            top: 100px;
            left: 10px;
        }
        .container .thorns > div:after {
            width: 41px;
            height: 31px;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            background: #122139;
            content: "";
            position: absolute;
            left: -12px;
            top: 17px;
        }
        .container .thorns > div:before {
            width: 41px;
            height: 31px;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            background: #122139;
            content: "";
            position: absolute;
            left: -11px;
            top: -11px;
            z-index: 0;
        }
        .container .thorns > div:nth-child(2) {
            top: 150px;
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            left: 45px;
        }
        .container .thorns > div:nth-child(3) {
            top: 180px;
        }
        .container .thorns > div:nth-child(4) {
            top: 220px;
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            left: 45px;
        }
        .container .sparkles {
            bottom: -40px;
        }
        .container .sparkles > div {
            width: 4px;
            height: 4px;
            border-radius: 100px;
            background: #ff96c0;
            box-shadow: 0px 0px 12px 2px #ff4e85;
            bottom: 0;
            opacity: 0;
            -moz-animation: sparkle 4s ease-in-out infinite;
            -webkit-animation: sparkle 4s ease-in-out infinite;
            animation: sparkle 4s ease-in-out infinite;
        }
        .container .sparkles > div:nth-child(1) {
            left: 108px;
            -moz-animation-delay: 3s;
            -webkit-animation-delay: 3s;
            animation-delay: 3s;
        }
        .container .sparkles > div:nth-child(2) {
            left: 118px;
            -moz-animation-delay: 3s;
            -webkit-animation-delay: 3s;
            animation-delay: 3s;
        }
        .container .sparkles > div:nth-child(3) {
            left: 15px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .sparkles > div:nth-child(4) {
            left: -44px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .sparkles > div:nth-child(5) {
            left: 178px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .sparkles > div:nth-child(6) {
            left: -38px;
            -moz-animation-delay: 3s;
            -webkit-animation-delay: 3s;
            animation-delay: 3s;
        }
        .container .sparkles > div:nth-child(7) {
            left: -20px;
            -moz-animation-delay: 2s;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
        .container .sparkles > div:nth-child(8) {
            left: -3px;
            -moz-animation-delay: 3s;
            -webkit-animation-delay: 3s;
            animation-delay: 3s;
        }
        .container .sparkles > div:nth-child(9) {
            left: 161px;
            -moz-animation-delay: 3s;
            -webkit-animation-delay: 3s;
            animation-delay: 3s;
        }

        @-webkit-keyframes $animationName {
            50% {
                opacity: 1;
            }
            100% {
                bottom: 250px;
            }
        }
        @-moz-keyframes sparkle {
            50% {
                opacity: 1;
            }
            100% {
                bottom: 250px;
            }
        }
        @-ms-keyframes sparkle {
            50% {
                opacity: 1;
            }
            100% {
                bottom: 250px;
            }
        }
        @keyframes sparkle {
            50% {
                opacity: 1;
            }
            100% {
                bottom: 250px;
            }
        }
        @-webkit-keyframes $animationName {
            50% {
                -moz-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                top: 80px;
                left: 100px;
            }
            100% {
                -moz-transform: rotate(-60deg);
                -ms-transform: rotate(-60deg);
                -webkit-transform: rotate(-60deg);
                transform: rotate(-60deg);
                top: 210px;
                left: -30px;
            }
        }
        @-moz-keyframes openRose2 {
            50% {
                -moz-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                top: 80px;
                left: 100px;
            }
            100% {
                -moz-transform: rotate(-60deg);
                -ms-transform: rotate(-60deg);
                -webkit-transform: rotate(-60deg);
                transform: rotate(-60deg);
                top: 210px;
                left: -30px;
            }
        }
        @-ms-keyframes openRose2 {
            50% {
                -moz-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                top: 80px;
                left: 100px;
            }
            100% {
                -moz-transform: rotate(-60deg);
                -ms-transform: rotate(-60deg);
                -webkit-transform: rotate(-60deg);
                transform: rotate(-60deg);
                top: 210px;
                left: -30px;
            }
        }
        @keyframes openRose2 {
            50% {
                -moz-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                top: 80px;
                left: 100px;
            }
            100% {
                -moz-transform: rotate(-60deg);
                -ms-transform: rotate(-60deg);
                -webkit-transform: rotate(-60deg);
                transform: rotate(-60deg);
                top: 210px;
                left: -30px;
            }
        }
        @-webkit-keyframes $animationName {
            100% {
                -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
            }
        }
        @-moz-keyframes openRose3 {
            100% {
                -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
            }
        }
        @-ms-keyframes openRose3 {
            100% {
                -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
            }
        }
        @keyframes openRose3 {
            100% {
                -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
            }
        }
        @-webkit-keyframes $animationName {
            100% {
                -moz-transform: rotate(-30deg);
                -ms-transform: rotate(-30deg);
                -webkit-transform: rotate(-30deg);
                transform: rotate(-30deg);
            }
        }
        @-moz-keyframes openRose4 {
            100% {
                -moz-transform: rotate(-30deg);
                -ms-transform: rotate(-30deg);
                -webkit-transform: rotate(-30deg);
                transform: rotate(-30deg);
            }
        }
        @-ms-keyframes openRose4 {
            100% {
                -moz-transform: rotate(-30deg);
                -ms-transform: rotate(-30deg);
                -webkit-transform: rotate(-30deg);
                transform: rotate(-30deg);
            }
        }
        @keyframes openRose4 {
            100% {
                -moz-transform: rotate(-30deg);
                -ms-transform: rotate(-30deg);
                -webkit-transform: rotate(-30deg);
                transform: rotate(-30deg);
            }
        }
        @-webkit-keyframes $animationName {
            100% {
                -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                -webkit-transform: rotate(30deg);
                transform: rotate(30deg);
            }
        }
        @-moz-keyframes openRose5 {
            100% {
                -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                -webkit-transform: rotate(30deg);
                transform: rotate(30deg);
            }
        }
        @-ms-keyframes openRose5 {
            100% {
                -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                -webkit-transform: rotate(30deg);
                transform: rotate(30deg);
            }
        }
        @keyframes openRose5 {
            100% {
                -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                -webkit-transform: rotate(30deg);
                transform: rotate(30deg);
            }
        }
        @-webkit-keyframes $animationName {
            50% {
                box-shadow: 0px 0px 60px #f594b8;
            }
        }
        @-moz-keyframes glowing {
            50% {
                box-shadow: 0px 0px 60px #f594b8;
            }
        }
        @-ms-keyframes glowing {
            50% {
                box-shadow: 0px 0px 60px #f594b8;
            }
        }
        @keyframes glowing {
            50% {
                box-shadow: 0px 0px 60px #f594b8;
            }
        }

    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
    <style>
        .text {
            font-family: 'Poppins', sans-serif;
            position: fixed;
            top: 30px;
            text-align: center;
            font-size: 40px;
            font-weight: 600;
            width: 100%;
            color: wheat;
        }

        p {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            text-align: center;
            margin-left: -230px;
        }

        .word {
            position: absolute;
            opacity: 0;
        }

        .letter {
            display: inline-block;
            position: relative;
            float: left;
            transform: translateZ(25px);
            transform-origin: 50% 50% 25px;
        }

        .letter.out {
            transform: rotateX(90deg);
            transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .letter.behind {
            transform: rotateX(-90deg);
        }

        .letter.in {
            transform: rotateX(0deg);
            transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .wisteria {
            color: #C9204B;
        }

        .belize {
            color: #2980b9;
        }

        .pomegranate {
            color: #c0392b;
        }

        .green {
            color: #16a085;
        }

        .midnight {
            color: #c5c90b;
        }
    </style>
    <script type="text/javascript">
        var app = @json($app);
        app["css"] ={
            textHightLightColor: "#FE3C00"
        }
    </script>
</head>
<body>

<div class="container">
    <div class="glass"></div>
    <div class="thorns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="glow"></div>
    <div class="rose-leaves">
        <div></div>
        <div></div>
    </div>
    <div class="rose-petals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="sparkles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

<div class="text">
    <p>Chúc mừng 20/10, chúc&nbsp;<span style="text-transform: capitalize">{{$name}}</span>&nbsp;<span class="word wisteria">xinh_đẹp</span>
        <span class="word belize">vui_vẻ</span>
        <span class="word pomegranate">hạnh_phúc</span>
        <span class="word green">thành_công</span>
        <span class="word midnight">không_có_mụn</span> </p>
    <p>

    </p>
</div>

<script>
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i*80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function() {
            nw[i].className = 'letter in';
        }, 340+(i*80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);
</script>
</body>
</html>
