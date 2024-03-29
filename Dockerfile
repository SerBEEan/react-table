FROM node as build
RUN apt-get update && apt-get upgrade -y
WORKDIR /usr/src/app-react-table/
COPY . /usr/src/app-react-table/
RUN npm ci
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app-react-table/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
