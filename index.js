function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankedlist=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i=0;i<rankedlist.length;i++){
    rankedlist[i].innerHTML=(parseInt(rankedlist[i].innerHTML)+n).toString()
  }
}

function deepestChild(){
  var searchlist=document.querySelectorAll('#grand-node')
  return searchlist[searchlist.length-1]  
}
