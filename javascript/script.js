
let count = 0
function addCSS() {
  count++
  if (counter % 2 !== 0) {
    document.getElementById("head").innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n<title>Example HTML Website</title> \n<link rel="stylesheet" href="./style.css" /> \n <script src="script.js"></script>'
  } else {

    document.getElementById("head").innerHTML = ' <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n <title>Example HTML Website</title> \n <script src="script.js"></script> '

  }
}
