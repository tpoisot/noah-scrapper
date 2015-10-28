var major_start = 500;
var major_end = 1901;
var minor_start = 00;
var minor_end = 99;
var trail = [6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009];

for (var major = major_start; major < major_end; major++) {
  for (var minor = minor_start; minor < minor_end; minor++) {
    for (var k = 0; k < trail.length; k++) {
      var maj = ("000000" + major.toString()).slice(-4);
      var min = ("00" + minor.toString()).slice(-2);
      var id = maj + min + trail[k].toString();
      console.log(id);
    }
  }
}
