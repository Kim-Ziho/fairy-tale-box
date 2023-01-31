package c101.fairytalebox.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;
import org.apache.commons.net.ftp.FTPReply;
import java.util.Map;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
public class FtpController {

    @GetMapping("/download")
    public Map<String, Objects> downloadSController(){
        FTPClient client = new FTPClient();
        try {
            // connection 환경에서 UTF-8의 인코딩 타입을 사용한다.
            client.setControlEncoding("UTF-8");
            // ftp://localhost에 접속한다.
            client.connect("127.26.3.83");
            // 접속을 확읺나다.
            int resultCode = client.getReplyCode();
            // 접속시 에러가 나오면 콘솔에 에러 메시지를 표시하고 프로그램을 종료한다.
            if (!FTPReply.isPositiveCompletion(resultCode)) {
                System.out.println("FTP server refused connection.!");
                return null;
            } else {
                // 파일 전송간 접속 딜레이 설정 (1ms 단위기 때문에 1000이면 1초)
                client.setSoTimeout(1000);
                // 로그인을 한다.
                if (!client.login("ubuntu", "ubuntu")) {
                    // 로그인을 실패하면 프로그램을 종료한다.
                    System.out.println("Login Error!");
                    return null;
                }

                ///************FTP 모두 삭제***************
                // 파일 정보를 위한 리스트 변수
                List<String> files = new ArrayList<>();
                // 디렉토리 정보를 위한 리스트 변수
                List<String> directories = new ArrayList<>();
                // FTP에서 파일 리스트와 디렉토리 정보를 취득한다.
                if (getFileList(client, File.separator, files, directories)) {
                    // 모든 파일을 지운다.
                    for (String file : files) {
                        client.deleteFile(file);
                    }
                    // getFileList에서 재귀적 함수를 이용하여 디렉토리를 구조를 구하였다.
                    // 그래서 상위 디렉토리 정보가 리스트의 앞쪽에 있고 하위 디렉토리 정보가 리스트 뒤쪽에 있다.
                    // 디렉토리 삭제는 하위부터 삭제해야 하기 때문에 리스트를 뒤집은 것
                    Collections.reverse(directories);
                    // 디렉토리를 지운다.
                    for (String directory : directories) {
                        client.removeDirectory(directory);
                    }
                } else {
                    // 리스트 취득 실패시 프로그램을 종료한다.
                    System.out.println("File search Error!");
                    return null;
                }

//                ///************업로드***************
//                // 로컬 디렉토리 설정
//                String root = "d:\\ftptest\\upload";
//                // 리스트 초기화
//                files.clear();
//                directories.clear();
//                // 로컬 디렉토리 파일과 디렉토리 정보를 취득
//                getUploadList("d:\\ftptest\\upload", files, directories);
//                // 디렉토리 생성
//                for (String directory : directories) {
//                    client.makeDirectory(directory);
//                }
//                // 파일 업로드
//                for (String file : files) {
//                    // 파일 InputStream을 가져온다.
//                    try (FileInputStream fi = new FileInputStream(file)) {
//                        // FTPClient의 staoreFile함수로 보내면 업로드가 이루어 진다.
//                        if (client.storeFile(file.replace(root, ""), fi)) {
//                            System.out.println("Upload - " + file);
//                        }
//                    }
//                }

                ///************다운로드***************
                // 리스트 초기화
                files.clear();
                directories.clear();
                // Ftp로부터 다운받아서 저장할 경로 설정
                String root = "c:\\ftptest\\download";
                // FTP에서 파일 리스트와 디렉토리 정보를 취득한다.
                if (getFileList(client, File.separator, files, directories)) {
                    // 디렉토리 구조대로 로컬 디렉토리 생성
                    for (String directory : directories) {
                        File file = new File(root + directory);
                        file.mkdir();
                    }
                    for (String file : files) {
                        // 파일의 OutputStream을 가져온다.
                        try (FileOutputStream fo = new FileOutputStream(root + File.separator + file)) {
                            // FTPClient의 retrieveFile함수로 보내면 다운로드가 이루어 진다.
                            if (client.retrieveFile(file, fo)) {
                                System.out.println("Download - " + file);
                            }
                        }
                    }
                } else {
                    // 리스트 취득 실패시 프로그램을 종료한다.
                    System.out.println("File search Error!");
                    return null;
                }
                // ftp를 로그아웃한다.
                client.logout();
            }
        } catch (Throwable e) {
            e.printStackTrace();
        } finally {
            // ftp 커넥션이 연결되어 있으면 종료한다.
            try {
                if (client.isConnected()) {
                    client.disconnect();
                }
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }

        return null;
    }

    private static void getUploadList(String root, List<String> files, List<String> directories) {
        File upload = new File(root);
        // root로 받은 경로의 파일 리스트를 받아 온다.
        for (File file : upload.listFiles()) {
            // 리스트의 객체가 파일이면
            if (file.isFile()) {
                // files 리스트에 경로를 추가한다.
                files.add(file.getAbsolutePath());
            } else {
                // 디렉토리리면 함수의 재귀적 방식으로 하위 탐색을 시작한다.
                getUploadList(file.getAbsolutePath(), files, directories);
                // directories 리스트에 디렉토리 경로를 추가한다.
                directories.add(file.getAbsolutePath().replace(root, ""));
            }
        }
    }
    // FTP의 파일 리스트와 디렉토리 정보를 취득하는 함수.
    private static boolean getFileList(FTPClient client, String cw, List<String> files, List<String> directories)
            throws IOException {
        // FTP의 디렉토리 커서를 이동한다.
        if (client.changeWorkingDirectory(cw)) {
            // 해당 디렉토리의 파일 리스트를 취득한다.
            for (FTPFile file : client.listFiles()) {
                // 리스트의 객체가 파일이면
                if (file.isFile()) {
                    // files 리스트에 경로를 추가한다.
                    files.add(cw + file.getName());
                } else {
                    // 디렉토리리면 함수의 재귀적 방식으로 하위 탐색을 시작한다.
                    if (!getFileList(client, cw + file.getName() + File.separator, files, directories)) {
                        return false;
                    } else {
                        // directories 리스트에 디렉토리 경로를 추가한다.
                        directories.add(cw + file.getName() + File.separator);
                    }
                }
            }
            // 이건 FTP의 디렉토리 커서를 상위로 이동하는 함수입니다.(여기서는 사용하지 않았으나 자주 사용하는 함수입니다.)
            // client.changeToParentDirectory();
            // FTP의 디렉토리 커서를 이동한다.
            return client.changeWorkingDirectory(File.separator);
        }
        // 커서 이동에 실패하면 false를 리턴한다.
        return false;
    }
}
