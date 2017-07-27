FROM node:8
WORKDIR /var/www/app
COPY ecosystem.config.js /etc/ecosystem.config.js
RUN npm install pm2 -g
RUN npm install babel-cli -g

RUN mkdir /var/www/app/certs
RUN git clone https://github.com/letsencrypt/letsencrypt /var/www/app/certs/letsencrypt
RUN cd /var/www/app/certs/letsencrypt
RUN ./letsencrypt-auto certonly --standalone -d mushtarek.org -d www.mushtarek.org
CMD tail -f /dev/null
