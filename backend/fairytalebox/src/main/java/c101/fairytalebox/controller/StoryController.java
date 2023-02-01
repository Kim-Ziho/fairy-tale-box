package c101.fairytalebox.controller;


import c101.fairytalebox.JschExec;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/story")
public class StoryController {

    @GetMapping("/download")
    public ResponseEntity<String> download(){

        JschExec jsch = new JschExec();
        if(jsch.sshAccess()){
            jsch.recursiveFolderDownload("/sftpdownload/uploads/","C:\\download");
            return new ResponseEntity<String>("downloaded",HttpStatus.OK);
        }
        else {
            return new ResponseEntity<String>("download_error",HttpStatus.BAD_REQUEST);
        }



    }
}
