const test = QUnit.test;
import catOrDog from '../src/cat-or-dog.js';

test('if randomNumber is less than .0, return cat', function(assert){
    const result = catOrDog(0.3);
    assert.equal(result, 'cat');
});

test('if randomNumber is greater than or equal to .0, return dog', function(assert){
    const result = catOrDog(0.7);
    assert.equal(result, 'dog');
});