FROM nginx
COPY ./ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html

RUN npm install

# 빌드
RUN npm run build
# 컨테이너 실행시 시작

EXPOSE 80

CMD [ "npm", "run", "start" ]