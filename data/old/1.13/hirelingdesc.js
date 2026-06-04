// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["hirelingdesc"] = {
    "title": "hirelingdesc.txt",
    "overview": "This file controls attributes about player mercenaries that relate to the monster class but not the specific statblocks.",
    "fields": []
};
