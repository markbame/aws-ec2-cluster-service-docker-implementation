#!/bin/bash
cd app &&
pm2 deploy ecosystem.config.js production_react_app setup

#docker exec -it ecs-ecscompose-react-docker2-33-workspace-e0e0d792f8fa80cd7e00 bash -c "cd /var/www/app/node_api/source && pm2 restart 'api'"
