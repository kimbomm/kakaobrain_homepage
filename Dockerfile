FROM node:14-alpine
WORKDIR ./
# COPY ./dist /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# WORKDIR /usr/share/nginx/html
RUN npm run build
RUN npm run start

EXPOSE 3011
