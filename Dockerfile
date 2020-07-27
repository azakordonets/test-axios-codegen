FROM node:10.22.0-alpine3.10

RUN npm install -g typescript
RUN mkdir test-client-generation
WORKDIR /test-client-generation
COPY swagger-axios-codegen swagger-axios-codegen
COPY test-axios-codegen test-axios-codegen
RUN cd swagger-axios-codegen && yarn install && yarn link && cd ..
RUN cd test-axios-codegen && yarn link "swagger-axios-codegen" && yarn install
RUN node test-axios-codegen/src/index.js
RUN cat service/service.index.ts