# Activation Service

Service for new accounts activation as described [in the specs](../specs/address_activation.md).
To be used as a Threebot package. See [jumpscaleX_threebot](https://github.com/threefoldtech/jumpscaleX_threebot).

## Requirements

You need following knowledge to start this server.

- `activation_secret`: is the secret key of the activation  account which holds the Stellar XLM to fund the accounts.

## Running

Make sure the wallet exists:
`j.clients.stellar.new("activation_wallet", network="TEST",secret="<activation_secret>")`

 execute following:
`kosmos -p 'j.servers.threebot.start()'`

Once this process is completed, create the stellar and add this package to the Threebot.

local:

```python
JSX> j.tools.threebot_packages.zerobot__admin.actors.package_manager.package_add(path="/sandbox/code/github/threefoldfoundation/tft-stellar/ThreeBotPackages/activation-service" })
```

testnet:

```python
JSX> j.tools.threebot_packages.zerobot__admin.actors.package_manager.package_add(git_url="https://github.com/threefoldfoundation/tft-stellar/tree/master/ThreeBotPackages/activation-service", install_kwargs={ "domain": "testnet.threefold.io" })
```

production:

```python
JSX> j.tools.threebot_packages.zerobot__admin.actors.package_manager.package_add(git_url="https://github.com/threefoldfoundation/tft-stellar/tree/master/ThreeBotPackages/activation-service", install_kwargs={ "domain": "tokenservices.threefold.io" })
```

The server will start at `host/threefoldfoundation/activation_service/`

## Actor

There is one actor with 2 methods.

- `create_activation_code`: Activates an address
  - param `address`: Stellar address to create an activation code for
  - returns an activation code, the stellar address and possible phonenumbers to send the he activation code to via SMS.

```sh
 curl -H "Content-Type: application/json" -d '{ "args": { "address": "<newaddress>"  }}' "https://testnet.threefold.io/threefoldfoundation/activation_service/create_activation_code"
 ```

- `activate_account`: does nothing, here for backwards compatibility
  - param `activation_code`: activation code created by the `create_activation_code` method

```sh
curl -H "Content-Type: application/json" -d '{ "args": { "activation_code": "<activation_code>"  }}' "https://testnet.threefold.io/threefoldfoundation/activation_service/activate_account"
```
