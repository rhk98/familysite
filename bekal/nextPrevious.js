var myImg= new Array(27)
  myImg[0]= "IMG_7038";
  myImg[1]= "IMG_7044";
  myImg[2]= "IMG_7049";
  myImg[3]= "IMG_7051";
  myImg[4]= "IMG_7053";
  myImg[5]= "IMG_7055";
  myImg[6]= "IMG_7056";
  myImg[7]= "IMG_7064";
  myImg[8]= "IMG_7068";
  myImg[9]= "IMG_7073";
  myImg[10]= "IMG_7081";
  myImg[11]= "IMG_7082";
  myImg[12]= "IMG_7083";
  myImg[13]= "IMG_7085";
  myImg[14]= "IMG_7087";
  myImg[15]= "IMG_7089";
  myImg[16]= "IMG_7090";
  myImg[17]= "IMG_7092";
  myImg[18]= "IMG_7093";
  myImg[19]= "IMG_7095";
  myImg[20]= "IMG_7096";
  myImg[21]= "IMG_7098";
  myImg[22]= "IMG_7102";
  myImg[23]= "IMG_7105";
  myImg[24]= "IMG_7106";
  myImg[25]= "IMG_7108";
  myImg[26]= "IMG_7109";
  myImg[27]= "IMG_7112";

myImgSrc = "";
myImgEnd = ".jpg"

var i = 0;

function loadImg(){
  document.imgSrc.src = myImgSrc + myImg[i] + myImgEnd;
}

function prev() {
  if(i<1) {
    var l = i;
  } else {
    var l = i-=1;
  }
  document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
}

function next() {
  if(i>26) {
    var l = i;
  } else {
    l = i+=1;
  }
  document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
}

window.onload=loadImg;
