#!/usr/bin/env bash
export DOLLAR="$"
/bin/bash -c "envsubst '\$DOMAIN_URL \$VAR2' < /app/conf/nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"