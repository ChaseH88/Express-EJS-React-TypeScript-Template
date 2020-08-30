const fs = require('fs')
const package = require('./package.json');
const clientPackage = require('./src/client/package.json');
const serverPackage = require('./src/server/package.json');

/**
 * Combines the dependencies for the root package.json file.
 * @param {object} mainPackage
 * @param {object} devDep
 * @param {object} dep
 */
const combineDependencies = async (mainPackage, devDep, dep) => {

  mainPackage.dependencies = devDep;
  mainPackage.devDependencies = dep;

  fs.writeFile('package.json', JSON.stringify(mainPackage, null, 4), (err) => (
    console.log(
      err ? err : "Root package.json has been updated!"
    )
  ));

}

combineDependencies(
  package,
  {
    ...clientPackage.devDependencies,
    ...serverPackage.devDependencies
  },
  {
    ...clientPackage.dependencies,
    ...serverPackage.dependencies
  }
);