import { ErrorBoundary } from "./error";
import Locale, { AllLangs, getLang } from "../locales";
import NextImage from "next/image";
import styles from "./subscribe.module.scss";
import SubscribeQrCode from "../icons/qrcode.png";

export function Subscribe() {
  return (
    <ErrorBoundary>
      <div>
        <h1>{Locale.Subscribe.CupOfCoffee}</h1>
        <NextImage
          alt="load failed"
          src={SubscribeQrCode.src}
          width={200}
          height={200}
          style={{
            aspectRatio: 1,
          }}
        />
        <p className={styles["hint"]}>{Locale.Subscribe.Tips}</p>
      </div>
    </ErrorBoundary>
  );
}
