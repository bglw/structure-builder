module.exports = {
    _structures: {
        filters: {
            values: [
                {
                    label: "Animal Filter",
                    id_key: "filter_section",
                    _inputs: {
                        filter_section: {
                            type: "disabled"
                        },
                        selected_value: {
                            type: "select",
                            options: {
                                values: [
                                    "Moth",
                                    "Grub"
                                ]
                            }
                        }
                    },
                    subtext_key: "selected_value",
                    value: {
                        filter_section: "Animal",
                        selected_value: null
                    }
                }
            ]
        }
    }
}