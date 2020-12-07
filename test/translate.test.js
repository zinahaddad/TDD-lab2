describe('translate', function(){
    it('word start with A', function(){
        expect(translate('artichoke')).toEqual('artichokeway')
    });
    it('word start with E', function(){
        expect(translate('edamame')).toEqual('edamameway')
    });
    it('word start with I', function(){
        expect(translate('iceberg')).toEqual('icebergway')
    });
    it('word start with consonate', function(){
        expect(translate('potato')).toEqual('otatopay')
    });
    it('word start with 2 consonate', function(){
        expect(translate('broccoli')).toEqual('occolitray')
    });
    it('word start with 3 consonate', function(){
        expect(translate('string')).toEqual('ingstray')
    });
    it('word has capital letters', function(){
        expect(translate('ARTICHOKE')),toEqual('artichokeway')
    });
})