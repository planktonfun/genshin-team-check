var template =[
    {
        "name": "account_id",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1642273368.282638,
        "size": 18,
        "httpOnly": false,
        "secure": true,
        "session": false,
        "sameSite": "None",
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "cookie_token",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1642273368.28255,
        "size": 52,
        "httpOnly": false,
        "secure": true,
        "session": false,
        "sameSite": "None",
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "_gid",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1642186944,
        "size": 29,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "ltuid",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1673636568.733251,
        "size": 13,
        "httpOnly": false,
        "secure": true,
        "session": false,
        "sameSite": "None",
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "_gat_gtag_UA_201411121_1",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1642100604,
        "size": 25,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "G_ENABLED_IDPS",
        "value": null,
        "domain": ".webstatic-sea.mihoyo.com",
        "path": "/",
        "expires": 253402257600,
        "size": 20,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "_MHYUUID",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1673636542,
        "size": 44,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "ltoken",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1673636568.733129,
        "size": 46,
        "httpOnly": false,
        "secure": true,
        "session": false,
        "sameSite": "None",
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "_ga",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1705172544,
        "size": 29,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "_ga_54PBK3QDF4",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1705172544,
        "size": 47,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    },
    {
        "name": "mi18nLang",
        "value": null,
        "domain": ".mihoyo.com",
        "path": "/",
        "expires": 1673636542.866021,
        "size": 14,
        "httpOnly": false,
        "secure": false,
        "session": false,
        "sameParty": false,
        "sourceScheme": "Secure",
        "sourcePort": 443
    }
];

function cookieParser(raw) {
    var requiredObj = {};

    for (var i = 0; i < template.length; i++) {
        requiredObj[template[i].name] = template[i];
    }

    var rawList = raw.trim().split(';');

    var cooks = [];

    for (var i = 0; i < rawList.length; i++) {
        let vars = rawList[i].trim().split('=');
        let n = vars[0];
        let v = vars[1];

        if(requiredObj[n] != undefined) {
            let temp = requiredObj[n];
            temp.value = v;
            cooks.push(temp);
        }
    }

    return JSON.stringify(cooks);
}

module.exports = {
  cookieParser
};
