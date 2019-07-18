# Dante Calderón Website
[![CircleCI](https://circleci.com/gh/dantehemerson/dantecalderon.com.svg?style=svg)](https://circleci.com/gh/dantehemerson/dantecalderon.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2b2a92f6-3281-47c5-b2bb-252235f364f5/deploy-status)](https://app.netlify.com/sites/dantecalderon/deploys)

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Requirements

Make sure that you have the Gatsby CLI program installed:
```sh
npm install -g gatsby-cli
```

## Installation

Install packages
```sh
yarn
```

And run:
```sh
gatsby develop
```
----
If you get an error of `pnglib`, execute:
```sh
sudo apt-get install libpng-dev
```
and
```sh
sudo npm install -g pngquant-bin --allow-root  --unsafe-perm=true
```
```sh
sudo npm i gatsby-image gatsby-transformer-sharp --unsafe-perm=true --allow-root
```

---

if not works
```
sudo wget -q -O /tmp/libpng12.deb http://mirrors.kernel.org/ubuntu/pool/main/libp/libpng/libpng12-0_1.2.54-1ubuntu1_amd64.deb \
  && dpkg -i /tmp/libpng12.deb \
  && rm /tmp/libpng12.deb
```
then, the issue will be solved.
