sudo systemctl stop www-pageflo-org.service
git reset --hard HEAD
git pull
yarn
gulp
sudo systemctl start www-pageflo-org.service
