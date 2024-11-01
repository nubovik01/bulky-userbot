# bulky

A useful tool for deleting all messages (in the chat where the command was executed or in all your PMs) containing a certain word or phrase.

Use the "-g" flag to delete messages in all your PMs. For example: `.bulk -g stupid nikita`.

## thanks for help with creating
- [@devilr33f](https://github.com/devilr33f)

## screenshots
<img width="387" alt="image" src="https://github.com/user-attachments/assets/8f47e9f6-61db-4cb8-a555-53e3e78284c7"><br>
<img width="387" alt="image" src="https://github.com/user-attachments/assets/04cdd690-d30f-4d13-b7fb-caf07e983c18"><br>
<img width="387" alt="image" src="https://github.com/user-attachments/assets/9ce8f0eb-c81d-4b39-8d77-1d004353a831"><br>
<img width="387" alt="image" src="https://github.com/user-attachments/assets/c3761ab0-6eee-4189-8d32-358dbe830981">

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

## install dependencies

```bash
npm i
```

## usage

```bash
node .
```