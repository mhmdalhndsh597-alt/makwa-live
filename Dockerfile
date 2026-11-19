FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY public ./public
COPY server ./server
COPY app.config.ts ./app.config.ts
EXPOSE 3000
CMD ["node", "server/server.js"]
