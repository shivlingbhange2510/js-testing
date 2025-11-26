import add from './operators.js';
import sub from './substract.js';

describe.skip('testing suits on operators', ()=>{
          test('adding two numbers', ()=>{
              const res = add(1,1);
              expect(res).toBe(2)
          });
          
          test('substract two numbers', ()=>{
               const res = sub(1,1);
              expect(res).toBe(0)
          })
      })

    test('add two number ', ()=>{
        expect(add(1,2)).toBe(3)
    })
})
