var button = document.getElementById("generate");
var opener = document.getElementById("opener");
var jargon = document.getElementById("jargon"); 

var openerArray = [
"Have you tried using the...",
"Surely you would instead use the...",
"You can't possibly be talking about the...",
"Interesting, but I would have tried using the...",
"Are you guys talking about the...",
"Over at Cern, we've been studying the..."
];

var jargonArray = [
"Goering ",
"synthesis ",
"hyper-",
"non-",
"beam ",
"continuity ",
"matrix ",
"geo-",
"deflection ",
"gage ",
"Newell ",
"string ",
"laser ",
"structural ",
"torsion ",
"fluid ",
"dynamic ",
"giga-",
"exa-",
"reduction ",
"multiplexing ",
"zero ",
"conditional ",
"space ",
"scalar ",
"multiple ",
"Hilbert ",
"conditional ",
"cubic ",
"inverse ",
"augmented ",
"non-",
"singular ",
"least-",
"square ",
"null ",
"z-",
"dimensional ",
"planetary ",
"modular ",
"xeno-",
"sine ",
"waveform ",
"anti-",
"derivational ",
"quantum ",
"delta ",
"lambda ",
"vector ",
"inversion ",
"twiddling ",
"pulse ",
"diamond "
];

var closerArray = [
"constant",
"coefficient",
"formula",
"distribution",
"theorem",
"quotient",
"equation",
"lattice",
"derivation",
"matrix",
"vector",
"hyperplane",
"ratio",
"approach ",
"postulate",
"hypothesis",
"parabola",
"field",
"algorithm",
"vortex",
"paradox"];

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

var genJargon = function() {
  opener.innerHTML = openerArray.randomElement();
  var jargonString = capitaliseFirstLetter(jargonArray.randomElement());
  for (var i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
    var rand = jargonArray.randomElement();
    while (jargonString.toLowerCase().indexOf(rand.toLowerCase()) > -1) {
      rand = jargonArray.randomElement();
    }
    jargonString += rand;
  }
  var randCloser = closerArray.randomElement();
  while(jargonString.toLowerCase().indexOf(randCloser.toLowerCase()) > -1) {
	  randCloser = closerArray.randomElement();
  }
  jargon.innerHTML = jargonString + randCloser;
  return jargonString;
}

button.onclick = function() {
  genJargon();
}

window.onload = function() {
  genJargon();
}