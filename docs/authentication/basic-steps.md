---
description: High-level steps for authenticating your application.
---

# Basic Steps

All applications follow a basic pattern when accessing the StubHub API. At a
high level, you follow three steps:

## 1. Obtain an access token

In order to make authenticated requests to the StubHub API, your application
must first obtain an OAuth access token. The way you obtain an access token
depends on your use case.

| **If you...** | **Use...** |
| ------------- | ---------- |
| Want to access public data like categories, events and listings... | [Application-Only Flow](#application-only-authentication-flow) |
| Want to manage user-specific data like payment methods, listings, purchases and sales... | [User-Login Flow](#user-login-authentication-flow) |

## 2. Use the access token to make a request

After your application obtains an access token, it sends the `access_token`
property in a token in an `Bearer` authorization header when making API
requests. Your application check the `scope` property in a token to make sure it
has been granted the [scopes](#scopes) it needs before making requests. The 
`expires_in` property in a token response represents the number of seconds
before the token expires. Tokens can be re-used in multiple requests up until
they expire.

## 3. Refresh the access token when it expires

Access tokens have limited lifetimes. If your application needs to make requests
beyond the lifetime of an access token, it should use the `refresh_token` value
from the token to obtain a new token. See [Token Expiration](#token-expiration)