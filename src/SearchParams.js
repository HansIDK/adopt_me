import React from "react";

export function SearchParams() {
  return (
    <div className="search-params">
      <form>
        <label htmlFor="">Location</label>
        <input type="text" id="location" />
        <button>Submit</button>
      </form>
    </div>
  );
}