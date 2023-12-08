FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn install
CMD [ "node", 'src/main.tsx' ]
EXPOSE 8080