var numberOfPhotos = 41;

var myImg= new Array(numberOfPhotos-1);
  myImg[0]= "IMG_6722";
  myImg[1]= "IMG_6726";
  myImg[2]= "IMG_6727";
  myImg[3]= "IMG_6728";
  myImg[4]= "IMG_6731";
  myImg[5]= "IMG_6736";
  myImg[6]= "IMG_6746";
  myImg[7]= "IMG_6748";
  myImg[8]= "IMG_6752";
  myImg[9]= "IMG_6754";
  myImg[10]= "IMG_6758";
  myImg[11]= "IMG_6760";
  myImg[12]= "IMG_6763";
  myImg[13]= "IMG_6764";
  myImg[14]= "IMG_6767";
  myImg[15]= "IMG_6769";
  myImg[16]= "IMG_6772";
  myImg[17]= "IMG_6773";
  myImg[18]= "IMG_6774";
  myImg[19]= "IMG_6778";
  myImg[20]= "IMG_6782";
  myImg[21]= "IMG_6786";
  myImg[22]= "IMG_6787";
  myImg[23]= "IMG_6800";
  myImg[24]= "IMG_6803";
  myImg[25]= "IMG_6814";
  myImg[26]= "IMG_6823";
  myImg[27]= "IMG_6825";
  myImg[28]= "IMG_6827";
  myImg[29]= "IMG_6830";
  myImg[30]= "IMG_6833";
  myImg[31]= "IMG_6834";
  myImg[32]= "IMG_6841";
  myImg[33]= "IMG_6849";
  myImg[34]= "IMG_6854";
  myImg[35]= "IMG_6872";
  myImg[36]= "IMG_6877";
  myImg[37]= "IMG_6883";
  myImg[38]= "IMG_6892";
  myImg[39]= "IMG_6895";
  myImg[40]= "IMG_6896";

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
