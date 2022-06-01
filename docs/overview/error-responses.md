# Error Responses

When the StubHub API returns error messages, it includes a specific error code
and possibly a localized error message that can be displayed to a user.

An error might look like this:

```json
{
  "code": "validation_failed",
  "message": null,
  "errors": {
    "seller_listing.ticket_price": [
      "You must provide either 'ticket_price' or 'ticket_proceeds'"
    ]
  }
}
```

## Error Codes

| **Code** | **Status Code** | **Description** |
| -------- | --------------- | --------------- |
| `https_required` | `400` | The request is not using an SSL connection. |
| `user_agent_required` | `400` | The request does not include a valid User-Agent header. |
| `invalid_request_body` | `400` | This request does not include a valid JSON body. |
| `insufficient_scope` | `403` | The access token used in the request does not have the scope required to access this resource. |
| `validation_failed` | `400` | The request data is not valid. `errors` will contain an object with a localized message that describes the validation error for each property of the data. |
| `invalid_seller_listing_action` | `403` | The request is attempting perform an operation on a [`SellerListing`](#sellerlisting) that does not currently support that action. |
| `create_listing_not_allowed` | `403` | The request is attempting create a listing for an [`Event`](#event) that tickets cannot currently be listed for. |
| `invalid_delete` | `403` | The request is attempting to delete a resource that cannot be deleted. |
| `internal_server_error` | `500` | Something is broken. We'll get this fixed ASAP! |
