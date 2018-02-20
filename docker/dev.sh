#!/bin/sh

. ./default.sh;

CONTEXT_NAME=$DEFAULT_CONTEXT_NAME;

if [ $# -eq 1 ]
then
    CONTEXT_NAME=$1
fi

if ! [ -d "contexts/$CONTEXT_NAME" ]; then
    echo "CONTEXT '$CONTEXT_NAME' not exists. Please, check README";
    exit 1;
fi

cd contexts/$CONTEXT_NAME && docker-compose up