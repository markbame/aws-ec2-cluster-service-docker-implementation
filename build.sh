#!/bin/bash
NAME=$1
VERSION=$2

cd $NAME && docker build -t rep-$NAME$VERSION . && cd ..
docker tag rep-$NAME$VERSION:latest 925336818186.dkr.ecr.eu-west-2.amazonaws.com/$NAME:$VERSION
docker push 925336818186.dkr.ecr.eu-west-2.amazonaws.com/$NAME:$VERSION
