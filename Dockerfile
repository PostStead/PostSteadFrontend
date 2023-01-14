# Stage 1
FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/post-stead-frontend /usr/share/nginx/html

# Fix routing issue
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY default /etc/nginx/sites-available/default

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]