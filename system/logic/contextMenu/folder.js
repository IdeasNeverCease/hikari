$(function () {

	$.contextMenu("html5", true);

	$.contextMenu({
		selector: ".folder .wm-content",

		items: {
			"view-group": {
				"name": "View",

				"items": {
					"view-group-key1": { "name": "Details", "id": "contentView-details" },
					"view-group-key2": { "name": "Icons", "id": "contentView-icons" },
					"view-group-key3": { "name": "List", "id": "contentView-list" },
					"view-group-key4": { "name": "Tiles", "id": "contentView-tiles" },
				}
			},

			"sort-group": {
				"name": "Sort by",

				"items": {
					"sort-group-key1": { "name": "Name", "id": "contextSort-name" },
					"sort-group-key2": { "name": "Size", "id": "contextSort-size" },
					"sort-group-key3": { "name": "Type", "id": "contextSort-type" },
					"sep1": "---------",
					"sort-group-key4": { "name": "Ascending", "id": "contextSort-ascending" },
					"sort-group-key5": { "name": "Descending", "id": "contextSort-descending" }
				}
			},

			"group-group": {
				"name": "Group by",

				"items": {
					"group-group-key1": { "name": "Name", "id": "contextGroup-name" },
					"group-group-key2": { "name": "Size", "id": "contextGroup-size" },
					"group-group-key3": { "name": "Type", "id": "contextGroup-type" }
				}
			}
		}
	});

});
