modules.define('wave',

['i-bem-dom', 'BEMHTML', 'jquery', 'image', 'loader_type_js'],

function(provide, bemDom, BEMHTML, $, image, loader, Wave) {

provide(Wave.declMod({ modName: 'submain', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                let _this = this;

                loader('https://cdn.jsdelivr.net/npm/kute.js@1.6.5/kute.js', function(){
                  loader('https://cdn.jsdelivr.net/npm/kute.js@1.6.5/kute-svg.js', function(){
                    loader('https://cdn.jsdelivr.net/npm/kute.js@1.6.5/kute-attr.js', function(){

                        console.log('1');
                        var fillTheWaveOne = KUTE.fromTo('#fifth',
                        { path: '#fifth' },
                        { path: '#sixth' },
                        {
                            duration: 8500,
                            repeat: 999,
                            yoyo: true,
                            easing: 'easingSinusoidalInOut',
                            morphPrecision: 1,
                            morphIndex: 40
                        })

                        var fillTheWaveTwo = KUTE.fromTo('#seventh',
                        { path: '#seventh' },
                        { path: '#eigth' },
                        {
                            duration: 6300,
                            repeat: 999,
                            yoyo: true,
                            easing: 'easingSinusoidalInOut',
                            morphPrecision: 1,
                            morphIndex: 40
                        })

                        fillTheWaveOne.start()
                        fillTheWaveTwo.start()
                    })
                  })
                })

            }
        }
    }
}));

});
