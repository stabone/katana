
## Env. setup

Copy `env.example` in root directory. Default values could be used!

Run `docker-compose build` and after it's done `docker-compose up --remove-orphans`
to stop project run `docker-compose down --remove-orphans`

If there is need to execute some commands from api `docker image docker exec -it api /bin/sh`
command could be used to open shell session in needed docker image.


## Api

**POST** `localhost:3000/game/create` - for card deck creation

**GET** `localhost:3000/game/open/:uuid` - open card deck

**GET** `localhost:3000/game/draw/:uuid?count=:count` - draw n cards
