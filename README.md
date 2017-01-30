# mqtt-sample
mqtt-sample


npm install
node app.js

## openssl 
- openssl genrsa -des3 -out server.key 2048
- openssl rsa -in server.key -out server.key
- openssl req -sha256 -new -key server.key -out server.csr -subj "/C=US/ST=Sincity/L=Portland/O=FA Heroes Company/OU=Org/CN=localhost"
- openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt


## feature
extented security feature
adding foreacast 
