import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

export default function AddReservationForm() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ summary: "", description: "", start: "", end: "" });
  const [result, setResult] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    if (!session) { signIn("google"); return; }
    const res = await fetch("/api/calendar/add-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        summary: form.summary,
        description: form.description,
        startDateTime: form.start,
        endDateTime: form.end
      })
    });
    setResult(await res.json());
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-2">Přidat rezervaci</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="summary" placeholder="Název (např. Host Jan)"
               value={form.summary} onChange={handleChange}
               required className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Popis (ID rezervace)"
                  value={form.description} onChange={handleChange}
                  className="w-full p-2 border rounded" />
        <input type="datetime-local" name="start" value={form.start}
               onChange={handleChange} required
               className="w-full p-2 border rounded" />
        <input type="datetime-local" name="end" value={form.end}
               onChange={handleChange} required
               className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Vytvořit rezervaci
        </button>
      </form>
      {result && (
        <p className="mt-2">
          {result.id
            ? `✅ Událost ID: ${result.id}. Nyní počkej na synchronizaci v Airbnb (nebo v Airbnb klikni Refresh).`
            : `❌ Chyba: ${result.error}`}
        </p>
      )}
    </div>
  );
}