FROM node:7.2.1
WORKDIR /webapp
ADD . /webapp
EXPOSE 80
CMD node --harmony app.js