var dts = require('dts-bundle');
var fs = require('fs');
var path = require('path');

function removeDeclarationFiles(extension, directory, excludes) {
    var excludeRegex = new RegExp(excludes.join ? excludes.join('|') : excludes);

    if (!fs.existsSync(directory)) {
        console.log('No such directory ', directory);
        return;
    }

    var files = fs.readdirSync(directory);
    var deleted = 0;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        var filename = path.join(directory, file);
        var stat = fs.lstatSync(filename);

        if (stat.isDirectory() && file !== 'node_modules') {
            removeDeclarationFiles(extension, filename, excludes);
        } else if (filename.indexOf(extension) >= 0 && !excludeRegex.test(filename)) {
            deleted++;
            fs.unlinkSync(filename);
        }
    }

    if (deleted === files.length) {
        fs.rmdirSync(directory);
    }
}

function DtsBundlePlugin() {

}

DtsBundlePlugin.prototype.apply = function(compiler) {
    compiler.plugin('after-emit', function(stats) {
        dts.bundle({
            name: 'trapezium',
            main: 'index.d.ts',
            out: 'trapezium.d.ts'
        });

        removeDeclarationFiles('.d.ts', path.resolve(process.cwd()), 'trapezium.d.ts');
    });
};

module.exports = DtsBundlePlugin;
