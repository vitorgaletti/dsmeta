import './styles.css';

import axios from 'axios';

import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

interface NotificationButtonProps {
  saleId: number;
}

export function NotificationButton({ saleId }: NotificationButtonProps) {
  function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`).then(response => {
      toast.info('SMS enviado com sucesso');
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
