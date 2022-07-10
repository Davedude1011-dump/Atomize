function closeAll() {
  document.getElementById("introPage").style.display = "none"
  document.getElementById("mainPage").style.display = "none"
  document.getElementById("gamePage").style.display = "none"
  document.getElementById("whatIsThisPlacePage").style.display = "none"
  document.getElementById("tutorialScreen").style.display = "none"
}

function start() {
    document.getElementById("overlay1").style.display = "none"

    bracketsClose()
    setTimeout(function() {
        closeAll()
        document.getElementById("gamePage").style.display = "block"
      }, 3000);
    setTimeout(function() {
        bracketsOpen()
      }, 3500);
      setTimeout(function() {
        document.getElementById("bracket6").style.animationName = "bracketClose"
        startGame()
      }, 6000);
}
function menu() {
    document.getElementById("overlay1").style.display = "none"

    bracketsClose()
    setTimeout(function() {
        closeAll()
        document.getElementById("mainPage").style.display = "block"
      }, 3000);
    setTimeout(function() {
        bracketsOpen()
      }, 3500);
      setTimeout(function() {
        document.getElementById("bracket6").style.animationName = "bracketClose"
      }, 6000);
}

function bracketsClose() {
  document.getElementById("bracket1").style.animationName = "bracketClose"
  setTimeout(function() {
      document.getElementById("bracket2").style.animationName = "bracketClose"
      document.getElementById("mainLogo").style.display = "block"
    }, 200);
  setTimeout(function() {
      document.getElementById("bracket3").style.animationName = "bracketClose"
    }, 400);
  setTimeout(function() {
      document.getElementById("bracket4").style.animationName = "bracketClose"
    }, 600);
  setTimeout(function() {
      document.getElementById("bracket5").style.animationName = "bracketClose"
    }, 800);
}
function bracketsOpen() {
  document.getElementById("bracket1").style.animationName = "bracketOpen"
  setTimeout(function() {
      document.getElementById("bracket2").style.animationName = "bracketOpen"
    }, 200);
  setTimeout(function() {
      document.getElementById("bracket3").style.animationName = "bracketOpen"
    }, 400);
  setTimeout(function() {
      document.getElementById("bracket4").style.animationName = "bracketOpen"
    }, 600);
  setTimeout(function() {
      document.getElementById("bracket5").style.animationName = "bracketOpen"
    }, 800);
}

function bracketsCloseWhatIsThisPlace() {
  document.getElementById("bracket6").style.animationName = "bracketOpen"
  setTimeout(function() {
    document.getElementById("bracket1").style.animationName = "bracketClose"
    }, 200);
  setTimeout(function() {
      document.getElementById("bracket2").style.animationName = "bracketClose"
    }, 400);
  setTimeout(function() {
      document.getElementById("bracket3").style.animationName = "bracketClose"
    }, 600);
  setTimeout(function() {
      document.getElementById("bracket4").style.animationName = "bracketClose"
    }, 800);
  setTimeout(function() {
      document.getElementById("bracket5").style.animationName = "bracketClose"
      document.getElementById("bracket6Button1").onclick = homeFromWhatIsThisPlace
    }, 1000);
    setTimeout(function() {
      document.getElementById("bracket6Button1Text").innerText = "Home"
    }, 1700);
  setTimeout(function() {
      closeAll()
      document.getElementById("whatIsThisPlacePage").style.display = "block"
    }, 3000);
  setTimeout(function() {
  bracketsOpen()
  document.getElementById("tutorialScreen").style.display = "block"
    }, 3500);
    setTimeout(function() {
      document.getElementById("bracket6").style.animationName = "bracketClose"
      bigBangTutorialFunction()
    }, 6000);
}

function homeFromWhatIsThisPlace() {
  document.getElementById("bracket6").style.animationName = "bracketOpen"
  setTimeout(function() {
    document.getElementById("bracket1").style.animationName = "bracketClose"
    }, 200);
  setTimeout(function() {
      document.getElementById("bracket2").style.animationName = "bracketClose"
    }, 400);
  setTimeout(function() {
      document.getElementById("bracket3").style.animationName = "bracketClose"
    }, 600);
  setTimeout(function() {
      document.getElementById("bracket4").style.animationName = "bracketClose"
    }, 800);
  setTimeout(function() {
      document.getElementById("bracket5").style.animationName = "bracketClose"
      document.getElementById("bracket6Button1").onclick = bracketsCloseWhatIsThisPlace
    }, 1000);
  setTimeout(function() {
    document.getElementById("bracket6Button1Text").innerText = "What Is This Place"
  }, 1700);
  setTimeout(function() {
      closeAll()
      document.getElementById("mainPage").style.display = "block"
    }, 3000);
  setTimeout(function() {
  bracketsOpen()
    }, 3500);
    setTimeout(function() {
      document.getElementById("bracket6").style.animationName = "bracketClose"
    }, 6000);
}

// start animation

function bigBangTutorialFunction() {
  setTimeout(function() {
    document.getElementById("bigBangTutorial").style.animationName = "bigBangAnimationBack"
    setTimeout(function() {
    document.getElementById("whatIsThisPlacePage").style.backgroundColor = "hotpink"
    document.getElementById("tutorialScreen").style.backgroundColor = "hotpink"
    document.getElementById("bigBangTutorial").style.display = "none"

    document.getElementById("hydrogenTutorial").style.display = "block"
    document.getElementById("afterBang").style.display = "block"
    }, 11000);
  }, 2000);
}

hydrogenDone = false

function startGame() {
  setTimeout(function() {
    document.getElementById("bigBang").style.animationName = "bigBangAnimation"
    setTimeout(function() {
    document.getElementById("gamePage").style.backgroundColor = "white"
    document.getElementById("screen").style.backgroundColor = "white"
    document.getElementById("bigBang").style.display = "none"
    setTimeout(function() {
      document.getElementById("hydrogen").style.display = "block"
      }, 2000);
    }, 6000);
  }, 2000);
}

var energy = 0

var progDone = 0

var progMax = 50
var progInt = 0
var clicks = 0

var percentSign = "%"

function clickAtom() {
  energy += 1
  var progStr = (progInt * (100 / progMax)).toString()
  document.getElementById("progressBarText").innerText = `${clicks} / ${progMax}`
  document.getElementById("progressBar").style.backgroundImage = `linear-gradient(140deg, green 0% ${progStr + percentSign}, transparent ${progStr + percentSign} 100%)`
  if (progInt === progMax) {
    progDone += 1
    hydrogenDone = true
    progInt = 0
    clicks = 0
    if (progDone === 2) {
      progMax = 500
      document.getElementById("lithium").style.display = "block"
    }
    if (progDone === 1) {
      progMax = 250
      document.getElementById("helium").style.display = "block"
    }
  }
}

function clickHydrogen() {
  progInt += 1
  clicks += 1
  clickAtom()
}

function clickHelium() {
  progInt += 2
  clicks += 2
  clickAtom()
}

function clickLithium() {
  progInt += 3
  clicks += 3
  clickAtom()
}