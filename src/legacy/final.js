import { useState } from "react";
import styles from "./result.module.css";
import { DISC_DATA } from "./constants/discTypes";

function FinalResult() {
  const [selectedDisc, setSelectedDisc] = useState(null);

  const handleDiscClick = (discData) => {
    setSelectedDisc(discData);
  };

  const handleClose = () => {
    setSelectedDisc(null);
  };

  const handleModalBackgroundClick = (e) => {
    // 배경 클릭 시에만 닫기
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div>
      <h1 className={styles.logo}>DISC 업무 타입</h1>
      <div className={styles.container}>
        {DISC_DATA.map((discData) => (
          <img
            key={discData.id}
            src={discData.image}
            alt={`${discData.name} 타입`}
            className={styles.image}
            onClick={() => handleDiscClick(discData)}
          />
        ))}
      </div>

      {selectedDisc && (
        <div className={styles.modalbg} onClick={handleModalBackgroundClick}>
          <div className={styles.modal}>
            <img
              src={selectedDisc.detailImage}
              alt={selectedDisc.name}
              className={styles.modalImage}
            />
            <div className={styles.modaltitle}>
              <div className={styles.modalkey}>{selectedDisc.keyword}</div>
            </div>
            <div className={styles.modaldescription}>{selectedDisc.tips}</div>
            <div className={styles.cbox}>
              <button className={styles.close} onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinalResult;
