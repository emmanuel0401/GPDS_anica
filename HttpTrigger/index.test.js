const functions = require('./index');
const context =require('../testing/Context');

test('Http trigger', async ()=>{
    const request ={
        query: { name: 'Anica'}
    };

    await functions(context, request);
    debugger;
    expect(context.res.body).toEqual('Hola, Anica');
    expect(context.log.mock.calls.length).toBe(1);
});