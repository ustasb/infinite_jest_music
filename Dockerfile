FROM alpine:3.6
MAINTAINER Brian Ustas <brianustas@gmail.com>

ARG APP_PATH="/opt/infinite_jest_music"

WORKDIR $APP_PATH
COPY . $APP_PATH
VOLUME $APP_PATH
