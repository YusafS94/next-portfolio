"use client";
import { useState } from "react";
import {
  EnvelopeIcon,
  BriefcaseIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

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
  const handleMessageInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextMessage(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row grow h-full">
        <div className="flex flex-col gap-4 border-r border-lines-1 md:w-3/12">
          <div className="flex flex-col">
            <p className="border-b border-lines-1 py-2 px-4 text-secondary-4">
              Contact info
            </p>
            <div className="flex flex-col gap-2 py-2 px-4">
              <div className="flex">
                <EnvelopeIcon className="h-6 w-6" />
                <a href="mailto:yusafsaddiq@gmail.com">
                  &nbsp;yusafsaddiq@gmail.com
                </a>
              </div>
              <div className="flex">
                <BriefcaseIcon className="h-6 w-6" />
                <a href="https://www.linkedin.com/in/yusaf-saddiq-0b1a1b1a8/">
                  &nbsp;linkedin.com/in/yusaf-saddiq/
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="border-b border-t border-lines-1 py-2 px-4 text-secondary-4">
              Find me also at
            </p>
            <div className="flex flex-col gap-2 py-2 px-4">
              <div className="flex">
                <LinkIcon className="h-6 w-6" />
                <a href="#">&nbsp;Instagram</a>
              </div>
              <div className="flex">
                <LinkIcon className="h-6 w-6" />
                <a href="#">&nbsp;GitHub</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="border-b border-t border-lines-1 py-2 px-4 text-secondary-4">
              Curriculum Vitae
            </p>
            <div className="flex flex-col gap-2 py-2 px-4">
              <div className="flex">
                <LinkIcon className="h-6 w-6" />
                &nbsp;
                <a className="py-2 px-4 bg-accent-1 text-secondary-4 rounded-md" href="#">
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:w-9/12">
          <div className="input-form flex flex-col gap-6 lg:w-6/12 items-center justify-center border-r border-lines-1">
            <div className="text-left flex flex-col gap-2">
              <h2>_name:</h2>
              {/* Step 3: Input field bound to state */}
              <input
                className="rounded-lg bg-primary-3 border-2 border-lines-1"
                type="text"
                value={inputTextName}
                onChange={handleNameInputChange}
                placeholder="Start typing..."
                style={{ padding: "8px", width: "300px" }}
              />
            </div>
            <div className="text-left flex flex-col gap-2">
              <h2>_email:</h2>
              {/* Step 3: Input field bound to state */}
              <input
                className="rounded-lg bg-primary-3 border-2 border-lines-1"
                type="text"
                value={inputTextEmail}
                onChange={handleEmailInputChange}
                placeholder="Start typing..."
                style={{ padding: "8px", width: "300px" }}
              />
            </div>
            <div className="text-left flex flex-col gap-2">
              <h2>_message:</h2>
              {/* Step 3: Input field bound to state */}
              <textarea
                className="rounded-lg bg-primary-3 border-2 border-lines-1"
                value={inputTextMessage}
                onChange={handleMessageInputChange}
                placeholder=""
                style={{ padding: "8px", width: "300px", height: "150px" }}
              />
            </div>
            <button id="submit-button" type="submit" className="py-2 px-4 bg-lines-1 text-secondary-4 rounded-lg">submit-message</button>
          </div>
          <div className="output flex lg:w-6/12 items-center justify-center">
            {/* Step 4: Display the input text */}
            <div className="border border-lines-1 rounded-xl p-4 bg-primary-1 hidden md:flex flex-row gap-12 overflow-auto">
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
