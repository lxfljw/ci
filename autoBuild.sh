###
 # @Author: luxiaofeng
 # @Date: 2020-09-24 21:26:00
 # @LastEditors: luxiaofeng
 # @LastEditTime: 2020-10-07 19:54:38
 # @Description: file content
### 

cd ../blog/admin/server
git pull
sudo docker container stop admin-server
sudo docker rm -f admin-server
sudo docker image rm admin-server
sudo docker image build -t admin-server .
sudo docker run --name="admin-server" -d -p 8000:3000 admin-server 