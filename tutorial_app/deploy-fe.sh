#!/bin/bash
IP_ADDR="dbshore.com"
USER="root"
COPY_LOCATION="/var/www/dbshore.com/html"

#creating new build
echo "--------------------------- CREATING BUILD -----------------------------"
npm run build 
echo "--------------------------- DONE CREATING BUILD ------------------------"

#creating archive with build
echo "--------------------------- ARCHIVING ----------------------------------"
tar zcvf deploy_fe_tar.tar.gz build/*
echo "--------------------------- DONE ARCHIVING -----------------------------"

#saving the old files
echo "=========================== BACKUP ====================================="

echo "--------------------------- DETETING OLD BACKUP ------------------------"
ssh $USER@$IP_ADDR 'rm -rf /var/www/backup/*'
echo "--------------------------- DONE DELETING ------------------------------"

echo "--------------------------- COPYING NEW BACKUP -------------------------"
ssh $USER@$IP_ADDR 'cp -r /var/www/dbshore.com/* /var/www/backup'
echo "=========================== DONE BACKUP ================================"

echo "--------------------------- DELETING OLD FE ----------------------------"
ssh $USER@$IP_ADDR 'rm -rf /var/www/dbshore.com/html/*'
echo "--------------------------- DONE DELETING ------------------------------"

#copying new fe
echo "--------------------------- COPYING ARCHIVED BUILD ---------------------"
scp deploy_fe_tar.tar.gz $USER@$IP_ADDR:$COPY_LOCATION

echo "--------------------------- UNTAR THE ARCHIVE --------------------------"
ssh $USER@$IP_ADDR 'tar xvf /var/www/dbshore.com/html/deploy_fe_tar.tar.gz -C /var/www/dbshore.com/html/'
ssh $USER@$IP_ADDR 'mv /var/www/dbshore.com/html/build/* /var/www/dbshore.com/html'
ssh $USER@$IP_ADDR 'rm -rf /var/www/dbshore.com/html/build'
ssh $USER@$IP_ADDR 'rm /var/www/dbshore.com/html/deploy_fe_tar.tar.gz'
echo "--------------------------- DONE COPYING -------------------------------"
