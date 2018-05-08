function starsComponent(stars) {
  const starArr = [];
  const rating = stars.toString().subString(0, 1);
  for (var i = 1; i <= 5; i++) {
    if(i < rating){
      starArr.push(1);
    }else{
      starArr.push(0)
    }
  }
  return starArr;
}
