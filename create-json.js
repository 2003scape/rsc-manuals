const fs = require('fs');
const recursive = require('recursive-readdir');
const { unflatten } = require('flat');

(async () => {
    const files = await recursive('./markdown');
    const markdown = {};

    for (const file of files) {
        markdown[file.replace(/\.md$/,'')] = fs.readFileSync(file).toString();
    }

    console.log(
        JSON.stringify(
            unflatten(markdown, {
                delimiter: '/'
            }).markdown
        )
    );
})();
