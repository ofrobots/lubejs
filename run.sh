#!/bin/bash


./node-v5.6.0-linux-x64/bin/node lubelean.js &>> lubelean.log
echo 'EXIT CODE IS ' $? >>                      'lubelean.log'
