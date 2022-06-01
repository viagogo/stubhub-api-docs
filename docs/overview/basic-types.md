# Basic Types

API responses have standard formats for most object types - dates, monetary
values, etc. We’ve documented all possible fields and their meanings.

| Type | Description |
| ---- | ---- |
| DateTime | A datetime represented as a string in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DDTHH:MM:SSZ`. |
| [Money](/api-reference/inventory#tag/BasicType_Money) | Returned for monetary values, such as ticket prices, fees charged and tax amounts. |
| [Seating](/api-reference/inventory#tag/BasicType_Seating) | Represents the seating information for a ticket(s) in a Venue. |
