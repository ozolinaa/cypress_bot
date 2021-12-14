https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph
https://www.digitalocean.com/community/tutorials/react-server-side-rendering
https://styled-components.com/docs/advanced#server-side-rendering

docker build . -t 'xtonyx/react_ssr'
docker run -d -p 3000:3000 --name react_ssr xtonyx/react_ssr
npm set registry http://verdaccio.local:4873