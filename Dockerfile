FROM node:16
WORKDIR /app
COPY . .
RUN npm install express pg
EXPOSE 3000
CMD ["node", "index.js"]