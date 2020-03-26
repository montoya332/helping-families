import React from 'react';
import company from '../data/companyInfo';

const contactList = [
  {
    name: 'instagram',
    url: company.instagram,
    iconClassName: 'fab fa-instagram'
  },
  {
    name: 'email',
    url: `mailto:${company.email}`,
    iconClassName: 'fas fa-envelope'
  },
  {
    name: 'facebook',
    url: company.facebook,
    iconClassName: 'fab fa-facebook'
  }
];
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
          {contactList.map((contact) => {
            return (
              <li className="list-inline-item">
                <a href={contact.url}>
                  <i className={contact.iconClassName}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
