"use client";
import { useState } from "react";

export default function Page() {
  // Step 1: State to store the input value
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextEmail, setInputTextEmail] = useState("");
  const [inputTextMessage, setInputTextMessage] = useState("");
  const today = new Date();
  // const day = today.getDay();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  // const currentDate = month + "/" + date + "/" + year;
  const currentDate = today.toDateString();

  // Step 2: Update state as the user types
  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextName(e.target.value);
  };
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextEmail(e.target.value);
  };
  const handleMessageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextMessage(e.target.value);
  };

  return (
    <div className="border-2 w-full">
      <div className="flex flex-row grow border-2 border-red-700 p-2 h-full">
        <div className="border-2 w-3/12">
          <p>Contact info</p>
        </div>
        <div className="border-2 flex w-9/12">
          <div className="input-form border-2 flex flex-col w-6/12 items-center justify-center">
            <h2>Name:</h2>
            {/* Step 3: Input field bound to state */}
            <input
              className="rounded-lg bg-primary-3"
              type="text"
              value={inputTextName}
              onChange={handleNameInputChange}
              placeholder="Start typing..."
              style={{ padding: "8px", width: "300px" }}
            />
            <h2>Email:</h2>
            {/* Step 3: Input field bound to state */}
            <input
              className="rounded-lg bg-primary-3"
              type="text"
              value={inputTextEmail}
              onChange={handleEmailInputChange}
              placeholder="Start typing..."
              style={{ padding: "8px", width: "300px" }}
            />
            <h2>Message:</h2>
            {/* Step 3: Input field bound to state */}
            <input
              className="rounded-lg bg-primary-3"
              type="text"
              value={inputTextMessage}
              onChange={handleMessageInputChange}
              placeholder="Start typing..."
              style={{ padding: "8px", width: "300px" }}
            />
          </div>
          <div className="output flex w-6/12 items-center justify-center">
            {/* Step 4: Display the input text */}
            <div className="border border-lines-1 rounded-xl p-4 bg-primary-1 flex flex-row gap-12 overflow-auto">
              <div className="numbers text-right">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
              </div>
              <div className="code flex flex-col">
                <p className="text-secondary-4 inline">
                  <span className="text-secondary-3">const</span>
                  &nbsp;
                  <span className="text-accent-2">button</span>
                  &nbsp;
                  <span className="text-secondary-1">&#61;</span>
                  &nbsp;
                  <span className="text-secondary-3">
                    document.querySelector
                  </span>
                  &nbsp;
                  <span className="text-secondary-1">&#40;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;&#35;sendBtn&#39;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#41;&#59;</span>
                </p>
                &nbsp;
                <p className="text-secondary-4 inline">
                  <span className="text-secondary-3">const</span>
                  &nbsp;
                  <span className="text-accent-2">message</span>
                  &nbsp;
                  <span className="text-secondary-1">&#61;</span>
                  &nbsp;
                  <span className="text-secondary-1">&#123;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;name&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextName}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;email&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextEmail}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;message&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{inputTextMessage}&#34;
                  </span>
                  <span className="text-secondary-3">&#44;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-accent-1">&#39;date&#39;</span>
                  &nbsp;
                  <span className="text-secondary-3">&#58;</span>
                  &nbsp;
                  <span className="text-secondary-1">
                    &#34;{currentDate}&#34;
                  </span>
                  <br />
                  <span className="text-secondary-1">&#125;</span>
                  <span className="text-secondary-3">&#59;</span>
                </p>
                &nbsp;
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
      </div>
    </div>
  );
}
