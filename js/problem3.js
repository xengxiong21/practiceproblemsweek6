var num = 1

for (var num = 1; num < 256; num++) {
  String.fromCharCode(num)
  document.write("<p>" + num + "    " + String.fromCharCode(num)+ "    " + (num).toString(16) + "</p>");
}
