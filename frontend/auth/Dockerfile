FROM node:16.18.0 as build-stage
WORKDIR /var/jenkins_home/workspace/talebox/frontend/auth
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/jenkins_home/workspace/talebox/frontend/auth/build /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/talebox/frontend/auth/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
