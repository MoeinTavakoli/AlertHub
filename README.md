# Monia lite

## How to deploy

## requirement  ( postgres , node js )

## install postgres
1. Create the file repository configuration: \
`sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`

2. Import the repository signing key: \
`wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`

3. Update the package lists: \
`sudo apt-get update`

4. Install the latest version of PostgreSQL.\
`sudo apt-get -y install postgresql`

## install node js

1. install node js\
`sudo apt install nodejs`

2. install npm \
`sudo apt install npm`

### Deploy a node

1. clone the repo \
   `git clone -b develop https://gitlab.partdp.ir/network/monia/new-monia/monia.git`

2. install npm packages \
   `npm i`

3. copy `.env.example` as `.env.` \
   `cp .env.example .env`

4. fill the .env file \
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

5. migrate database \
   `npx prisma migrate`

6. seed database (must be run once ) \
   `npx prisma db seed`

7. Run monia \
   `node index.js` Or `pm2 start index.js`
