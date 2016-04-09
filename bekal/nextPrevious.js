var numberOfPhotos = 68;

var myImg= new Array(numberOfPhotos-1);
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
  myImg[28]= "IMG_7034";
  myImg[29]= "IMG_7031";
  myImg[30]= "IMG_7028";
  myImg[31]= "IMG_7026";
  myImg[32]= "IMG_7022";
  myImg[33]= "IMG_7021";
  myImg[34]= "IMG_7015";
  myImg[35]= "IMG_7010";
  myImg[36]= "IMG_7000";
  myImg[37]= "IMG_6714";
  myImg[38]= "IMG_6710";
  myImg[39]= "IMG_6709";
  myImg[40]= "IMG_6708";
  myImg[41]= "IMG_6707";
  myImg[42]= "IMG_6705";
  myImg[43]= "IMG_6704";
  myImg[44]= "IMG_6655";
  myImg[45]= "IMG_6658";
  myImg[46]= "IMG_6659";
  myImg[47]= "IMG_6663";
  myImg[48]= "IMG_6667";
  myImg[49]= "IMG_6672";
  myImg[50]= "IMG_6673";
  myImg[51]= "IMG_6676";
  myImg[52]= "IMG_6679";
  myImg[53]= "IMG_6685";
  myImg[54]= "IMG_6687";
  myImg[55]= "IMG_6692";
  myImg[56]= "IMG_6900";
  myImg[57]= "IMG_6904";
  myImg[58]= "IMG_6906";
  myImg[59]= "IMG_6913";
  myImg[60]= "IMG_6916";
  myImg[61]= "IMG_6918";
  myImg[62]= "IMG_6922";
  myImg[63]= "IMG_6926";
  myImg[64]= "IMG_6929";
  myImg[65]= "IMG_6931";
  myImg[66]= "IMG_6932";
  myImg[67]= "IMG_6935";

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
  if(i> (numberOfPhotos-2)) {
    var l = i;
  } else {
    l = i+=1;
  }
  document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
}

window.onload=loadImg;
