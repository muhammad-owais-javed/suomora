FROM node:lts-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

FROM nginx:stable-alpine

COPY --from=builder /app/dist /user/share/nginx/html