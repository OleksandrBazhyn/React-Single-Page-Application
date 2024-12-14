import React, { useState, useEffect } from 'react';
import { fetchAttachments } from '../api';

const AttachmentsPage = () => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    fetchAttachments()
      .then((response) => {
        console.log('Отримані прикріплення:', response.data);
        setAttachments(response.data); // Встановлюємо прикріплення в стейт
      })
      .catch((err) => console.error('Помилка при отриманні прикріплень:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Прикріплення</h2>
      {attachments.length === 0 ? (
        <p>Немає прикріплень для відображення</p>
      ) : (
        <ul className="list-group">
          {attachments.map((attachment) => (
            <li key={attachment.id} className="list-group-item">
              <a href={attachment.fileUrl} target="_blank" rel="noopener noreferrer">
                Переглянути файл
              </a>
              - Завдання ID: {attachment.TaskId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AttachmentsPage;
