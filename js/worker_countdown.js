var countdown = 0;
function timesCount() {

  if(countdown >= 0){
    self.postMessage(countdown);
    countdown--;
    setTimeout(function(){
      timesCount();
    }, 1000);
  }else{
    self.postMessage(-1);
  }
}

self.onmessage = function(e) {
  console.log("收到主程式來的資料：" + e.data);
  countdown = e.data;
  timesCount();
}
