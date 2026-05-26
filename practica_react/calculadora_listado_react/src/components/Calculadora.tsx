import { useState } from 'react';

export default function Calculadora() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [res, setRes] = useState<number | string>(0);

  const calcular = (op: string) => {
    if (op === '+') setRes(n1 + n2);
    if (op === '-') setRes(n1 - n2);
    if (op === '*') setRes(n1 * n2);
    if (op === '/') setRes(n2 !== 0 ? n1 / n2 : 'Error');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '300px' }}>
      <input type="number" className="form-control mb-2" onChange={e => setN1(Number(e.target.value))} />

      <input type="number" className="form-control mb-2" onChange={e => setN2(Number(e.target.value))} />

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary w-100" onClick={() => calcular('+')}>+</button>

        <button className="btn btn-primary w-100" onClick={() => calcular('-')}>-</button>

        <button className="btn btn-primary w-100" onClick={() => calcular('*')}>x</button>

        <button className="btn btn-primary w-100" onClick={() => calcular('/')}>/</button>
      </div>

      <div className="alert alert-secondary text-center">
        Resultado: {res}
      </div>
    </div>
  );
}

calculadora