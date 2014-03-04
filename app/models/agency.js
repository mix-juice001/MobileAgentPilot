exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "agency": "TEXT",
		    "representative": "TEXT",
		    "tel1": "TEXT",
		    "tel2": "TEXT",
		    "mail": "TEXT",
		    "url": "TEXT",
		    "image": "BLOB",
		    "memo": "TEXT",
		    "prior": "boolean",
		    "agencyCode": "TEXT",
		    "updateDate": "TEXT",
		    "newOkuraNo": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "agency"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};