{
	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.firenze> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Catalog>" ],
	"packagesCsvUrl" : "http://opendata.comune.fi.it/materiali/open_data/lista_dataset_url.csv",
	"resultFileName" : "dati.firenze.n3",
	"resourceUri" : {
		"field" : "url",
		"resourceUriSubstitutor" : {
			"find" : "http://opendata\\.comune\\.fi\\.it(.*)\\.html",
			"replace" : "http://data.opendataday.it/resource/dati.firenze$1"
		}
	},
	"groupBy" : {
		"mainField" : "url",
		"groupName" : "resources",
		"fields" : [ "download_url", "formato" ]
	},
	"datasetInfo" : [ "<http://data.opendataday.it/resource/dati.firenze>  <http://www.w3.org/ns/dcat#dataset> <{{URI}}>" ],
	"datasetMap" : {
		"nome" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},
		"url" : {
			"uri" : "<http://purl.org/dc/terms/isReferencedBy>",
			"type" : "uri"
		},
		"tags" : {
			"uri" : "<http://www.w3.org/ns/dcat#keyword>",
			"splitForChar" : ",",
			"type" : "uri",
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"toUri" : true
		},
		"type" : "map",
		"licenza" : {
			"uri" : "<http://purl.org/dc/terms/rights>",
			"type" : "uri"
		},
		"resources" : {
			"type" : "map",
			"hasOwnUri" : true,
			"suffix" : "/distribution/dis",
			"uri" : "<http://www.w3.org/ns/dcat#distribution>",
			"download_url" : {
				"uri" : "<http://www.w3.org/ns/dcat#accessURL>",
				"type" : "uri",
				"resourceUriSubstitutor" : {
					"find" : "^/",
					"replace" : "http://dati.firenze.it/"
				}
			},
			"formato" : {
				"uri" : "<http://rdfs.org/ns/void#format>",
				"type" : "string"
			}
		}
	}
}