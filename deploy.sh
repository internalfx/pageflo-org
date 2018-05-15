sudo systemctl stop pageflo-org.service
git reset --hard HEAD
git pull
yarn
gulp
sudo systemctl start pageflo-org.service
