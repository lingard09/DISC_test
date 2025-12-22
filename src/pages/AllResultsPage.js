import React, { useState } from "react";
import styles from "../styles/Result.module.css";
import { DISC_DATA } from "../constants";
import DiscModal from "../components/disc/DiscModal";

function AllResultsPage() {
  const [selectedDisc, setSelectedDisc] = useState(null);

  const handleDiscClick = (discData) => {
    setSelectedDisc(discData);
  };

  const handleClose = () => {
    setSelectedDisc(null);
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
        <DiscModal discData={selectedDisc} onClose={handleClose} />
      )}
    </div>
  );
}

export default AllResultsPage;
