FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
# CMD ["invalid-command"]
# CMD ["python","main.py"]



