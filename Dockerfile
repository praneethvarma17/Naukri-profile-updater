FROM node:18-alpine

COPY . /tmp

RUN cd /tmp && npm ci

CMD [ "node", "/tmp/index.js" ]
