###
 # @Author: luxiaofeng
 # @Date: 2020-09-24 21:26:00
 # @LastEditors: luxiaofeng
 # @LastEditTime: 2020-09-24 21:26:26
 # @Description: file content
### 

#  autoBuild.sh
#! /bin/bash
git reset --hard origin/master
git clean -f
git pull
npm start