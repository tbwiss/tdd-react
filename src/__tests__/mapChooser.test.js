import mapChooser from '../mapChooser';

describe('mapChooser', () => {

    ['portland', 'astoria'].forEach(location => {
    it(`return ${location}.jpg when input is ${location}`, done => {
        const expected = `${location}.jpg`;
        const actual = mapChooser(location);
        expect(actual).toEqual(expected);
        done();
      });
    });

it('return default.jpg when input is null', done => {
    const expected = 'default.jpg';
    const actual = mapChooser();
    expect(actual).toEqual(expected);
    done();
  });
});