FROM kyma/docker-nginx

COPY conf/nginx.conf /etc/nginx/nginx.conf

COPY build/ /var/www/react-universal

CMD 'nginx'
