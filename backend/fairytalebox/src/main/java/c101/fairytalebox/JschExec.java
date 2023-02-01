package c101.fairytalebox;

import java.io.File;
import java.io.InputStream;
import java.util.Vector;
import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class JschExec {

    private String ADDRESS = "i8c101.p.ssafy.io";
    private int PORT = 22;
    private String USERNAME = "sftpdownload";
    private String PASSWORD = "sftpdownload";
    private static Session session = null;
    private static Channel channel = null;
    private static ChannelExec channelExec = null;
    private static ChannelSftp channelSftp = null;
    private static final String PATHSEPARATOR = "/";

    //세션 오픈 메소드
    public boolean sshAccess() {
        try {
            JSch jsch = new JSch();

            jsch.setKnownHosts("/etc/hosts");  //요기 요거!!

            session = jsch.getSession(USERNAME, ADDRESS, PORT);
            session.setPassword(PASSWORD);
            java.util.Properties config = new java.util.Properties();
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
            session.connect();
            return true;
        } catch(Exception e) {
            return false;
        }
    }

    //파일 다운로드
    public void recursiveFolderDownload(String sourcePath, String destinationPath){
        try {
            channel = session.openChannel("sftp");
            channel.connect();
            channelSftp = (ChannelSftp) channel;
            Vector<ChannelSftp.LsEntry> fileAndFolderList = channelSftp.ls(sourcePath); // Let list of folder content
            for (ChannelSftp.LsEntry item : fileAndFolderList) {
                if (!item.getAttrs().isDir()) { // 파일체크
                    if (!(new File(destinationPath + PATHSEPARATOR + item.getFilename())).exists()
                            || (item.getAttrs().getMTime() > Long
                            .valueOf(new File(destinationPath + PATHSEPARATOR + item.getFilename()).lastModified()
                                    / (long) 1000)
                            .intValue())) { // Download only if changed later.
                        new File(destinationPath + PATHSEPARATOR + item.getFilename());
                        channelSftp.get(sourcePath + PATHSEPARATOR + item.getFilename(),
                                destinationPath + PATHSEPARATOR + item.getFilename()); // 파일 다운로드 하기
                    }
                } else if (!(".".equals(item.getFilename()) || "..".equals(item.getFilename()))) {
                    new File(destinationPath + PATHSEPARATOR + item.getFilename()).mkdirs(); // Empty folder copy.
                    recursiveFolderDownload(sourcePath + PATHSEPARATOR + item.getFilename(),
                            destinationPath + PATHSEPARATOR + item.getFilename());
                }
            }
        } catch(Exception e) {

        }
    }
}