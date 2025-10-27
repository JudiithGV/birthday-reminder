"use client";

import { useState } from "react";
import data from './data.js'
import List from './components/List';

export default function Home() {
  const [people, setPeople] = useState(data);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      </main>
    </div>
  );
}
