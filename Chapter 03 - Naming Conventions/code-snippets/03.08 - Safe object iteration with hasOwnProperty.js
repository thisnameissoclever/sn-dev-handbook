/**
 * Safe object iteration with hasOwnProperty
 * 
 * Always check hasOwnProperty when iterating over objects
 * to avoid inherited properties.
 * 
 * From: The ServiceNow Development Handbook, 4th Edition
 * Chapter 03 - Naming Conventions Conventions
 * Section: Iterators
 */

function Instance(name, url, production) {
    this.name = name;
    this.url = url;
    this.production = production;
}

var myInstances = {
    'dev': new Instance('dev', 'http://sndev.service-now.com/', false),
    'test': new Instance('test', 'http://sntest.service-now.com/', false),
    'prod': new Instance('prod', 'http://snprod.service-now.com/', true)
};

var snInstance;
for (snInstance in myInstances) {
    // Always check hasOwnProperty to avoid inherited properties
    if (myInstances.hasOwnProperty(snInstance)) {
        console.log(myInstances[snInstance].url);
    }
}
