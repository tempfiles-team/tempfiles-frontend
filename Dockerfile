FROM nginx:stable

WORKDIR /usr/share/nginx/html

COPY ./env-creator.sh .
RUN chmod +x env-creator.sh

COPY dist .
COPY .env .

EXPOSE 80

CMD /bin/bash -c ./env-creator.sh && nginx -g 'daemon off;'