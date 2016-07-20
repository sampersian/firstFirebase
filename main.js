var niceArray = ["You're very nice!", "You are dumb", "You are smart!", "You are a loser!", "Nice face.", "You have an ugly face."];

function generate() {
  var temp = Math.floor(Math.random() * niceArray.length);
  return "\""+niceArray[temp]+"\""
}

$("#sayBtn").click(function() {
  $("#saySpan").text(generate());
})
