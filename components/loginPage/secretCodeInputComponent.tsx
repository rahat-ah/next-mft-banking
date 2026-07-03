"use client";

import { useState } from "react";

function secretCodeInputComponent() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
    {
        !isAdmin && (
<div><input
                type="text"
                name="secretCode"
                placeholder="Officer Secret Code"
                required={!isAdmin}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              /></div>
        )
        }
              
            

            <div className="flex items-center gap-2">
              <input type="checkbox" id="adminToggle" className="h-4 w-4" checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}/>
              <label htmlFor="adminToggle" className="text-gray-700">
                Admin
              </label>

              <input
                type="text"
                name="adminCode"
                placeholder="Admin Code"
                disabled={!isAdmin}
                required={isAdmin}
                className={`border rounded-lg px-3 py-1 ml-2 flex-1 transition
                ${
                  isAdmin
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              />
            </div>
    </>
  )
}

export default secretCodeInputComponent