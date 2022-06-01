# Media Type

The API uses [Hypertext Application Language (HAL)][hal] to hyperlink between
resources. HAL is a simple format that provides a set of conventions for
expressing hyperlinks in JSON - it's basically just plain old JSON with
hyperlinks!

[hal]: http://stateless.co/hal_specification.html

All StubHub API resources are represented using the `application/hal+json`
media type. The following properties can be expected on every resource:

* `_links` - a JSON object containing a set of hyperlinks to other resources
* `_embedded` - a JSON object containing other resources embedded inside the current resource
* The regular properties of the resource
