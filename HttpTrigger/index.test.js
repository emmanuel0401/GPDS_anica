const httpFunction = require('./index');
const context =require('../testing/Context');

test('Http trigger example', async () => {
    const request = {
        query: { name: 'Anica' }
    };
    var iteration = 1000000;
    console.time('FUNCTION #1');
    for (var i = 0; i < iteration; i++) {
        httpFunction(context, request);
    }
    console.timeEnd('FUNCTION #1');
    await httpFunction(context, request);
    expect(context.res.body).toContain('H');
    expect(context.res.body).toEqual('Hola, Anica');
    //expect(context.log.mock.calls.length).toBe(2);
});