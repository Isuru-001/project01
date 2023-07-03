import React from 'react';
import './paragraph.css';

export default function Paragraph() {
  return (
    <div className="paragraph-container">
      <div className="paragraph">
        <dl>
          <dt>
            <h2>Package Details</h2>
          </dt>
          <dd>
            <h3>package name</h3>
          </dd>
          <dd>
            <h3>Price</h3>
          </dd>
          <br />

          <dt>
            <h2>Bank Details</h2>
          </dt>
          <dd>
            <h3>Account holder name</h3>
          </dd>
          <dd>
            <h3>Accont number</h3>
          </dd>
          <dd>
            <h3>Bank name</h3>
          </dd>
          <dd>
            <h3>Branch name</h3>
          </dd>
        </dl>
      </div>
    </div>
  );
}
