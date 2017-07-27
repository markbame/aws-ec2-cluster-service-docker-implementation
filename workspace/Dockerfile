FROM node:8
WORKDIR /var/www/app
COPY ecosystem.config.js /etc/ecosystem.config.js
RUN npm install pm2 -g
RUN npm install babel-cli -g
CMD tail -f /dev/null
