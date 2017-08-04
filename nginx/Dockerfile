FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/
ADD certs /etc/nginx/certs
ADD app.conf /etc/nginx/conf.d/app.conf

CMD ["nginx"]
