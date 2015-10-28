var major_start = 1000;
var major_end = 1901;
var minor_start = 00;
var minor_end = 99;
var trail = [6000, 6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009];

for (var major = major_start; major < major_end; major++) {
  for (var minor = minor_start; minor < minor_end; minor++) {
    for (var k = 0; k < trail.length; k++) {
      var padded_minor = '';
      if (minor < 10) {
        padded_minor = '0';
      }
      var id = major.toString() + padded_minor + minor.toString() + trail[k].toString();
      console.log(id);
    }
  }
}
