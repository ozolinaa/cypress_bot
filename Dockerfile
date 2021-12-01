FROM node:16-alpine
COPY . /opt/react-app/
WORKDIR /opt/react-app/
RUN npm install && npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["server"]