import React from "react";

import styles from "./arrow.module.css";

export const Arrow: React.FC = () => (
  <svg width="28" height="34" viewBox="0 0 28 34">
    <path
      d="M15.488 33.4L27.388 21.8C27.5834 21.6133 27.739 21.3889 27.8452 21.1403C27.9515 20.8918 28.0063 20.6243 28.0063 20.354C28.0063 20.0837 27.9515 19.8162 27.8452 19.5677C27.739 19.3192 27.5834 19.0947 27.388 18.908L25.404 16.979C25.0069 16.5933 24.4751 16.3776 23.9215 16.3776C23.3679 16.3776 22.8361 16.5933 22.439 16.979L14.004 25.194L5.56799 16.971C5.17086 16.5853 4.63907 16.3696 4.08549 16.3696C3.53191 16.3696 3.00013 16.5853 2.60299 16.971L0.616992 18.899C0.421566 19.0857 0.26602 19.3102 0.159749 19.5587C0.053478 19.8072 -0.00131226 20.0747 -0.00131226 20.345C-0.00131226 20.6153 0.053478 20.8828 0.159749 21.1313C0.26602 21.3799 0.421566 21.6043 0.616992 21.791L12.517 33.391C12.9136 33.779 13.4459 33.9969 14.0007 33.9986C14.5555 34.0003 15.089 33.7855 15.488 33.4V33.4Z"
      fill="white"
      className={styles.shape1}
    />
    <path
      d="M12.513 17.022L0.616992 5.42099C0.421566 5.23425 0.26602 5.00984 0.159749 4.76131C0.053478 4.51278 -0.00131226 4.24529 -0.00131226 3.97499C-0.00131226 3.70469 0.053478 3.4372 0.159749 3.18866C0.26602 2.94013 0.421566 2.71572 0.616992 2.52899L2.59399 0.601987C2.99113 0.216331 3.52292 0.000610352 4.07649 0.000610352C4.63007 0.000610352 5.16186 0.216331 5.55899 0.601987L13.991 8.82499L22.424 0.601987C22.8211 0.216331 23.3529 0.000610352 23.9065 0.000610352C24.4601 0.000610352 24.9919 0.216331 25.389 0.601987L27.384 2.52099C27.5794 2.70772 27.735 2.93213 27.8412 3.18066C27.9475 3.4292 28.0023 3.69669 28.0023 3.96699C28.0023 4.23729 27.9475 4.50478 27.8412 4.75331C27.735 5.00184 27.5794 5.22625 27.384 5.41299L15.488 17.01C15.0916 17.3995 14.5587 17.6188 14.0029 17.621C13.4472 17.6233 12.9125 17.4083 12.513 17.022Z"
      fill="white"
      className={styles.shape2}
    />
  </svg>
);