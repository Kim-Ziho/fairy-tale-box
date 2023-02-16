var express = require("express");
var app = express.Router();
var spawn = require("child_process").spawn;

function spawnTest() {
    return new Promise(function(resolve, reject) {
      // 2. spawn을 이용하여 새 프로세스를 만듭니다.
      let process = spawn('bash');
  
      // 3. 실행할 명령을 작성합니다.
      // '\n' 은 엔터입니다. terminal 이기 때문에 엔터로 명령어를 입력해야 실행되겠죠?
      const command = 'scp -r -i C://Users/multicampus/Desktop/S08P12C101/backend/talebox_nodejs/backend/routes/I8C101T.pem ubuntu@i8c101.p.ssafy.io:~/gogo C://download/ \n'; // a: 숨긴 파일까지 , l: 자세한 내용까지 검색
      
  
      try {
        // 4. 부모 프로세서에서 자식프로세서로 명령을 보냅니다.
        process.stdin.write(command);
        
        // stdin을 이용할때는 end()로 반드시 입력을 끝내야합니다.
        process.stdin.end(); 
  
        // 5. 명령이 모두 실행됐다면 'close' 이벤트가 발생합니다.
        process.on('close', function (code) {
          console.log('end')
          resolve(code);
        });
      } catch (err) {
        console.log('error')
        reject(err);
      }
    })
   }
  
app.get("/", function(req, res) {
    spawnTest();
    res.json({ success: "downloaded"});
});
  
  module.exports = app;
