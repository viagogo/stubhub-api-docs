# Introduction

The official StubHub API connects your website or application with the
world’s largest ticket marketplace. Your application can use the API to search
for and view events, purchase tickets for an event or list tickets on the
StubHub platform.

All API access is over HTTPS, and accessed from the `api.stubhub.com` domain.
Request and response payloads are formatted as `application/hal+json`, which is
basically just plain old JSON with hyperlinks (see [Media Type](./media-type.md)).
We support [cross-origin resource sharing][cors] to allow you to interact
securely with our API from a client-side web application. [OAuth2][oauth2]
is used for all authentication. All API requests must be authenticated or you
will receive a `401 Unauthorized` error response (see
[Authentication](../authentication/index.mdx)).

[cors]: http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[oauth2]: http://oauth.net/2/

## How to use these docs

### 1. Authenticate your Application to Access the API

See [Authentication](../authentication/index.mdx) to get an access token to access the StubHub API.
All API requests must be authenticated or you will receive a `401 Unauthorized` error response.

### 2. Follow the Guides

Follow our end-to-end [Guides](../guides/index.mdx) on integrating with the StubHub API for common
use cases.

### 3. Use the API Reference for more details

The [API Reference](/api-reference/inventory) gives a complete reference to our HTTP APIs that you
can use to interact with the StubHub platform.
