define(['exports'], function (exports) {
    var timeoutMaxInMs = 10000;

    function createTests() {
        describe('Ext JS API site', function () {

            it('should select overview tab', function (done) {
                this.timeout(timeoutMaxInMs);

                browser
                    .openWindow('http://docs.sencha.com/extjs/4.2.2/')
                    .waitAndClick('.doctab.overview.classes')
                    .typeValue('#search-field input', 'chart')
                    .execute(function (win, next) {
                        win.location.hash.should.equal('#!/api');
                        done();
                    })
                    .end();
            });
        });
    }

    exports.create = createTests;
});