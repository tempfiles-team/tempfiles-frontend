FROM nginx:latest

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

COPY build /etc/nginx/html

EXPOSE 80

CMD nginx -g 'daemon off;'