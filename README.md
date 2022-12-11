# Monia lite

## How to deploy

### Deploy a node

1. clone the repo \
   `git clone -b develop https://github.com/MoeinTavakoli/monia-alertManager.git` 

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
   `PROMETHEUS_IP` is your server ip that proemtheus run in this server \
   `PROMETHEUS_PORT` is your port prometheus that run in this port 

5. migrate database \
   `npx prisma migrate` 

6. seed database (must be run once ) \
   `npx prisma db seed` 

7. Run monia   \
   `node index.js` Or `pm2 start index.js` 
