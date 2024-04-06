envFile="./env-config.js"

if [ -f $envFile ]; then
  rm $envFile
fi

touch $envFile
 
echo "window._env_ = {" >> $envFile
 

if [ -n "$(env | grep -E '^VITE_APP_')" ]; then
  for varname in $(env | grep -E '^VITE_APP_'); do

    varname=$(echo $varname | cut -d= -f1)
    varvalue=$(eval echo \$$varname)

    echo "  $varname: '$varvalue'," >> $envFile
  done
elif [ -f .env ]; then
  while IFS='=' read -r key value
  do
    if [[ $key != "" && $value != "" && $key != "#"* && $value != "#"* && $key == *"VITE_APP_"* ]]; then
      echo "  $key: '$value'," >> $envFile
    fi
  done < .env
fi
 
echo "}" >> $envFile



