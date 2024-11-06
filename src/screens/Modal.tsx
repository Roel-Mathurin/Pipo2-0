import  { useState } from 'react';
import './Modal.css'; 
import HistoriqueFesti from './HistoriqueFesti';

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).className === 'modal') {
      closeModal();
    }
  };

  return (
    <div>
      <h2>Modal Example</h2>
      
      <button onClick={openModal} className='bg-yellow-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center w-60 mt-10'>CONSULTEZ TOUT LES VAINQUEURS DU FESTI PIPO</button>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>tout les vainqueurs du tournoi...</p>
            <HistoriqueFesti/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
