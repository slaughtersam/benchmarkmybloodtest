This project is a website.  

The website is a portal where people can anonymously upload blood test data along with basic demographic and health information, so that they can see how their markers compare with others who have similar demographic profiles.  The goal of the website is to enable people to better understand their health data and anonymously engage others with similar issues from whom they can learn and compare notes. 

This site is totally anonymous. When signing in for the first time, users are not asked for an email address. A username is randomly generated for them when the user registers (the username should be long enough to ensure uniqueness, but short enough to enable the user to write it down somewhere and enter it each time they login).  There is no contact information or any identifying information collected.  If someone loses their username and password combination, they lose access to their account.

In addition to establishing a username (auto-assigned) and password (user-set) during registration, the user registrant is asked for three categories of information: (1) basic demographic information, (2) uploads of blood test results along with the date of those tests, and (3) an optional free text entry paragraph for the user to describe any relevant information about their health background they want to share to help contextualize their test results.

Avoidance of all PHI is critical during the intake of user data.  Very prominent messages will be displayed instructing the user to NOT include any identifying information in their submission or uploaded documents.  Users will be suggested to take screenshots of their test results that do not include their personal information and upload those screenshots, rather than upload full documents like PDF which are more difficult to redact.

The website will have a database.  That database will store user login information, demographic data, test result data, and the user-submitted health summary paragraph.  Absolutely no personal identifying information will ever be stored.  If any personal identifying information is submitted by the user, despite the instructions not to, this information will never be stored and the site and Claude will immediately purge that PHI data from any relevant systems.

After the user's information is submitted, the site will provide various ways for the user to see how their results compare to others, allowing them to dynamically filter and adjust the cohorts against which they are comparing themselves.  Those filters can include things related to their user-submitted health information (for instance "all other users with celiac").

Finally, the site will offer a messaging service so that users can direct message each other.  This will be enabled by the fact that when looking at benchmark data, the (randomly generated) username for each data submission will be viewable on benchmark charts that other users are viewing.  This enables users who perceive similar health dynamics in their data to contact other users to learn and exchange notes.  As with everything else on the site, the anonymity of these interactions will be preserved.

## Next.js agent rules
@AGENTS.md
