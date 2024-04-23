#Stage 1: Fetching the secrets from github actions
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install 
CMD ["node", "index.js"]
EXPOSE 80

