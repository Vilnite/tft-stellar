# Activate account service testscripts

## see if it is up

testnet:

```sh
curl -v -H "Content-Type: application/json" -d '{ "args": { "activation_code": "abcd"  }}' "https:/testnet.threefold.io/threefoldfoundation/activation_service/activate_account"
```

production:

```sh
curl -v -H "Content-Type: application/json" -d '{ "args": { "activation_code": "abcd"  }}' "https:/tokenservices.threefold.io/threefoldfoundation/activation_service/activate_account"
```

## Generate an account

`./createAccount.py`

## Submit to the service

```sh
curl -H "Content-Type: application/json" -d '{ "args": { "address": "<newaddress>"  }}' "http://localhost:7000/threefoldfoundation/activation_service/create_activation_code"
```
