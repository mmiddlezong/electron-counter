"use client";

import React, { useState } from "react";

export default function Home() {
    const [nIn, setNIn] = useState<string>("");
    const [pIn, setPIn] = useState<string>("");
    const [mLIn, setMLIn] = useState<string>("");
    const [mSIn, setMSIn] = useState<string>("any");
    const [message, setMessage] = useState<string>("");
    async function handleSubmit(e: any) {
        e.preventDefault();
        let count: number = 0;
        for (let n = 1; n < 100; n++) {
            for (let p = 0; p < n; p++) {
                for (let mL = 0 - p; mL <= p; mL++) {
                    ["+1/2", "-1/2"].forEach((mS) => {
                        const nMatch = nIn.length == 0 || n == parseInt(nIn);
                        const pMatch = pIn.length == 0 || p == parseInt(pIn);
                        const mLMatch = mLIn.length == 0 || mL == parseInt(mLIn);
                        const mSMatch = mSIn === "any" || mS === mSIn;
                        if (nMatch && pMatch && mLMatch && mSMatch) {
                            count++;
                        }
                    });
                }
            }
        }
        setMessage(`Total # of possible electrons: ${count}`)
    }

    return (
        <div className="container mx-auto px-4 py-2">
            <h1 className="text-2xl mb-4">Chemistry Electron Counter</h1>
            <div className="mb-2">
                <label>
                    n:
                    <input type="number" className="mx-2 bg-slate-200" name="n" value={nIn} onChange={(e) => setNIn(e.target.value)} />
                </label>
            </div>
            <div className="mb-2">
                <label>
                    p:
                    <input type="number" className="mx-2 bg-slate-200" name="p" value={pIn} onChange={(e) => setPIn(e.target.value)} />
                </label>
            </div>
            <div className="mb-2">
                <label>
                    m_l:
                    <input type="number" className="mx-2 bg-slate-200" name="m_l" value={mLIn} onChange={(e) => setMLIn(e.target.value)} />
                </label>
            </div>
            <div className="mb-2">
                <label>
                    m_s:
                    <select name="m_s" className="mx-2 bg-slate-200 px-2 py-1" value={mSIn} onChange={(e) => setMSIn(e.target.value)}>
                        <option value="any">any</option>
                        <option value="+1/2">+1/2</option>
                        <option value="-1/2">-1/2</option>
                    </select>
                </label>
            </div>
            <button className="bg-slate-200 px-4 py-2 rounded" onClick={(e) => handleSubmit(e)}>
                <div>Calculate</div>
            </button>
            <div>
              {message}
            </div>
        </div>
    );
}
