---
layout: default
---

## Civic Data Standards

### Introduction

A Civic Data Standard is an open, collaboratively developed set of data schematics or semantics which facilitates interoperability between multiple providers and consumers for the public good. (This definition is a work in progress)

Civic data standards enable interoperability between data providers - typically governments - and data consumers. When a data provider publishes information, making it compatible a with a civic data standard (if one exists) can help jumpstart its use. Civic data standards also make it easier for data consumers - particularly individuals or small businesses - to consume data from multiple providers with less software engineering effort. Depending on the type of interoperability needed, civic data standards generally fall into two buckets:

* *Schematic* standards define a common structure for how the information is shared, but do not attempt to ensure that the meaning of the contained information is consistent between publishers.
* *Semantic* standards define consistent meanings for the information being shared, but do not always ensure that the structure of the information is consistent between publishers.

The best civic data standards address both of these needs, but currently, many focus mainly on schematic standards.

Note for technologists: while a few civic data standards describe interactive (query/response) application programming interfaces (APIs), most are designed for bulk data transfers.

### The List
Below is the list of civic data standards we have identified so far. They vary greatly in terms of active communities, current use, and approaches used for development. This list will be revised to reflect the additional standards we discover, as well as to include more details about each standard as we research them.

* [Open 311](http://open311.org)
* [Open Referral](http://openreferral.org/)
  * [Open Eligibility](http://about.auntbertha.com/openeligibility)
  * [Human Services Data Specification](https://github.com/codeforamerica/OpenReferral/blob/master/Human%20Services%20Data%20Specification%20%20v1.0.md)
* [Open Trails](http://www.opentraildata.org/)
* [Housefacts](https://sites.google.com/site/housefactsdatastandard/home/specification)
* [Building &amp; Land Development Specification (BLDS)](http://permitdata.org/)
* [Open Contracting](http://standard.open-contracting.org/)
* [General Transit Feed Specification (GTFS)](https://developers.google.com/transit/gtfs/)
* [Service Interface for Real Time Information (SIRI)](http://www.siri.org.uk/)
* [State Decoded](http://statedecoded.github.io/documentation/xml-format.html)
* [Federal Spending Transparency](http://fedspendingtransparency.github.io/) - not applicable to cities or states yet, but highly likely to be in the future.
* [Green Button](http://www.greenbuttondata.org/)
* [Blue Button](http://bluebuttontoolkit.healthit.gov/)

### Other relevant work
The below efforts might not qualify as civic data standards (pending further research), but their existence is worth noting.

* [Local Inspector Value-Entry Specification (LIVES)](http://www.yelp.com/healthscores)
* [Spotcrime Open Crime Data Standard (SOCS)](http://blog.spotcrime.com/2014/03/the-spotcrime-open-crime-data-standard.html)
* [Open Hunting & Fishing](https://github.com/opendata/Hunting-and-Fishing) - this standard requires a reasonable amount of technical skill to use, using JSON-Schema files to describe the data structures.
* [Socrata data formats for Budget, Expenditures, and Service Connect](http://open-data-standards.github.io/data-schemas/)
* [CitySDK](http://uscensusbureau.github.io/citysdk/) - more of a toolkit for programmers than a data standard, but it does implicitly include some standardized data structures.

