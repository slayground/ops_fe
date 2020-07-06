FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist /usr/share/nginx/html