FROM node:20

WORKDIR /usr/src/app

# Instala las dependencias necesarias para compilar bcrypt
#RUN apt-get update && apt-get install -y python make g++

COPY package*.json ./

# Instala las dependencias, incluyendo devDependencies
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]