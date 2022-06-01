# Pagination

Requests that return multiple results will be paginated to 100 items by default.
You can use the `page` parameter to specify which page of data to retrieve. You
can use `page_size` parameter to set custom page sizes on the API responses. API
responses return pre-built pagination links with rels `first`, `prev`, `next`
and `last` and client applications are encouraged to follow these links for
pagination.

`GET https://api.viagogo.net/inventory/sellerlistings?page=1&page_size=30`

Note that page numbering is 1-based and that omitting the `page` parameter will
return the first page.
