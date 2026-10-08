export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <aside className="fixed inset-y-0 left-0 w-72 bg-slate-900 text-white p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">JibuSacco</h1>
          <p className="text-sm text-slate-400">Admin Dashboard</p>
        </div>

        <nav className="space-y-2">
          {['Dashboard', 'Members', 'Loans', 'FAQs', 'Conversations', 'Reports'].map((item) => (
            <button
              key={item}
              className="w-full rounded-lg bg-slate-800 px-4 py-3 text-left text-sm hover:bg-slate-700"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="ml-72 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Overview</p>
            <h2 className="text-3xl font-bold">Dashboard</h2>
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
            + New Report
          </button>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Total Members', '1,540', '+12%'],
            ['Active Loans', '284', '+5%'],
            ['Open Chats', '42', '-3%'],
            ['FAQ Coverage', '86%', '+8%'],
          ].map(([label, value, trend]) => (
            <div key={label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">{label}</p>
              <div className="mt-3 flex items-end justify-between">
                <h3 className="text-3xl font-bold">{value}</h3>
                <span className="text-sm font-medium text-emerald-600">{trend}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 xl:col-span-2">
            <h3 className="mb-4 text-lg font-bold">Chat Activity</h3>
            <div className="grid grid-cols-7 gap-3">
              {[42, 58, 40, 66, 72, 50, 80].map((height, index) => (
                <div key={index} className="flex h-40 items-end justify-center">
                  <div
                    className="w-full rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="mb-4 text-lg font-bold">Recent Issues</h3>
            <ul className="space-y-4">
              {[
                'Loan application delayed for member #2048',
                'FAQ mismatch on withdrawal policy',
                'WhatsApp bot failed to answer one query',
              ].map((issue) => (
                <li key={issue} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
