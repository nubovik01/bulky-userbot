# bulky

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![mtcute](https://img.shields.io/badge/mtcute-F69DDC?style=for-the-badge)

A useful tool for deleting all messages (in the chat where the command was executed or globally) containing a certain word or phrase.

Use the "-g" flag to delete messages in **ALL** your PMs and chats.
```
.bulk -g stupid nikita
```

Use the "-l" flag to delete **ONLY** your messages.
```
.bulk -l maybe i'm cringe
```

You can combine flags for better results! For example, this command will delete all **YOUR** messages in **ALL** your PMs and chats:
```
.bulk -g -l i'm not cute >.<
```

Otherwise, without using flags, messages from **ALL** users in the PM (or chat) where the command was executed will be deleted.

## screenshots
<img width="387" alt="image" src="https://bankai.kittyy.ru/yomu/bulky/flood.png"><br>
<img width="387" alt="image" src="https://bankai.kittyy.ru/yomu/bulky/bulk-1.png"><br>
<img width="387" alt="image" src="https://bankai.kittyy.ru/yomu/bulky/bulk-2.png"><br>
<img width="387" alt="image" src="https://bankai.kittyy.ru/yomu/bulky/kawaii.png">

## install node (on macos/windows)

1. download node.js: https://nodejs.org/en
2. restart your pc or reopen vsc & terminal with admin rights

## install node (on arch linux)

```bash
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/nvm.git ~/nvm
cd ~/nvm
makepkg -si
```

## install node (on ubuntu)

```bash
sudo apt update
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
```

## environment variables

rename `.env.example` to `.env` and fill in the variables

you can get API_ID and API_HASH here: https://my.telegram.org/apps

## install dependencies

```bash
npm i
```

## usage

```bash
node .
```

## special thanks
- [@devilr33f](https://github.com/devilr33f) - for help with creating