FROM postgres:14-alpine

ARG PG_GROUP
ARG PG_USER

ENV PG_GROUP=${PG_GROUP}
ENV PG_USER=${PG_USER}

RUN adduser -g ${PG_GROUP} -s /bin/sh -D ${PG_USER};

RUN mkdir -p /var/lib/postgresql/data/pgdata
