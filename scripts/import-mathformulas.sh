#!/bin/bash

mongoimport --drop --host localhost --port 3002 --db meteor --collection mathformulas --file mathformulas.json
