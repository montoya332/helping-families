import React from 'react';

const Contacts = () => {
  return (
    <div className="Contacts">
        <div class="container">
            <p>
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VFZQL9TJ28Y52&source=url">
                Donate: <i class="fab fa-3x fa-paypal"></i>
              </a>
            </p>
            <p>
              Email: <a href="mailto:info@helpingfamiliesinsv.org">info@helpingfamiliesinsv.org</a>
            </p>
            <ul class="list-inline list-social">
              <li class="list-inline-item social-instagram">
                <a href="https://instagram.com/helpingfamiliesinsv">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:info@helpingfamiliesinsv.org">
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
    </div>
  );
}

export default Contacts;