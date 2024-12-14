import React, { useEffect, useState } from 'react';
import { fetchAttachments } from '../api';

function AttachmentList() {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    fetchAttachments().then(response => setAttachments(response.data));
  }, []);

  return (
    <div>
      <h2>Attachments</h2>
      <ul>
        {attachments.map(att => (
          <li key={att.id}>
            <a href={att.fileUrl} target="_blank" rel="noopener noreferrer">
              {att.fileUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttachmentList;
