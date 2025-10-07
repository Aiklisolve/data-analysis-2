export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="max-w-xl card p-8">
        <h2 className="text-2xl font-bold mb-2">Page not found</h2>
        <p className="text-slate-600 mb-4">We couldn’t find what you’re looking for. Check the URL or return home.</p>
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </main>
  );
}


