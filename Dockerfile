FROM node:14

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8086

ENV HOST=0.0.0.0
ENV PORT=8086

CMD [ "npm", "run", "start" ]