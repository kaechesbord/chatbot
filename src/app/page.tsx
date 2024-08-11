"use client"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-4">Welcome to Talk-to-Websites</h1>
      <p className="text-lg mb-8">To begin place a forward-slash ( / ) after the url at the top and paste the entire url of the website you want to talk to .</p>
      <button onClick={() => alert("Great! Now begin.")} className="bg-blue-500 text-white px-4 py-2 rounded">Understand?</button>
      <p className="text-lg mt-8 text-orange-400">Note: the AI is a little young so you might get odd answers.</p>
    </main>
  );
}
