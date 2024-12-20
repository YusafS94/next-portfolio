"use client";
import { useState } from "react";

export default function Page() {
  // Step 1: State to store the input value
  const [inputText, setInputText] = useState("");

  // Step 2: Update state as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="border-2 w-full">
      <div className="flex flex-row grow border-2 border-red-700 p-2 h-full">
        <div className="border-2 w-3/12">
          <p>Contact info</p>
        </div>
        <div className="border-2 flex w-9/12">
          <div className="input-form border-2 flex flex-col w-6/12 items-center justify-center">
            <h2>Type Something:</h2>
            {/* Step 3: Input field bound to state */}
            <input
              className="rounded-lg bg-primary-3"
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Start typing..."
              style={{ padding: "8px", width: "300px" }}
            />
          </div>
          <div className="output border-2 flex flex-col w-6/12 items-start justify-center pl-12">
            {/* Step 4: Display the input text */}
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              const name = <strong>{inputText}</strong>
            </p>
            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>
              &nbsp;
              <span className="text-accent-2">button</span>
              &nbsp; = &nbsp;
              <span className="text-secondary-3">document.querySelector</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;&#35;sendBtn&#39;</span>
              &nbsp;
              <span className="text-secondary-1">&#41;&#59;</span>
            </p>

            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>
              &nbsp;
              <span className="text-accent-2">message</span>
              &nbsp; = &nbsp;
              <span className="text-secondary-1">&#123;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;name&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;{inputText}&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;email&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;message&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;date&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">
                &#34;Thu Dec 19 2024&#34;
              </span>
              <br />
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-3">&#59;</span>
            </p>

            <p className="text-secondary-4 inline">
              <span className="text-accent-2">button</span>
              <span className="text-secondary-3">.addEventListener</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <span className="text-accent-1">&#39;click&#39;</span>
              <span className="text-secondary-1">&#41;&#44;</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>&nbsp;
              <span className="text-secondary-1">&#41;</span>
              &nbsp;
              <span className="text-secondary-3">&#61;&#62;</span>
              &nbsp;
              <span className="text-secondary-1">&#123;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-2">form</span>
              <span className="text-secondary-3">.send</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <span className="text-accent-2">message</span>
              <span className="text-secondary-1">&#41;</span>
              <span className="text-secondary-3">&#59;</span>
              <br />
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-1">&#41;&#59;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
