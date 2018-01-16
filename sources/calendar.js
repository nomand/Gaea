function Calendar()
{
  this.calendar = function()
  {
    var now = new Date();
    var year = now.getFullYear();
    var start = new Date(year, 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);

    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var total_days = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 366 : 365;
    var progress = (day/total_days)*100000;
    var date = pad(parseInt(progress),6)

    return {month:date.substr(0,3),day:date.substr(3,3)};
  }

  this.menu = function(app)
  {
    var cal = this.calendar();
    return {label: `${cal.month}.${cal.day}`, enabled: false};
  }

  function pad(n, width, z = "0")
  {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}

module.exports = new Calendar()