function FAQSection({ faqs }) {
    return (
      <div>
        <h3>Frequently Asked Questions</h3>
        <ul>
          {Object.keys(faqs).map((key) => (
            <li key={key}>
              <strong>{faqs[key]}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FAQSection;