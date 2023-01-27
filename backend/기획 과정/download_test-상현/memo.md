https://algoisanswer.tistory.com/27

1. 원격 서버(EC2)폴더 ===> 로컬 폴더

scp -r -i xxxxx.pem ubuntu@public IpV4 DNS of EC2:/원하는 서버 디렉토리/ /원하는 로컬 디렉토리/

2. 로컬 폴더 ===> 원격 서버(EC2)폴더

scp -r -i xxxx.pem /원하는 로컬 디렉토리 ubuntu@public IpV4 DNS of EC2:/원하는 서버 디렉토리/

3. 원격 서버(EC2)파일 ===> 로컬 폴더

scp -i xxxxx.pem ubuntu@public IpV4 DNS of EC2:/원하는 서버 디렉토리/파일명 /원하는 로컬 디렉토리/

4. 로컬 파일 ===> 원격 서버(EC2)폴더

scp -i xxxx.pem /원하는 로컬 디렉토리/파일명 ubuntu@public IpV4 DNS of EC2:/원하는 서버 디렉토리/
