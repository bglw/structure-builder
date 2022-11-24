const filters = require("./data/filters.json");

module.exports = {
    _structures: {
        filters: {
            // Identify each structure variant based on its filter_section value
            id_key: "filter_section",
            // Create a structure value for each filter section in our data file
            values: filters.available_filters.map(({ filter_name, available_filter_values }) => {
                return {
                    label: `Filter Section: ${filter_name}`,
                    value: {
                        // Show the filter section name (we disable editing this using _inputs below)
                        filter_section: filter_name,
                        selected_value: null
                    },
                    subtext_key: "selected_value",
                    _inputs: {
                        filter_section: {
                            type: "disabled"
                        },
                        // Let this type of filter section pick from the filter values
                        // attached to it in the data file
                        selected_value: {
                            type: "select",
                            options: {
                                values: available_filter_values
                            }
                        }
                    },
                }
            })
        }
    }
}
