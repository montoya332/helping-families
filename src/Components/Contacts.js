import React from 'react';

const Contacts = () => {
  return (
    <section class="contact bg-navy-blue-3 text-white" id="contact">
      <div className="container">
        <p>
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VFZQL9TJ28Y52&source=url">
            Donate: <i className="fab fa-3x fa-paypal"></i>
          </a>
        </p>
        <p>
          Email: <a href="mailto:info@helpingfamiliesinsv.org">info@helpingfamiliesinsv.org</a>
        </p>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-instagram">
            <a href="https://instagram.com/helpingfamiliesinsv">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:info@helpingfamiliesinsv.org">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
