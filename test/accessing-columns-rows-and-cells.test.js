'use strict';

//
// Examples implemented from this blog:
//
// http://pythonhow.com/accessing-dataframe-columns-rows-and-cells
//

describe('accessing columns, rows and cells', function () {

    var expect = require('chai').expect;

    var dataForge = require('../index');

    var fs = require('fs');
    var path = require('path');

    it('can load csv', function () {

        var csv = fs.readFileSync(path.join(__dirname, 'accessing-columns-rows-and-cells.csv'), 'utf8');
        var df1 = dataForge.fromCSV(csv)
            .parseInts(["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", ])
            ;

        expect(df1.getColumnNames()).to.eql(["GEOID", "State", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", ]);
        expect(df1.getIndex().toValues()).to.eql([0, 1, 2, 3, 4]);        
        expect(df1.toRows()).to.eql([
            ["04000US01", "Alabama", 37150, 37952, 42212, 44476, 39980, 40933, 42590, 43464, 41381],            
            ["04000US02", "Alaska", 55891, 56418, 62993, 63989, 61604, 57848, 57431, 63648, 61137],         
            ["04000US04", "Arizona", 45245, 46657, 47215, 46914, 45739, 46896, 48621, 47044, 50602],
            ["04000US05", "Arkansas", 36658, 37057, 40795, 39586, 36538, 38587, 41302, 39018, 39919],
            ["04000US06", "California", 51755, 55319, 55734, 57014, 56134, 54283, 53367, 57020, 57528],
        ]);
    });

});