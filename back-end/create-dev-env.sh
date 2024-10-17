#!/bin/sh
FILE=./.env
if test -f "$FILE"; then
echo "loading current .env file"
else
cp ./.env.example ./.env
fi
