export default function Page() {
  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: 30/05/2025</p>
      <p className="mb-4">
        This Privacy Policy describes how your information is collected, used,
        and shared when you visit or submit a form on yusaf.dev.
      </p>
      {/* 1. What */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information collected
      </h2>
      <p>
        When you use the contact form, the following personal information is
        collected:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name.</li>
        <li>Email address.</li>
        <li>Message content.</li>
        <li>Date/time of contact.</li>
      </ul>
      <p>
        No other personal information is collected, and there are no cookies
        used for tracking visitors.
      </p>

      {/* 2. How */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. How I Collect It</h2>
      <p className="mb-4">
        Through the contact form on this website, powered by Formspree or
        similar services.
      </p>

      {/* 3. Why */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Why I Collect It</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To respond to your message.</li>
        <li>To understand who's contacting me.</li>
        <li>To maintain a record of communication.</li>
      </ul>

      {/* 4. Storage */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. How Your Data Is Stored
      </h2>
      <p>
        Submissions are securely processed through{" "}
        <a
          className="underline"
          target="_blank"
          href="https://formspree.io/"
          aria-label="Formspree link"
        >
          formspree.io
        </a>
        , which is a third-party contact form provider. For more information on
        their privacy practices, please visit the{" "}
        <a
          className="underline"
          target="_blank"
          aria-label="Formspree privacy policy"
          href="https://formspree.io/legal/privacy-policy"
        >
          Formspree privacy policy page
        </a>
        .
      </p>

      {/* 5. Sharing */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Sharing</h2>
      <p className="mb-4">
        I do not sell or share your personal data. Contact data is stored
        securely via Formspree or equivalent and is only accessible to me.
      </p>

      {/* 6. Retention */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
      <p className="mb-4">
        Your messages may be retained for as long as necessary to handle your
        request or as required for legal reasons.
      </p>

      {/* 7. Rights */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <p className="mb-4">
        You can request access to, or deletion of, your data at any time by
        contacting me directly.
      </p>

      {/* 8. Changes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes</h2>
      <p className="mb-4">
        I may update this policy occasionally to reflect changes in practices or
        for legal reasons. The latest version will always be available on this
        page.
      </p>

      {/* 9. Contact Us */}
      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy, please contact me via
        the contact form on this website.
      </p>
    </div>
  );
}
