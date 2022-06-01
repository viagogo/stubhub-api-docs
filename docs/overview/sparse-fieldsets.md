# Sparse Fieldsets

Your application can request for the API to return only specific fields in the
response on a per-type basis by including a `fields`[TYPE] parameter. The value
of the `fields` parameter must be a comma-separated list of the name(s) of the
field(s) to be returned.

`GET https://api.viagogo.net/v2/events/4695621?fields=id,name,_embedded&fields[venue]=city`

The example request above includes the `id`, `name` and `_embedded` fields in
the event resource and the `city` field in its embedded venue.
