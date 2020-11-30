window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements we need to display to the user
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul list to show the letters a given user could pick
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory of the word
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Maailma riigid";
    } 
  }

  // Create guess list that shows the length and the words the user has gotten correct
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives of the user
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }




  // OnClick Function that checks if the given letter is a part of the secret word
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        
      } else {
        comments();
      }
    }
  }
  
    
  // Play function that picks a random word and sets the starting paramaters
  play = function () {
    categories = [
        ["afghanistan","albania","algeria","andorra","angola","anguilla","antigua &amp; barbuda","argentina",
        "armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus",
        "belgium","belize","benin","bermuda","bhutan","bolivia","bosnia &amp; herzegovina","botswana","brazil","british virgin islands"
        ,"brunei","bulgaria","burkina faso","burundi","cambodia","cameroon","cape verde","cayman islands","chad","chile","china","colombia"
        ,"congo","cook islands","costa rica","cote d ivoire","croatia","cruise ship","cuba","cyprus","czech republic","denmark","djibouti","dominica",
        "dominican republic","ecuador","egypt","el salvador","equatorial guinea","estonia","ethiopia","falkland islands","faroe islands","fiji","finland",
        "france","french polynesia","french west indies","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guam","guatemala",
        "guernsey","guinea","guinea bissau","guyana","haiti","honduras","hong kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle of man","israel",
        "italy","jamaica","japan","jersey","jordan","kazakhstan","kenya","kuwait","kyrgyz republic","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein",
        "lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","mauritania","mauritius","mexico","moldova","monaco","mongolia",
        "montenegro","montserrat","morocco","mozambique","namibia","nepal","netherlands","netherlands antilles","new caledonia","new zealand","nicaragua","niger","nigeria","norway",
        "oman","pakistan","palestine","panama","papua new guinea","paraguay","peru","philippines","poland","portugal","puerto rico","qatar","reunion","romania","russia","rwanda",
        "saint pierre &amp; miquelon","samoa","san marino","satellite","saudi arabia","senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","south africa",
        "south korea","spain","sri lanka","st kitts &amp; nevis","st lucia","st vincent","st. lucia","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan",
        "tanzania","thailand","timor l'este","togo","tonga","trinidad &amp; tobago","tunisia","turkey","turkmenistan","turks &amp; caicos","uganda","ukraine",
        "united arab emirates","united kingdom","uruguay","uzbekistan","venezuela","vietnam","virgin islands (us)","yemen","zambia","zimbabwe"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

  play();


   // Reset the screen to play again

  document.getElementById('reset').onclick = function() {
    location.reload();
  }
}

