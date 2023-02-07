FROM node:16.18.0 as build-stage
WORKDIR /var/jenkins_home/workspace/talebox/frontend/my-app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/jenkins_home/workspace/talebox/frontend/my-app/build /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/talebox/frontend/my-app/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g","daemon off;"]
