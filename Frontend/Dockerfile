FROM node:16.17.0 as build
WORKDIR /app/frontend
COPY package*.json ./
RUN npm --verbose install
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine as production
COPY --from=build /app/frontend/build /usr/share/nginx/html
# COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]