# Sorting

Paginated results can be sorted according to one of more criteria using the
`sort` param. Clients can specify sort criteria as a comma-separated list of the
names of fields that should be used to sort. The default sort order is ascending
but a *-* prefix on any sort field specifies a descending sort order.

`GET https://api.stubhub.net/inventory/sellerlistings?sort=event_date,-price`

The example request above sorts results by `event_date` ascending and then by
`price` descending.
