###
 # @Author: luxiaofeng
 # @Date: 2020-09-24 21:26:00
 # @LastEditors: luxiaofeng
 # @LastEditTime: 2020-10-06 12:17:47
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
# sudo docker container rm admin-server
# sudo docker image rm admin-server
sudo docker image build -t admin-server ../blog/admin/server
sudo docker container run -p 8000:3000 -it admin-server