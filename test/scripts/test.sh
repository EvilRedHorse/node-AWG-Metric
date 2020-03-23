#! /usr/bin/bash --posix
# 

# Fedora Requires: 
# suso dnf install jq R

### function to print multiple blank lines
function lines { yes '' | sed ${1}q ; }

# print args
lines 2 && printf "$0" && lines 2 && printf "$1" lines 2 && printf "$2" && lines 2

# send AWG to R script, write JSON output to cache
scripts/R/awg-metric.r $1 > cache/awg.json

# 
cat cache/awg.json  | jq -r .diameter > cache/diameter.txt
cat cache/awg.json  | jq -r .area > cache/area.txt

