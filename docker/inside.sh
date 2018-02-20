#!/bin/sh
. ./default.sh;

CONTEXT_NAME=$DEFAULT_CONTEXT_NAME;
CONTAINER_NAME="none"
CONTAINER_NUMBER=1;

if [ $# -eq 0 ]
then
    echo "Please, provide all arguments. Check README"
    exit 1;
fi

if [ $# -eq 1 ]
then
    CONTAINER_NAME=$1
fi

if [ $# -eq 2 ]
then
    CONTEXT_NAME=$1
    CONTAINER_NAME=$2
fi

if [ $# -eq 3 ]
then
    CONTEXT_NAME=$1
    CONTAINER_NAME=$2
    CONTAINER_NUMBER=$3
fi

if ! [ -d "contexts/$CONTEXT_NAME" ]; then
    echo "CONTEXT '$CONTEXT_NAME' not exists. Please, check README";
    exit 1;
fi
DOCKER_CONTAINER_NAME+=$CONTEXT_NAME;DOCKER_CONTAINER_NAME+='_';
DOCKER_CONTAINER_NAME+=$CONTAINER_NAME;DOCKER_CONTAINER_NAME+='_';
DOCKER_CONTAINER_NAME+=$CONTAINER_NUMBER;

docker exec -it $DOCKER_CONTAINER_NAME bash;