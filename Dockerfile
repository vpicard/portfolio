FROM node:16.14.0
LABEL description="This is the base docker image for the portfolio of Vincent Picard"
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]