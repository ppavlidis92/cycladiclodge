"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "@/components/cookie-consent.module.css";

const STORAGE_KEY = "cycladic-lodge-cookie-preferences";

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

function subscribe() {
  return () => {};
}

function getClientReady() {
  return true;
}

function getServerReady() {
  return false;
}

function readStoredPreferences() {
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return null;
  }

  try {
    const parsed = JSON.parse(stored);

    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function CookieConsentInner() {
  const storedPreferences = readStoredPreferences();
  const [visible, setVisible] = useState(storedPreferences === null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState(
    storedPreferences ?? defaultPreferences,
  );

  useEffect(() => {
    function openSettings() {
      const nextStoredPreferences = readStoredPreferences();
      setPreferences(nextStoredPreferences ?? defaultPreferences);
      setVisible(true);
      setSettingsOpen(true);
    }

    window.addEventListener("cycladic-open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("cycladic-open-cookie-settings", openSettings);
    };
  }, []);

  function savePreferences(nextPreferences) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setVisible(false);
    setSettingsOpen(false);
  }

  function acceptAll() {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  }

  function acceptEssentialOnly() {
    savePreferences(defaultPreferences);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Privacy</p>
        <h2 className={styles.title}>Cookie settings</h2>
        <p className={styles.copy}>
          We use essential cookies to keep the site working and optional cookies
          to understand visits and improve the experience.
        </p>

        {settingsOpen ? (
          <div className={styles.settings}>
            <div className={styles.option}>
              <div>
                <span className={styles.optionTitle}>Essential</span>
                <span className={styles.optionCopy}>Always active</span>
              </div>
              <span className={`${styles.switch} ${styles.switchLocked}`}>On</span>
            </div>

            <div className={styles.option}>
              <div>
                <span className={styles.optionTitle}>Analytics</span>
                <span className={styles.optionCopy}>
                  Help us understand how guests use the site
                </span>
              </div>
              <button
                type="button"
                className={`${styles.switch} ${
                  preferences.analytics ? styles.switchOn : ""
                }`}
                onClick={() =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: !current.analytics,
                  }))
                }
              >
                {preferences.analytics ? "On" : "Off"}
              </button>
            </div>

            <div className={styles.option}>
              <div>
                <span className={styles.optionTitle}>Marketing</span>
                <span className={styles.optionCopy}>
                  Allow tailored offers and campaign measurement
                </span>
              </div>
              <button
                type="button"
                className={`${styles.switch} ${
                  preferences.marketing ? styles.switchOn : ""
                }`}
                onClick={() =>
                  setPreferences((current) => ({
                    ...current,
                    marketing: !current.marketing,
                  }))
                }
              >
                {preferences.marketing ? "On" : "Off"}
              </button>
            </div>
          </div>
        ) : null}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => setSettingsOpen((current) => !current)}
          >
            {settingsOpen ? "Hide settings" : "Cookie settings"}
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={acceptEssentialOnly}
          >
            Essential only
          </button>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={settingsOpen ? () => savePreferences(preferences) : acceptAll}
          >
            {settingsOpen ? "Save preferences" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CookieConsent() {
  const isClient = useSyncExternalStore(
    subscribe,
    getClientReady,
    getServerReady,
  );

  if (!isClient) {
    return null;
  }

  return <CookieConsentInner />;
}
