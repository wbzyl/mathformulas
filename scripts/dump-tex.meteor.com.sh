#!/bin/bash

x=$(meteor mongo tex.meteor.com --url)
n=$(echo $x | sed -re "s#.+://client:(.+)@(.+):(.+)/(.+)#\1 \2 \3 \4#")

set -- $n

password=$1
host=$2
port=$3
database=$4

mongoexport --host $host --port $port --username client --password $password --collection mathformulas --db $database

# mongoimport --host localhost --port 3002 --db meteor --collection mathformulas --upsert mathformulas.json
# mongoimport --host localhost --port 3002 --db meteor --collection mathformulas --drop mathformulas.json
