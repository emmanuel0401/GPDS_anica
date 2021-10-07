const functions = require('./index');
const context =require('../testing/Context');

test('Http trigger example', async ()=>{
    const request ={
        query: { name: 'Anica'}
    };

    await functions(context, request);
    expect(context.res.body).toContain('H');
    expect(context.res.body).toEqual('Hola, Anica');
    expect(context.log.mock.calls.length).toBe(2);
});
