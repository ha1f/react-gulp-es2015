#! /bin/sh
selfdir=`dirname $0`
cd $selfdir
open -n -a Google\ Chrome --args "http://localhost:8080"
python -m SimpleHTTPServer 8080
