#!/bin/sh
# installer.sh will install the necessary packages

main () {
  rpi
  config_env
  install_be
  install_fe
}

rpi() {

# Version of Raspbian
apt-get install lsb_release
lsb_release -a
# Run Update & Upgrade
echo "\n"
echo "  Running apt-get update & upgrade \n"

#apt-get update && apt-get upgrade -y
printf "  Current version of npm: $( npm -v)\n"
npm install -g npm
printf  "  New version of npm: $( npm -v)\n"
echo "/n"
}

config_env() {
echo "  Configuring Environment.........."
# read -p $'\e[33mWhat\'s your MongoDB credentials? \e[39m' -r mongodb_connstr
#git pull origin master
}

install_be() {
echo "================================================="
echo "  Deploying Backend packages.........."
echo "  Installing express.js..."
npm install express
echo "\n"
echo "\n"

echo "  Installing cors..."
npm install cors
echo "\n"
echo "\n"

echo "  Installing dotenv..."
npm install dotenv

echo "\n"
echo "\n"

echo "  Installing nodemon..."
npm install nodemon
echo "\n"
echo "\n"
echo "\n"
}

install_fe() {
echo "================================================="
echo "  Deploying Frontend packages.........."

echo "  Installing bootstrap..."
npm install bootstrap
echo "\n"
echo "\n"

echo "  Installing react-router-dom..."
npm install react-router-dom
echo "\n"
echo "\n"

# npm start

}

main
