FROM kyma/docker-nginx

COPY conf/nginx.conf /etc/nginx/nginx.conf

COPY build/ /var/www/react-universal

ADD conf/server.crt /etc/nginx/ssl/

ADD conf/server.key /etc/nginx/ssl/

RUN ln -s /etc/nginx/sites-available/default-ssl /etc/nginx/sites-enabled/default-ssl

CMD 'nginx'
