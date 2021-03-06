function getFirstSelector(selector){
   return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  var dis = document.querySelector('div#grand-node').querySelectorAll('div');
  return dis[dis.length-1];
}
