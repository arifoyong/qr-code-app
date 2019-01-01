#Base image=============================================
FROM node:8 as node_base

#Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#install all dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

#Copy all files
COPY . ./

#Start app
#CMD ["npm", "start"]
EXPOSE 3000
#======================================================