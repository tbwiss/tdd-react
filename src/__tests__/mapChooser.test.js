import mapChooser from '../mapChooser';

describe('mapChooser', () => {

    ['portland', 'astoria'].forEach(location => {
    it(`return ${location}.png when input is ${location}`, done => {
        const expected = `${location}.png`;
        const actual = mapChooser(location);
        expect(actual).toEqual(expected);
        done();
      });
    });

it('return none.png when input is null', done => {
    const expected = 'none.png';
    const actual = mapChooser();
    expect(actual).toEqual(expected);
    done();
  });
});