const fs = require("fs");

fs.readFileSync('/home/nvidia/S08P12C101/backend/talebox_nodejs/backend/routes/hi.txt', "utf8", (err, data) => {
  return data
});
