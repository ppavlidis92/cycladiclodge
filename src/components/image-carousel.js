"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "@/app/page.module.css";

const images = Array.from({ length: 12 }, (_, index) => ({
  src: `/carousel-images/${index + 1}.jpg`,
  alt: `Cycladic Lodge Sifnos gallery photo ${index + 1}`,
}));
const loopedImages = [...images, ...images, ...images];

export default function ImageCarousel() {
  const trackRef = useRef(null);
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const isAdjustingRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector("[data-carousel-card]");

    if (!firstCard) {
      return;
    }

    const gap = 16;
    const cardWidth = firstCard.clientWidth + gap;
    track.scrollLeft = cardWidth * images.length;
  }, []);

  function normalizeLoopPosition() {
    const track = trackRef.current;

    if (!track || isAdjustingRef.current) {
      return;
    }

    const firstCard = track.querySelector("[data-carousel-card]");

    if (!firstCard) {
      return;
    }

    const gap = 16;
    const cardWidth = firstCard.clientWidth + gap;
    const segmentWidth = cardWidth * images.length;
    const leftEdgeThreshold = segmentWidth * 0.5;
    const rightEdgeThreshold = segmentWidth * 2.5;

    if (track.scrollLeft <= leftEdgeThreshold) {
      isAdjustingRef.current = true;
      track.scrollLeft += segmentWidth;
      isAdjustingRef.current = false;
    } else if (track.scrollLeft >= rightEdgeThreshold) {
      isAdjustingRef.current = true;
      track.scrollLeft -= segmentWidth;
      isAdjustingRef.current = false;
    }
  }

  function scrollByCards(direction) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector("[data-carousel-card]");
    const gap = 16;
    const step = firstCard ? firstCard.clientWidth + gap : track.clientWidth * 0.8;

    track.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });

    window.setTimeout(normalizeLoopPosition, 360);
  }

  function handlePointerDown(event) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    dragStateRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    };

    track.setPointerCapture(event.pointerId);
    track.classList.add(styles.carouselDragging);
  }

  function handlePointerMove(event) {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.active) {
      return;
    }

    const delta = event.clientX - dragState.startX;
    track.scrollLeft = dragState.startScrollLeft - delta;
  }

  function handlePointerUp(event) {
    const track = trackRef.current;

    dragStateRef.current.active = false;

    if (!track) {
      return;
    }

    track.classList.remove(styles.carouselDragging);
    normalizeLoopPosition();

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section className={styles.carouselSection} aria-label="Cycladic Lodge gallery">
      <div className={styles.carouselShell}>
        <button
          type="button"
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={() => scrollByCards(-1)}
          aria-label="Previous images"
        >
          {"\u2039"}
        </button>

        <div
          ref={trackRef}
          className={styles.carouselTrack}
          onScroll={normalizeLoopPosition}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {loopedImages.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              data-carousel-card
              className={styles.carouselCard}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 33vw"
                className={styles.carouselImage}
              />
            </article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={() => scrollByCards(1)}
          aria-label="Next images"
        >
          {"\u203A"}
        </button>
      </div>
    </section>
  );
}
