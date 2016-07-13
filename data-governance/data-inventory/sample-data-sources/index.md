<!DOCTYPE html>
<html lang="en">
  <head>

    {% include head.html %}

  </head>
  <body>

    {% include header.html %}

      <div class="container">
        <div class="row">

        **Sample Data Source List**
        This page contains lists of sample datasets, data sources, and descriptions by subject-matter focus area to help governments think about datasets to include in their inventories.

        # Business

        | Name | Description | Examples |
        | --- | --- | --- |
        | Certifications | Professional certifications given to individuals such as plumbers, electricians, etc. | [NYC Open Data](https://nycopendata.socrata.com/data?cat=business) |
        | Inspections | Inspections of licensed businesses such as restaurants, manufacturers, etc. | [Open Data KC](https://data.kcmo.org/browse?category=Business&utf8=%E2%9C%93) |
        | Licenses | Businesses that have been issued licenses to operate in the jurisdiction including permits|  --- |
        | Registrations | Entities registered to do business, but that may not be incorporated by the state |  --- |
        | Violations |  Violations issued to businesses |  --- |

        # Education

        | Name | Description | Example |
        | --- | --- | --- |
        | Attendance | Average percentage of days that students are present for school, excluding absences and suspensions; Absenteeism; Chronic absenteeism | [MD Open Data Report Card](http://www.mdreportcard.org/Entity.aspx?K=30AAAA) |
        | College readiness |  Test scores indicate that a high school graduate or GED recipient has the English and math skills to qualify for college coursework with no remedial training |  --- |
        | College attendance |  --- | --- |
        | Enrollment | Number of students enrolled for each grade, school, and district | --- |
        | College graduation | Four-year or extended-year adjusted cohort | --- |
        | Dropout | Percentage of 16- through 24-year-olds who are not enrolled in school and have not earned a high school credential | --- |
        | Kindergarten readiness | --- | --- |
        | Third grade reading | --- | --- |
        | Head Start enrollment | Number of children enrolled for any period of the year in any of the Head Start programs, by age group. | --- |
        | Pre-K enrollment | Number of children enrolled for any period of the year in any of the pre-k programs, by age group. | --- |

        # Elections

        | Name | Description | Example |
        | --- | --- | --- |
        | *Campaign Expenditures*	| Expenditure information reported to election authorities by campaigns on behalf of individuals running for elected positions | --- |
        | *Campaign Revenues* |	Revenue information reported to election authorities by campaigns on behalf of individuals running for elected positions | --- |
        | *Districts*	| Information on geographic subdivisions for each elected body such as mayor, council members, etc. | --- |
        | *Voting Results* | Election outcomes | --- |
        | *Voting Locations* |	Locations for citizens to vote | --- |

        # Environment

        | Name | Description | Example |
        | --- | --- | --- |
        | *Green Space* | Parks, urban forests, green parking, urban agriculture, preservation areas, protected lands | [Raleigh Open GIS Data](http://data.ral.opendata.arcgis.com/datasets?q=environmental&sort_by=relevance) |
        | *Food Environment* | Food deserts, healthy food availability, fast food density, tree coverage, trees planted | [MD iMAP: Maryland's Mapping & GIS Data Portal](http://data.imap.maryland.gov/datasets?q=Environment) |

        # Fiscal

        | Name | Description | Example
        | --- | --- | --- |
        | *Bids* | Solicitations issued for competitive (or non-competitive) contracts to be awarded | [City of Providence Open Data Portal](https://data.providenceri.gov/browse?category=Finance&utf8=%E2%9C%93) |
        | *Budgets* | Line items of operating budget, structured by chart of accounts |  --- |
        | *Contracts* | Awarded contracts |  --- |
        | *Expenditures* | Line items of expenditures, either checkbook level or structured by chart of accounts |  --- |
        | *Payroll* | Salaries of elected officials and government employees |  --- |
        | *Revenues* |	Line items of revenue streams, structured by chart of accounts |  --- |

        # Health

        | Name |  Description | Example |
        | --- | --- | --- |
        | *Mortality and morbidity* | Life expectancy, infant mortality, mortality by age, number of deaths, death rate |  [N.C. State Center for Health Statistics](http://www.schs.state.nc.us/) |
        | *Facilities* | Hospitals (including children's, psychiatric, other specialties), clinics, FQHCs, health department offices, LTC facilities, hospices, dialysis centers | [Toronto Data Catalogue](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=09c6e03bb8d1e310VgnVCM10000071d60f89RCRD) |
        | *Teen pregnancy rate* |	Rate of female teens 15-19 that gave birth per 1,000 females | --- |
        | *Lead* |	% of lead violations per 1,000 residential units; lead poisoning | [Healthy People 2020](http://www.healthypeople.gov/) |

        # Operations

        | Name | Description | Example |
        | --- | --- | --- |
        | *Hiring* | HR Requisition Log-all job requisitions for positions handled by the City, current status, length of hiring cycle, turnover, # of new hires who pass probationary period, exit interview results, employee survey results | [Louisville Open Data Portal](http://portal.louisvilleky.gov/service/data/25/#content) |
        | *HR Outcomes* | Quality of hire, retention of high-performing outcomes |  --- |
        | *Strategy* | Strategic, workforce or HR metrics linked to an organizational performance metric |  --- |
        | *Time lost due to injury or illness* | Sick leave, comp time, accident leave, unscheduled leave/absenteeism (sick, workers compensation (by type), FLMA, personal, other |  --- |
        | *Overtime* | Overtime pay, overtime hours (scheduled and unscheduled) |  --- |
        | *Vacancies* | Filled positions, vacancies (authorized and unauthorized) |  --- |
        | *Workforce Demographics* | Demographics by department, zip, ethnicity, gender, education, pay level, diversity, earnings |  --- |

        # Properties

        | Name | Description | Examples |
        | --- | --- | --- |
        | *Mobility* | Homebuyer incentives; new homebuyers | --- |
        | *Assessments* | Property value assessments | --- |
        | *Blight* |	Properties which are registered vacant, may have been abandoned, subject to foreclosure proceedings, devalue adjacent properties, properties that do not receive mail | --- |
        | *Construction* |	New construction permits, housing starts, housing completions | --- |
        | *Inspections* |	Inspections of properties conducted by the government such as structural, fire, cleanliness, etc. | --- |
        | *Parcels* |	Basic property information | --- |
        | *Permits* |	Permits issued for properties such as construction, modification, demolition, etc. | --- |
        | *Taxes* |	Tax rates effective for properties | --- |
        | *Violations* |	Violations of ordinances, laws, rules, or code | --- |
        | *Zoning* |	Information on allowed land and structural uses of geographic areas, including economic development, industrial, commercial, residential, mixed, historic preservation, etc. | --- |

        # Public Safety

        | Name | Description | Examples |
        | --- | --- | --- |
        | *Alerts* |	Emergency community notifications such as evacuations, amber/silver alerts, severe weather, etc. | [San Francisco Crime Mapping](http://www.crimemapping.com/map/ca/sanfrancisco) |
        | *Collisions* |	Moving vehicle collisions such as cars, trucks, buses, trains, trams, aircraft, etc. | --- |
        | *Crimes* |	Crimes reported to law enforcement including assaults, homicides, thefts, etc. | [NYPD Crime Statistics](http://www.nyc.gov/html/nypd/html/crime_prevention/crime_statistics.shtml) |
        | *Evacuations* |	Zones, routes, shelters, meeting points for emergency events such as hurricanes, blizzards, tornados, floods, earthquakes, etc. | --- |
        | *Fires* |	Working fires or other incidents which require coordinated responses from fire departments, including structural fires, hazardous material conditions, mutual aid calls, injuries, etc. | --- |
        | *Incidents* |	Events that may require significantly coordinated response from multiple government agencies, such as oil spills, structural collapses, severe weather, etc. |  [SeaStat](https://data.seattle.gov/) |
        | *Notifications* |	Non-emergency community notifications such as traffic warnings, awareness campaigns, etc. | --- |

        # Services

        | Name | Description | Examples |
        | --- | --- | --- |
        | *311* | Services provided by 311 | [Open Data KC](https://data.kcmo.org/browse?category=311&utf8=%E2%9C%93) |
        | *Rules* |	Regulations promulgated by an executive or government agency which do not require votes of elected officials, etc. | --- |
        | *Contact Information* |	Electronic and traditional means of contact for government officials, agencies, etc. | --- |
        | *Facilities* |	Government-operated facilities such as libraries, assistance centers, senior centers, computer centers, and other offices, etc. | --- |
        | *Services* |	Services offered at walk-in facilities, such as tax assistance, permit applications, disability benefits, etc. | [City of Palo Alto Open Data Portal](http://data.cityofpaloalto.org/dashboards/8873/city-services/) |

        # Transportation

        | Name | Description | Examples |
        | --- | --- | --- |
        | *Accessibility* |	Information for people with disabilities such as sidewalk curb ramps, trails without stairs, intersections equipped with audible alerts, etc. | --- |
        |*Bicycling* |	Information for cyclists such as dedicated & shared pathways, municipal bicycle stations, etc. | --- |
        | *Parking* |	Public parking location data | --- |
        | *Public Transit Locations* |	Geospatial data on public transit locations, including airports and sea ports | --- |
        | *Public Transit Routes* |	Routes and stops for buses, trams, trains, subways, shuttles, etc. | --- |
        | *Public Transit Schedules* |	Schedules for buses, trams, trains, subways, shuttles, etc, by stop or route segment. | --- |
        | *Public Transit Service Status* |	Real-time updates for buses, trams, trains, subways, shuttles, etc. | --- |
        | *Street Networks* |	Basic information on streets and intersections | --- |
        | *Taxis* |	Licensed for-hire-vehicle companies, vehicles, drivers, inspection stations, etc. | --- |
        | *Traffic*	| Real-time and/or historic data on traffic speeds and flow rates as collected by cameras, automatic sensors, etc. | --- |
        | *Walking* |	Details of pedestrian facilities, both on- and off-street, etc. | --- |
        | *Commute* |	# of population that gets to work via public transportation, walking, carpool, or other means to commute to work | --- |

        # Utilities

        | Name | Description | Examples |
        | --- | --- | --- |
        | *Energy* |	Residences heated by electricity & utility gas; weatherization | --- |
        | *Water* |	Water consumption, water rates | --- |


        </div>
      </div><!-- container -->

    <br />
    <br />
    <br />

    {% include footer.html %}

  </body>
</html>
