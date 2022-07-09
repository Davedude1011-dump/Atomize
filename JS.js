function closeAll() {
  document.getElementById("introPage").style.display = "none"
  document.getElementById("mainPage").style.display = "none"
  document.getElementById("gamePage").style.display = "none"
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
      document.getElementById("mainPage").style.display = "none"
      document.getElementById("whatIsThisPlacePage").style.display = "block"
    }, 3000);
  setTimeout(function() {
  bracketsOpen()
    }, 3500);
    setTimeout(function() {
      document.getElementById("bracket6").style.animationName = "bracketClose"
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
      document.getElementById("whatIsThisPlacePage").style.display = "none"
      document.getElementById("mainPage").style.display = "block"
    }, 3000);
  setTimeout(function() {
  bracketsOpen()
    }, 3500);
    setTimeout(function() {
      document.getElementById("bracket6").style.animationName = "bracketClose"
    }, 6000);
}