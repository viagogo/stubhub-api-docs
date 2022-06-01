# Localization

The StubHub API supports various request headers to return locale-specific
content in responses.

## Accept-Language Header

The `Accept-Language` header can be used to determine the language of the API
response content (e.g. event names and error messages). Content will be returned
in English if no `Accept-Language` header is provided, or StubHub does not
currently support the requested language codes.

`Accept-Language: da, en-gb;q=0.8, en;q=0.7`

In the example header above, the request is specifying "I prefer Danish, but
will accept British English and other types of English." See more information
about the [Accept-Language header][acceptlang].

[acceptlang]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4
