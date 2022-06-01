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

## VGG-Country Header

Applications can include the `VGG-Country` header to change the
geography-context of requests. Each domain of the StubHub website is referred to
as a _geography_ that has its own category-structure and language, currency and
content defaults. The value of the `VGG-Country` header should be a two-letter
country code as defined by [ISO 3166][iso3166]. If an application does not
provide a `VGG-Country` header then the API will default to the _US_ geography
(www.stubhub.com).

[iso3166]: http://en.wikipedia.org/wiki/ISO_3166-1

`VGG-Country: FR`

In the example above, the application is specifying that it would like make
requests in the French geography (as if the client were using the www.stubhub.fr
website).
