---
layout: collaboration
---

# Small-P Policy Touchpoints For Open Data Programs
Ordinances and Executive Orders set the stage for effective open data programs with good governance practices. However, implementing and operating an open data program requires the support of many city staff, reaching well beyond the scope of documents signed by a Mayor, City Manager, or Council. This document outlines additional functions/areas of government organizations that may have policies or processes that can be modified to support open data programs, and describes what those new interactions might be. The final section of the document also includes specific recommendations on the direct operation of the open data program.

## Communications/Marketing/Press

* Press releases should include references to open data resources where appropriate.
  * If possible or appropriate, invite the city’s open data lead to review draft press releases.
  * If there are press release templates, they should be modified to remind staff to include open data references.
* Key mayoral announcements, such as budget or state of the city addresses, should include references to existing open data (either self-published or published by others) as backup for factual/statistical statements.

## Community Affairs / Engagement

* Community engagement managers have experience working with a variety of non-government partners to achieve mutual goals. They can serve as a gateway to conversations with various groups of the public about their interests in open data as well as raising the awareness of it.

## Coordination/Governance/Training

* Agencies/Departments should assign responsibilities for open data coordination within their own organization.
  * The coordinator should be empowered to lead the organization’s work with its specific communities of interest as well as maintain alignment with citywide objectives as defined by the governance committee or city’s open data program owner.
* New or supplemental employee training programs should include a primer on open data as a tool for internal use, public engagement, and service co-production.
* If you have an “open by default” mandate in applicable laws or executive orders, ensure that you define clear criteria for when data should be excluded from public release.
* If you do not have an “open by default” mandate in applicable laws or executive orders, ensure that you define clear criteria for when data should be included for public release.

## Information Technology

* If not defined in applicable laws or executive orders, create a reasonable and consistent definition for “data” that applies across the enterprise.
* New technology and service (re)design projects should include resources and tasks to ensure open data is included from the beginning.
  * If they exist, “blank” project templates should be modified to include these tasks.
  * If possible, this should also apply to IT system upgrades, with a clearly defined threshold (scope, budget, duration) for inclusion.
* If the city operates data warehouses or other centralized data repositories that already have automated data feeds, either
  * Use automation to layer additional data feeds from the data warehouse to the open data platform; or
  * Modify existing automation to “fork” the data streams so they flow both to the warehouse and the open data platform.
* Where possible, leverage existing tools and skills (database servers, automation, etc.) to support the delivery of data to the open data portal.
  * Change management processes for automation should be in place to avoid accidental discontinuation of delivery to the open data portal.
* Develop and maintain a data inventory. (This can be done in conjunction with the items under “Information Security.”)
  * Metadata should be maintained at a database table level, if possible.

## Information Security

* City data should be classified according to sensitivity.
  * Typically classifications have three or four levels and each level has clearly defined criteria such as risk factors, potential impacts, and legal/compliance requirements.
    * The most unrestricted level, “public” or “open,” should automatically qualify data for release to the open data portal (other considerations such as quality and pubic value notwithstanding).
    * Data not classified as “public” or “open” should not be excluded from consideration for release as open data, but should have appropriate and consistent methods applied (such as anonymization, aggregation, and redaction) to ensure sensitive data isn’t released or reconstructable by combining with other data sources.
  * Classification should be applied at the most granular level possible (e.g., sheets/tabs within spreadsheets documents, tables within databases, or groups of tables in enterprise systems).
* Apply policies and measures to the open data portal and data integration (automation) tools as needed to ensure the protection of city data and technology resources from malicious actions such as denial of service, data corruption, and other risks.
  * This includes identity management practices on the portal for authorized city users to add, modify, and remove data.

## Procurement

* Procurements should require open data to be included as appropriate. This goes beyond traditional software contracts and should at minimum include vendors who are providing services on behalf of the city. Refer to our Data Ownership and Usage Terms for Government Contracts for specific contract language to include.
  * Alternately, consider requiring vendors to publicly publish data about the products and services they provide as means for the city to consume and validate invoices and payments.

## Public Records

* Staff who are responsible for handling public records / freedom of information requests should be engaged. They can help identify and prioritize data for public release based upon their intimate knowledge of the public’s requests for information.
* Public records requests which can be fulfilled using open data should be responded to by directing the original requestor to the appropriate resource on the open data portal.

## Open Data Practices

* Published data should be required conform to appropriate open standards (e.g., GTFS or BLDS).
  * The city should have a defined mechanism for identifying relevant standards, applying them when appropriate, and updating published data to maintain conformance as standards evolve.
  * Existing published data should be periodically revisited to determine if new standards are available which might apply.
* Public data should allow for search engine crawling and support search engine optimization needs.
* Although the open data portal may support multiple languages (e.g., English, Spanish), the data itself need only be in the preferred language of the city government.
* Published metadata should conform with appropriate open specifications. The most common in use at present are DublinCore Level 1, DCAT, and Project Open Data. Some open data portal technologies directly support one or more of these.
* Where possible, open data should be published and kept up-to-date using automation (see “Information Technology / General”).
* Clearly establish the rights of data consumers and what they may do with your data. Publish these rights as a Terms of Service in a consistent and visible place on your open data portal (usually on every page footer).
* Open data should be published in a manner that is consistent, high quality, and easy to consume. This means:
  * Using consistent data types, field names, and output formats. For example:
    * Use the ISO8601 format when publishing time and duration data. 
    * Publish geographic data using the WGS84/Web Mercator projection, even if some of your city’s geographic data is in state plane, other, or custom projections. 
    * Combine address fields into one text value even if some of your internal data sources have separate fields for address1 / address2 / city / state / zip+4.
    * Make sure that the “police precinct” column is named the same thing in any dataset where it appears.
  * Ensuring matching semantics (terminology) are used between datasets. For example:
    * If multiple datasets include hospital names, ensure that references to the same hospital are named identically.
  * Ensuring that coded values in source data are translated to human-readable values.
    * If you must provide coded values in your published data, ensure the human-readable value is adjacent and make clear in the field metadata that a relationship exists between the code and the description.
    * If you are unable to provide a human-readable value for each row in the data, ensure the metadata describes what each code that is in the data can be translated to.
