# API Resources
## Resource groups
### Unauthorized resources
#### /login:
Login to a wallet. Auth info will be set via `Set-Cookie` HTTP Header.
Method: GET
Params: `wallet` -> Wallet name
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>}
#### /mint:
Mint a new wallet.
Method: GET
Params: `wallet` -> Wallet name, `balance` -> Initial wallet balance
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>}
#### /wallets:
List all existing wallets.
Method: GET
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "wallets": <List of wallets in case of success>}
### Auhtorized resources
#### /balance:
Get account balance.
Method: GET
Auth: Via HTTP Cookies
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <Account balance in case of success>}
#### /broker-balance
Get broker account balance.
Method: GET
Auth: Via HTTP Cookies
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <Account balance in case of success>}
#### /charge:
Transfer funds from broker account to wallet.
Method: GET
Auth: Via HTTP Cookies
Params: `amount` -> Transfer amount
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <Transaction id in case of success>}
#### /transfer:
Transfer funds to another wallet.
Method: GET
Auth: Via HTTP Cookies
Params: `wallet` -> Destination wallet name, `amount` -> Transfer amount
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <Transaction id in case of success>}
#### /transactions:
Get last `N` transactions.
Method: GET
Auth: Via HTTP Cookies
Params: `limit` -> Number of transactions to fetch
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <List of transactions in case of success>}
#### /transaction:
Get status of specific transaction.
Method: GET
Auth: Via HTTP Cookies
Params: `id` -> Transaction id
Response: {"status": <"success"|"fail">, "reason": <Reason in case of failure>, "result": <Transaction in case of success>}
#### /logout:
Logout.
Method: GET
Auth: Via HTTP Cookies
Response: {"status": "success"}

