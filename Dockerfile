FROM node:14-alpine
WORKDIR /app
COPY ./ /app
RUN npm install
# COPY ./dist /usr/share/nginx/html
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# WORKDIR /usr/share/nginx/html
RUN npm run build

EXPOSE 3011
CMD ["npm", "run","start"]
