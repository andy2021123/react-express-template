#!/bin/bash

emph() {
  echo -e "\033[92m$1\033[0m"
}

input() {
  # $1 - input text, $2 - input variable name, $3 - default value
  read -p "$1 [default $(emph "$3")]: " input_value
  eval "$2=\${input_value:-\"$3\"}"
}

cd $(dirname $0)
cd ..

echo "Postgres Environment Variables"
input "database name" database database
input "database username" pg_user postgres
read -p "database password [default $(emph "<strong autogenerated password>")]" pg_password
pg_password=${pg_password:-$(echo $(openssl rand -base64 64) | tr -d " =")}

cat <<EOF > .env
PG_USER=$pg_user
PG_PASSWORD=$pg_password
PG_DATABASE=$database
EOF