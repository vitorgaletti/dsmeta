import './styles.css';

import axios from 'axios';

import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

interface NotificationButtonProps {
  saleId: number;
}

export function NotificationButton({ saleId }: NotificationButtonProps) {
  function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`).then(response => {
      console.log('Sucesso');
    });
  }

  return (
    <div
      className="dsmeta-red-btn"
      onClick={() => {
        handleClick(saleId);
      }}
    >
      <img src={icon} alt="Notificar" />
    </div>
  );
}
