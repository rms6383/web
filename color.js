var Body = {
  SetColor:function (color)
  {
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor:function (color)
  {
      document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  setColor:function (color)
  {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length)
    {
    alist[i].style.color=color;
    i = i + 1;
    }
  }
}
function nightdayhandles(self)
{
  var target = document.querySelector('body');
    if(self.value==='night')
      {
      Body.SetBackgroundColor('black');
      Body.SetColor('white');
      self.value='day';
      Links.setColor('yellow');
      }
    else
      {
      Body.SetBackgroundColor('white');
      Body.SetColor('black');
      self.value='night';
      var alist = document.querySelectorAll('a');
      var i = 0;
      Links.setColor('red');
      }
  }
