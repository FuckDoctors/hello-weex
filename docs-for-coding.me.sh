#!/bin/bash
# coding.me下的hellow-weex的路径
CODING_ME_PATH=~/git/zhaobc.coding.me/hello-weex

# 删除原来的文件
rm -rf ${CODING_ME_PATH}
# copy新的文件
cp -R docs ${CODING_ME_PATH}

# 替换host
# sed 1 invalid command code
# https://www.tuicool.com/articles/BrYVbm7
# https://stackoverflow.com/questions/29081799/sed-1-invalid-command-code-f
sed -i '' "s/fuckdoctors.github.io/zhaobc.coding.me/g" `grep "fuckdoctors.github.io" -rl ${CODING_ME_PATH}`
