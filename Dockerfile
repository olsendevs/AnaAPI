FROM node:lts as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm i

RUN npm ci

COPY . .

RUN npm uninstall -g typescript
RUN npm install -g typescript

RUN npm run build

FROM node:lts-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

COPY .env ./

RUN npm i

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/server.js" ]