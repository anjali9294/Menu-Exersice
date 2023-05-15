import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const newCategory = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategory);

  const filteredItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu menuItem={menuItem} />
      </section>
    </main>
  );
}

export default App;
