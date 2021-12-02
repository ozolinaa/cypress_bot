FROM node:16-alpine
COPY . /opt/react-app/
WORKDIR /opt/react-app/
RUN npm install && npm run build && rm -r -f node_modules

FROM node:16-alpine
COPY --from=0 /opt/react-app/ /opt/react-app/
WORKDIR /opt/react-app/
RUN npm install --only=prod

EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD ["server"]