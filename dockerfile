FROM ubuntu:18.04

USER root
EXPOSE 3333

RUN apt-get update -y 
RUN apt-get install vim -y 
RUN apt-get update -y 
RUN apt-get install curl -y
RUN apt-get install wget -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN npm cache clean -f
RUN npm install -g n
RUN n 16.15.1 -y
RUN apt-get install git -y
RUN mkdir /opt/apt
RUN apt-get update -y
RUN apt-get upgrade -y
RUN npm install -g yarn -y
