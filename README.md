# Structure Builder Example

This repository demonstrates an example of building CloudCannon Structures dynamically based on the contents of a data file.

The logic happens in `cloudcannon.config.js`: This file loads the `data/filters.json` file, which contains an array of filter sections each containing an array of filter values for that section. The config file creates a structure for each filter section, allowing an editor in CloudCannon to add filter sections to a page. Within each filter section, the editor in CloudCannon is now able to pick one of the filter values available for that section.

To see the logic in play, connect this repository to CloudCannon and do the following:

1. Navigate to **Data** in the site sidebar and open the **Filters** file
2. Click **Add Available Filter** to create an entirely new filter section
3. Click into that section and give it a unique name, and create some values for it
4. Save the site and wait for a build to complete
5. Navigate to **Pages** in the site sidebar and open the **Home** page
6. In the sidebar, click **Add Filter**, where you will be able to select the filter section you just created
7. Inside the object that is created, you will be able to pick from the values you have specified for this new filter section
