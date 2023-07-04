import React from 'react';
import copyIcon from '../../assets/copy.svg';
import colors from './Colorpalette.json';
import styles from '../../styles/mw.module.css';
import CopyToClipboard from '../../components/CopyClipboard';
import ContentTable from '../../components/ContentTable';

const ColorCard = ({ background, color, contrast, hex, colorName, colorNumbers, contrastColor }) => {

  return (
    <div className={styles.cards + ' ' + styles.colors}>
      
      <div className={styles.colorBox} style={{ background }}>
        <div className={styles.overlay} onClick={() => CopyToClipboard(hex)} >
          <img src={copyIcon} alt="Copy" />
          <div className={styles.colorHex} style={{ color: "#FFFFFF" }}>
          {hex}
          </div>
        </div>
        <div className={styles.colorName} style={{ color }}>
          {colorName}
        </div>
      </div>
      <div className={styles.colorInfo}>
        <div className={styles.colorNumbers} onClick={() => CopyToClipboard(background)} >{background}
          <div className={styles.overlay} onClick={() => CopyToClipboard(background)} style={{ background : "var(--dark-bg)" }}>
          </div>
        </div>
      </div>
      
    </div>
  );
};

const ShadeTint = () => {
  const { base, grey, primary, secondary, positive, caution, negative, } = colors;
  
  return (
    <>
      <div className={styles.colorPalette}>
        <div className={styles.cardTitle}><div className={styles.baseIcon}></div>Base Colors</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {base.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle}><div className={styles.grIcon}></div>Grey Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {grey.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle} id><div className={styles.prmIcon}></div>Primary Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {primary.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle}><div className={styles.secIcon}></div>Secondary Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {secondary.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle}><div className={styles.posIcon}></div>Positive Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {positive.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle}><div className={styles.cauIcon}></div>Caution Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {caution.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className={styles.cardTitle}><div className={styles.negIcon}></div>Negative Color</div>
        <div className={styles.cardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className={styles.cardsGrid}>
          {negative.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>
      <ContentTable />
    </>
  );
};

export default ShadeTint;
