# AlertHub

## How to deploy

## Requirement ( postgres , node js )

## Install PostgreSQL

1. Create the file repository configuration: \
   `sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`

2. Import the repository signing key: \
   `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`

3. Update the package lists: \
   `sudo apt-get update`

4. Install the latest version of PostgreSQL.\
   `sudo apt-get -y install postgresql`

## Install node js

1. Install node js\
   `sudo apt install nodejs`

2. Install npm \
   `sudo apt install npm`

### Deploy a node

1. `cd /opt` \

1. Clone the repository \
   `git clone -b release_1.0.0 https://github.com/MoeinTavakoli/AlertHub.git`

3. change directory to AlertHub directory and copy .env then fill the .env \
`cd AlertHub/ && cp .env.example .env` \ 

2. Install npm packages \
   `npm i`

3. Copy `.env.example` as `.env.` \
   `cp .env.example .env`

4. Create database in postgres \
`sudo -u postgres psql`\
`create DATABASE monia;`\
`create user monia with encrypted password 'monia';` \
`grant all privileges on database monia to monia;` \
`ALTER USER monia CREATEDB;` \
'\q'

4. Fill the .env file \
   `PORT` is your port that you want to server run on this port \
   `HOST` is your hostname like localhost \
   `DATABASE_URL` is url database like \
   this is format url connection postgres `postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName` \
   `SMS_APIKEY` is ApiKey that generate in dashboard kavenegrar \
   `SMS_NUMBER` is your sms number that is exist in your dashboard kavenegar \
   `ROCKETCHAT_GP_ALERT_TOKEN` is your token to access in alert bot rocket chat \
   `ROCKETCHAT_GP_ERROR_TOKEN` is your token to access in error bot rocket chat \
   `ROCKETCHAT_URL` is the url server rocketChat \
   `JWT_SECRET` is your secret key for generate token (take care to keep it safe !!!) \
   `ROOT_PASSWORD` is for root password that you

8. Migrate database \
   `npx prisma migrate dev`

9. Seed database (just run once time ) \
   `npx prisma db seed`

10. Edit config postgres \
`vim /etc/postgresql/14/main/postgresql.conf` \
uncomment: \
`listen_addresses= 'localhost'`

11. Install pm2 \
`npm install pm2@latest -g`

7. Run server \
    `pm2 start index.js`
