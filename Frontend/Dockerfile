FROM node:16.17.0 as build
WORKDIR /app/Frontend
COPY package*.json ./
RUN npm --verbose install
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine as production
COPY --from=build /app/Frontend/build /usr/share/nginx/html
# COPY --from=build /app/Frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]