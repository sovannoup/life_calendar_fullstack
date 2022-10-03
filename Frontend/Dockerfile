FROM node:16.17.0 as build
WORKDIR /app/Frontend
COPY package*.json /app/Frontend/
ENV NODE_OPTIONS=--max_old_space_size=1024
RUN npm --verbose install
COPY . /app/Frontend/
RUN npm run build

# production environment
FROM nginx:stable-alpine as production
COPY --from=build /app/Frontend/build /usr/share/nginx/html
COPY --from=build /app/Frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]