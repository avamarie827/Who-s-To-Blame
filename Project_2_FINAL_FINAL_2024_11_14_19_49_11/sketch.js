//variables//
let myFont1;
let myFont2;
let foreground;
let doorC, doorO, doorG;
let dataArray = [];
let cursorImg;
let faceArray = [];
let faceIndex = 0;
let wordArray = [];
let wordIndex = 0;
let clickToggle = false;

//name array//
let names = [
  "Ailey Alivin",
  "Allen Peter",
  "Arenas Reinaldo",
  "Bandy Way",
  "Barker Laughlin",
  "Benes Barton Lidice",
  "Bennett Michael",
  "Bentley Ronald",
  "Bernd John",
  "Botas Juan",
  "Bowery Leigh",
  "Brodkey Harlold",
  "Buczak Brian",
  "Burgonye Martin",
  "Burton Scott",
  "Callen Michael",
  "Carangi Gia",
  "Chandler Biff",
  "Cheren Mel",
  "Chow Tina",
  "Coleman Craig",
  "Corey Dorian",
  "Cowley Patrick",
  "Cox Christopher",
  "Davis Brad",
  "Davis Keith",
  "Debarge Bobby",
  "deSana Jimmy",
  "Donghia Angelo",
  "Drivas Robert",
  "Duka John",
  "Duncan Kenn",
  "Eden Elizabeth",
  "Eichelberger Ethyl",
  "Ellis Perry",
  "Eyen Tom",
  "Feher Tony",
  "Ferro Robert",
  "Foucault Michel",
  "Fox John",
  "Frangella Luis",
  "Gaultney Edmund",
  "Gordy Robert",
  "Greathouse Tim",
  "Halston",
  "Haring Keith",
  "Hartman Dan",
  "Hibiscus",
  "Hujar Peter",
  "Jabara Paul",
  "Jacobs Paul",
  "Jacobsen Robin",
  "Kelly Patrick",
  "Kert Larry",
  "Kondoleon Harry",
  "la Tourneaux Robert",
  "Lavoe Héctor",
  "Levan Larry",
  "Lopez Antonio",
  "Loud Lance",
  "Mapplethorpe Robert",
  "McGowan Kenneth",
  "Montaug Haoui",
  "Moore Frank C.",
  "Moore Robert",
  "Morrisroe Mark",
  "Moufarrege Nicolas",
  "Mueller Cookie",
  "Navarro Ray",
  "Ninja Willi",
  "Nomi Klaus",
  "Nureyev Rudolf",
  "Redd Sharon",
  "Rene Norman",
  "Riley Larry",
  "Ritts Herb",
  "Rolston Dean",
  "Rothbell-Mista Fred",
  "Rubell Steve",
  "Russell Arthur",
  "Saint Assotto",
  "Sanchez Adolfo",
  "Savard Dean",
  "Seales Franklyn",
  "Seidner David",
  "Sex John",
  "Smith Jack",
  "Smith Willi",
  "Snyder Huck",
  "Stanton Larry",
  "Steers Hugh",
  "Stevenson Gordon",
  "Stewart Jermaine",
  "St.Jacques Sterling",
  "SUmmers David",
  "Sylvester",
  "Taylor Michael",
  "Thek Paul",
  "Tippet Clark",
  "Tseng Kwong Chi",
  "Tubens Joe",
  "Vawter Ron",
  "Wagstaff Sam",
  "Ward Charles",
  "Whitmore George",
  "Wilson Ricky",
  "Wojnarowicz David ",
  "Wong Martin",
  "Yates-Rist Darrell",
  "Zane Arnie",
];

function preload() {
  //fonts//
  myFont1 = loadFont("./Fonts/font-bold.ttf");
  myFont2 = loadFont("./Fonts/font-light.ttf");

  //msc images//
  doorC = loadImage("/assets/closed-door.png");
  doorO = loadImage("/assets/open-door.PNG");
  doorG = loadImage("/assets/glow-door.png");
  cursorImg = loadImage("/assets/cursorImage.png");

  //data-images//
  dataArray[0] = loadImage("/assets/Data1.png");
  dataArray[1] = loadImage("/assets/Data2.png");
  dataArray[2] = loadImage("/assets/Data3.png");
  dataArray[3] = loadImage("/assets/Data4.png");
  dataArray[4] = loadImage("/assets/Data5.png");
  dataArray[5] = loadImage("/assets/Data6.png");
  dataArray[6] = loadImage("/assets/Data7.png");
  dataArray[7] = loadImage("/assets/Data8.png");
  dataArray[8] = loadImage("/assets/Data9.png");
  dataArray[9] = loadImage("/assets/Data11.png");
  dataArray[10] = loadImage("/assets/Data12.png");
  dataArray[11] = loadImage("/assets/Data13.png");
  dataArray[12] = loadImage("/assets/Data14.png");
  dataArray[13] = loadImage("/assets/Data15.png");
  dataArray[14] = loadImage("/assets/Data16.png");
  dataArray[15] = loadImage("/assets/Data17.png");
  dataArray[16] = loadImage("/assets/Data18.png");
  dataArray[17] = loadImage("/assets/Data19.png");
  dataArray[18] = loadImage("/assets/Data21.png");
  dataArray[19] = loadImage("/assets/Data22.png");
  dataArray[20] = loadImage("/assets/Data23.png");
  dataArray[21] = loadImage("/assets/Data24.png");
  dataArray[22] = loadImage("/assets/Data25.png");
  dataArray[23] = loadImage("/assets/Data26.png");
  dataArray[24] = loadImage("/assets/Data27.png");
  dataArray[25] = loadImage("/assets/Data28.png");
  dataArray[26] = loadImage("/assets/Data29.png");
  dataArray[27] = loadImage("/assets/Data31.png");
  dataArray[28] = loadImage("/assets/Data32.png");
  dataArray[29] = loadImage("/assets/Data33.png");
  dataArray[30] = loadImage("/assets/Data34.png");
  dataArray[31] = loadImage("/assets/Data35.png");
  dataArray[32] = loadImage("/assets/Data36.png");
  dataArray[33] = loadImage("/assets/Data37.png");
  dataArray[34] = loadImage("/assets/Data38.png");
  dataArray[35] = loadImage("/assets/Data39.png");
  dataArray[36] = loadImage("/assets/Data41.png");
  dataArray[37] = loadImage("/assets/Data42.png");
  dataArray[38] = loadImage("/assets/Data43.png");
  dataArray[39] = loadImage("/assets/Data44.png");
  dataArray[40] = loadImage("/assets/Data45.png");
  dataArray[41] = loadImage("/assets/Data46.png");
  dataArray[42] = loadImage("/assets/Data47.png");
  dataArray[43] = loadImage("/assets/Data48.png");
  dataArray[44] = loadImage("/assets/Data49.png");
  dataArray[45] = loadImage("/assets/Data51.png");
  dataArray[46] = loadImage("/assets/Data52.png");
  dataArray[47] = loadImage("/assets/Data53.png");
  dataArray[48] = loadImage("/assets/Data54.png");
  dataArray[49] = loadImage("/assets/Data55.png");
  dataArray[50] = loadImage("/assets/Data56.png");
  dataArray[51] = loadImage("/assets/Data57.png");
  dataArray[52] = loadImage("/assets/Data58.png");
  dataArray[53] = loadImage("/assets/Data59.png");
  dataArray[54] = loadImage("/assets/Data61.png");
  dataArray[55] = loadImage("/assets/Data62.png");
  dataArray[56] = loadImage("/assets/Data63.png");
  dataArray[57] = loadImage("/assets/Data64.png");
  dataArray[58] = loadImage("/assets/Data65.png");
  dataArray[59] = loadImage("/assets/Data66.png");
  dataArray[60] = loadImage("/assets/Data68.png");
  dataArray[61] = loadImage("/assets/Data69.png");
  dataArray[62] = loadImage("/assets/Data71.png");
  dataArray[63] = loadImage("/assets/Data72.png");
  dataArray[64] = loadImage("/assets/Data73.png");
  dataArray[65] = loadImage("/assets/Data74.png");
  dataArray[66] = loadImage("/assets/Data75.png");
  dataArray[67] = loadImage("/assets/Data76.png");
  dataArray[68] = loadImage("/assets/Data78.png");
  dataArray[69] = loadImage("/assets/Data79.png");
  dataArray[70] = loadImage("/assets/Data81.png");
  dataArray[71] = loadImage("/assets/Data82.png");
  dataArray[72] = loadImage("/assets/Data83.png");
  dataArray[73] = loadImage("/assets/Data84.png");
  dataArray[74] = loadImage("/assets/Data85.png");
  dataArray[75] = loadImage("/assets/Data86.png");
  dataArray[76] = loadImage("/assets/Data88.png");
  dataArray[77] = loadImage("/assets/Data89.png");
  dataArray[78] = loadImage("/assets/Data92.png");
  dataArray[79] = loadImage("/assets/Data93.png");
  dataArray[80] = loadImage("/assets/Data95.png");
  dataArray[81] = loadImage("/assets/Data101.png");
  dataArray[82] = loadImage("/assets/Data102.png");
  dataArray[83] = loadImage("/assets/Data103.png");
}

function setup() {
  //creation of the canvas within the div//
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  //fonts and labeling//
  textFont(myFont1);
  background("black");
  foreground = doorC;

  //buttons//
  var button1 = createButton("see their faces");
  button1.parent("button-holder");
  button1.mousePressed(randomDraw);
  button1.style("background-color", "#FFFFFF");
  button1.style("border", "2px solid #000");
  button1.style("font-size", "15px");

  var button2 = createButton("learn their names");
  button2.parent("button-holder");
  button2.mousePressed(newName);
  button2.style("background-color", "#FFFFFF");
  button2.style("border", "2px solid #000");
  button2.style("font-size", "15px");

  var clearButton = createButton("again");
  clearButton.parent("button-holder");
  clearButton.mousePressed(clearScreen);
  clearButton.style("background-color", "#FFFFFF");
  clearButton.style("border", "2px solid #000");
  clearButton.style("font-size", "15px");

  //remove cursor//
  noCursor();
}

function draw() {
  background(0);

  //loop for faces//
  for (let i = 0; i < faceArray.length; i++) {
    faceArray[i].display();
  }

  //loop for names//
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i].display();
  }

  // door drawing//
  drawDoors();

  //cursor//
  image(cursorImg, mouseX, mouseY, 100, 100);
}

//glowing door when hovering over w mouse//
function drawDoors() {
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400) {
    if (clickToggle) {
      foreground = doorO;
    } else if (!clickToggle) {
      foreground = doorG;
    }
  } else {
    foreground = doorC;
  }
  image(foreground, 250, 250, 200, 200);
}

//opening the door//
function mousePressed() {
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400) {
    clickToggle = true;
    setTimeout(() => {
      clickToggle = false;
      window.open(
        "https://www.house.gov/representatives/find-your-representative"
      );
    }, 1000);
  }
}

//random image of face//
function randomDraw() {
  let ranImg = int(random(dataArray.length));
  let imgX = random(width - 50);
  let imgY;
  if (imgX < 250) {
    imgY = random(height - 50);
  } else {
    imgY = random(250);
  }
  faceArray[faceIndex] = new photo(imgX, imgY, dataArray[ranImg]);
  faceIndex++;
}

//random name function//
function newName() {
  let ranName = int(random(names.length));
  let textX = random(width - 150);
  let textY;
  if (textX < 250) {
    textY = random(height+ 15);
  } else {
    textY = random(250);
  }
  wordArray[wordIndex] = new title(textX, textY, names[ranName]);
  wordIndex++;
}

//clear screen function//
function clearScreen() {
  faceArray = [];
  wordArray = [];
}


//classes//
class photo {
  constructor(xpos, ypos, img) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.img = img;
  }

  display() {
    image(this.img, this.xpos, this.ypos, 50, 50);
  }
}

class title {
  constructor(xpos, ypos, words) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.words = words;
  }

  display() {
    fill("red");
    textSize(16);
    text(this.words, this.xpos, this.ypos);
  }
}

//class info for ava reference//
// Info on classes can be found here:
// https://p5js.org/reference/p5/class/
