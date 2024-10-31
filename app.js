var mDate = new Date("Feb 28,2025");

function ramadanCount() {
  var date = new Date();
  var ramadan = mDate - date;
  var month = Math.floor(ramadan / (1000 * 60 * 60 * 24 * 30));
  var day = Math.floor(
    (ramadan % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var hour = Math.floor((ramadan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mint = Math.floor((ramadan % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("getMonth").innerHTML = `${month}`;
  document.getElementById("getDays").innerHTML = `${day}`;
  document.getElementById("getHours").innerHTML = `${hour}`;
  document.getElementById("getMints").innerHTML = `${mint}`;
}

ramadanCount();

setInterval(() => {
  ramadanCount(), 1000;
});
