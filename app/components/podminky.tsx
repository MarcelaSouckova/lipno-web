import React from 'react';

const Podminky: React.FC = () => (
  <section className="max-w-screen-md mx-auto my-8 p-6 bg-white shadow-xl rounded-xl">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-blue-900">Platební a storno podmínky</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Platební podmínky */}
      <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Platební podmínky</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Při rezervaci je nutná platba <strong className="text-indigo-600">30&nbsp;%</strong> z celkové ceny.
          </li>
          <li>
            <strong className="text-indigo-600">14 dní před začátkem pobytu</strong> je splatný zbytek ceny.
          </li>
          <li>Veškeré platby probíhají na základě faktur.</li>
        </ul>
      </div>

      {/* Storno podmínky */}
      <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Storno podmínky</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Při zrušení <strong className="text-indigo-600">14 dní a více</strong> před začátkem pobytu storno poplatek <strong className="text-indigo-600">0&nbsp;%</strong>.
          </li>
          <li>
            Při zrušení <strong className="text-indigo-600">méně než 14 dní</strong> před začátkem pobytu storno poplatek <strong className="text-indigo-600">30&nbsp;%</strong> z celkové ceny.
          </li>
          <li>
            Při zrušení <strong className="text-indigo-600">3 dny a méně</strong> před začátkem pobytu je storno poplatek <strong className="text-indigo-600">100&nbsp;%</strong> z celkové ceny.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Podminky;
