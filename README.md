# Auth PHan Trung Phú
 `Code by Trịnh Xuân Lễ`
# RUN PROJECT
 `npm start`

# Yêu cầu
- Toàn bộ source phải để spaces 4
- Commit phải đúng nội dung xử lý, không được push các file thừa  ( node_modules)


# Cấu hình server
## Pm2
`nginx`
`Run build`
`pm2 --name le-reactjs  serve build/ 5001 --spa`
## Cấu hình nginx
`server {
access_log /var/log/nginx/le-reactjs.net-access.log;
error_log /var/log/nginx/le-reactjs.net-error.log;

         server_name le-reactjs.123code.net www.le-reactjs.123code.net;
         root /var/www/tranining/reactjs-ecommerce/build;
         location / {
                proxy_pass   http://127.0.0.1:5001;
         }

         # PHP-FPM Configuration Nginx
         location ~ \.php$ {
                 try_files $uri =404;
                 fastcgi_split_path_info ^(.+\.php)(/.+)$;
                 fastcgi_pass unix:/run/php-fpm/www.sock;
                 fastcgi_index index.php;
                 fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                 include fastcgi_params;
                 fastcgi_buffer_size 256k;
                 fastcgi_buffers 4 256k;
                 fastcgi_busy_buffers_size 512k;
                 fastcgi_read_timeout 600;
         }
        location ~* \.(?:jpg|jpeg|gif|png|ico|svg|woff2|ttf)$ {
                 expires 1w;
                 access_log off;
                 add_header Cache-Control "public";
        }

        # CSS and Javascript
        location ~* \.(?:css|js)$ {
                expires 1w;
                access_log off;
                 add_header Cache-Control "public";
        }





    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/le-reactjs.123code.net/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/le-reactjs.123code.net/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
if ($host = le-reactjs.123code.net) {
return 301 https://$host$request_uri;
}

    server_name le-reactjs.123code.net;
    listen 80;
    return 404; # managed by Certbot
}
server {
if ($host = le-reactjs.123code.net) {
return 301 https://$host$request_uri;
} # managed by Certbot



         server_name le-reactjs.123code.net;
    listen 80;
    return 404; # managed by Certbot


}`

