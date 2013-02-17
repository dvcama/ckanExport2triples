{
	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.firenze>\t<http://purl.org/dc/elements/1.1/title>\t\"Catalogo OpenData del Comune di Firenze\"", "<http://data.opendataday.it/resource/dati.firenze> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Catalog>" ],
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
	"staticInfo" : [ "<http://data.opendataday.it/resource/dati.firenze>  <http://www.w3.org/ns/dcat#dataset> <{{URI}}>" ],
	"datasetMap" : {
		"nome" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},
		"url" : {
			"uri" : "<http://xmlns.com/foaf/0.1/homepage>",
			"type" : "uri"
		},
		"data_rilascio" : {
			"uri" : "<http://purl.org/dc/terms/created>",
			"type" : "string"
		},
		"autore" : {
			"uri" : "<http://purl.org/dc/terms/publisher>",
			"type" : "string"
		},
		"categoria" : {
			"uri" : "<http://www.w3.org/ns/dcat#theme>",
			"type" : "map",	 
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : ["<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.firenze>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>" , "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],				"toUri":true
		},
		"tags" : {
			"splitForChar" : ",",
			"uri" : "<http://www.w3.org/ns/dcat#keyword>",
			"type" : "map",	 
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : ["<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.firenze>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>" , "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],
			"toUri":true,	
			"dataCleaner":{
				"find" :"^.*\\(theme\\)[ .]*",
				"replace" : ""
			}
		},
		"type" : "map",
		"licenza" : {
			"uri" : "<http://purl.org/dc/terms/licenses>",
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