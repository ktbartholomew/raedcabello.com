FROM ubuntu:bionic

RUN apt-get update && \
apt-get install -y nodejs npm ruby ruby-dev build-essential curl && \
gem install jekyll

WORKDIR /site

ADD . /site

RUN npm install
