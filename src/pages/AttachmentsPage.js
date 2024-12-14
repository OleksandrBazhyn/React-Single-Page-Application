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
      <h2 className="mb-4">Прикріплення</h2>
      {attachments.length === 0 ? (
        <p>Немає прикріплень для відображення</p>
      ) : (
        <div className="list-group">
          {attachments.map((attachment) => (
            <div key={attachment.id} className="list-group-item d-flex justify-content-between align-items-center">
              <a href={attachment.fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                Переглянути файл
              </a>
              <span>Завдання ID: {attachment.TaskId}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentsPage;
