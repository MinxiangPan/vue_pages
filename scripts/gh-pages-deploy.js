const ghpages = require('gh-pages');
const execa = require("execa");
const fs = require('fs');

const domain = 'vue.mattpan.com';

(async () => {
  try {
    console.log("Building started...");
    await execa("yarn", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    console.log(`Setting custom domain to: ${domain}`);
    fs.writeFile('dist/CNAME', domain, function(err) {});
    console.log("Pushing to gh-pages...");
    await ghpages.publish('dist', function(err) {});
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();