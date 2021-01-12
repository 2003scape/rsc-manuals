# rsc-manuals
runescape classic manuals.

![](./doc/screenshot.png)

## install

    $ npm install @2003scape/rsc-manuals

## manuals
*[./manuals.json](/manuals.json)* contains each markdown file in
*[./markdown](./markdown)* in an object tree based on its directory structure.

```javascript
{
    "terms": "...",
    "about": {
        "getting-started": "...",
        // ...
    },
    // ...
}
```

## license
CC-BY-SA-4.0 https://creativecommons.org/licenses/by-sa/4.0/legalcode
