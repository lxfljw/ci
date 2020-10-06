###
 # @Author: luxiaofeng
 # @Date: 2020-09-24 21:26:00
 # @LastEditors: luxiaofeng
 # @LastEditTime: 2020-10-07 00:15:33
 # @Description: file content
### 

#  autoBuild.sh
#! /bin/bash
# cd ../blog
# git reset --hard origin/master
# git clean -f
# git pull
# cd ./admin/static
# cnpm i
# npm start
git pull
sudo docker container stop admin-server
sudo docker rm -f admin-server
sudo docker image rm admin-server
sudo docker image build -t admin-server ../blog/admin/server
sudo docker run --name="admin-server" -d -p 8000:3000 admin-server 