"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  RulerIcon,
  User01Icon,
} from "@untitledui/icons-react/outline";
import StructuredData from "@/components/structured-data";
import styles from "@/app/page.module.css";

const rooms = [
  {
    name: "VATHY",
    size: "20 S.q.m",
    guests: "2 Adults",
    images: [
      "/rooms/room1/1.jpg",
      "/rooms/room1/2-1-scaled.jpg",
      "/rooms/room1/3-1-scaled.jpg",
      "/rooms/room1/4-1-scaled.jpg",
      "/rooms/room1/5-1-scaled.jpg",
      "/rooms/room1/6-1-scaled.jpg",
      "/rooms/room1/7-1-scaled.jpg",
      "/rooms/room1/8-1-scaled.jpg",
      "/rooms/room1/9-1-scaled.jpg",
      "/rooms/room1/10-1-scaled.jpg",
    ],
  },
  {
    name: "FYKIADA",
    size: "20 S.q.m",
    guests: "2 Adults",
    images: [
      "/rooms/room2/1-2-scaled.jpg",
      "/rooms/room2/2-2-scaled.jpg",
      "/rooms/room2/3-2-scaled.jpg",
      "/rooms/room2/4-2-scaled.jpg",
      "/rooms/room2/5-2-scaled.jpg",
      "/rooms/room2/6-2-scaled.jpg",
      "/rooms/room2/7-2-scaled.jpg",
      "/rooms/room2/8-2-scaled.jpg",
      "/rooms/room2/9-2-scaled.jpg",
      "/rooms/room2/10-2-scaled.jpg",
    ],
  },
  {
    name: "VROULIDIA",
    size: "18 S.q.m",
    guests: "2 Adults",
    images: [
      "/rooms/room3/1-3-scaled.jpg",
      "/rooms/room3/2-3-scaled.jpg",
      "/rooms/room3/3-3-scaled.jpg",
      "/rooms/room3/4-3-scaled.jpg",
      "/rooms/room3/5-3-scaled.jpg",
      "/rooms/room3/6-3-scaled.jpg",
      "/rooms/room3/7-3-scaled.jpg",
      "/rooms/room3/8-3-scaled.jpg",
      "/rooms/room3/9-3-scaled.jpg",
      "/rooms/room3/10-2-scaled.jpg",
    ],
  },
  {
    name: "FASOLOU",
    size: "16 S.q.m",
    guests: "2 Adults",
    images: [
      "/rooms/room4/1-scaled.jpg",
      "/rooms/room4/2-scaled.jpg",
      "/rooms/room4/3-scaled.jpg",
      "/rooms/room4/4-scaled.jpg",
      "/rooms/room4/5-scaled.jpg",
      "/rooms/room4/6-scaled.jpg",
      "/rooms/room4/7-scaled.jpg",
      "/rooms/room4/8-scaled.jpg",
      "/rooms/room4/9-scaled.jpg",
      "/rooms/room4/10-scaled.jpg",
    ],
  },
];

function RoomCarousel({ room }) {
  const trackRef = useRef(null);
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const isAdjustingRef = useRef(false);
  const loopedImages = [...room.images, ...room.images, ...room.images];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector("[data-room-card]");

    if (!firstCard) {
      return;
    }

    const gap = 14;
    const cardWidth = firstCard.clientWidth + gap;
    track.scrollLeft = cardWidth * room.images.length;
  }, [room.images.length]);

  function normalizeLoopPosition() {
    const track = trackRef.current;

    if (!track || isAdjustingRef.current) {
      return;
    }

    const firstCard = track.querySelector("[data-room-card]");

    if (!firstCard) {
      return;
    }

    const gap = 14;
    const cardWidth = firstCard.clientWidth + gap;
    const segmentWidth = cardWidth * room.images.length;
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

    const firstCard = track.querySelector("[data-room-card]");
    const gap = 14;
    const step = firstCard ? (firstCard.clientWidth + gap) * 2 : track.clientWidth * 0.9;

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
    track.classList.add(styles.roomCarouselDragging);
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

    track.classList.remove(styles.roomCarouselDragging);
    normalizeLoopPosition();

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <article className={styles.roomShowcase}>
      <div className={styles.roomCarouselShell}>
        <button
          type="button"
          className={`${styles.roomCarouselArrow} ${styles.roomCarouselArrowLeft}`}
          onClick={() => scrollByCards(-1)}
          aria-label={`Previous ${room.name} images`}
        >
          {"\u2039"}
        </button>

        <div
          ref={trackRef}
          className={styles.roomCarouselTrack}
          onScroll={normalizeLoopPosition}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {loopedImages.map((image, index) => (
            <article
              key={`${room.name}-${image}-${index}`}
              data-room-card
              className={styles.roomCarouselCard}
            >
              <Image
                src={image}
                alt={`${room.name} room image ${index + 1}`}
                fill
                sizes="(max-width: 820px) 90vw, 28vw"
                className={styles.roomCarouselImage}
              />
            </article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.roomCarouselArrow} ${styles.roomCarouselArrowRight}`}
          onClick={() => scrollByCards(1)}
          aria-label={`Next ${room.name} images`}
        >
          {"\u203A"}
        </button>
      </div>

      <div className={styles.roomMeta}>
        <h2 className={styles.roomTitle}>{room.name}</h2>
        <div className={styles.roomFacts}>
          <span className={styles.roomFact}>
            <RulerIcon className={styles.roomFactIcon} aria-hidden="true" />
            {room.size}
          </span>
          <span className={styles.roomFact}>
            <User01Icon className={styles.roomFactIcon} aria-hidden="true" />
            {room.guests}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function StayRoomsShowcase() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cycladic Lodge room types",
    itemListElement: rooms.map((room, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "HotelRoom",
        name: room.name,
        occupancy: {
          "@type": "QuantitativeValue",
          value: 2,
        },
        floorSize: {
          "@type": "QuantitativeValue",
          value: Number.parseInt(room.size, 10),
          unitCode: "MTK",
        },
        image: room.images[0],
      },
    })),
  };

  return (
    <section className={styles.roomsSection}>
      <StructuredData data={data} />
      {rooms.map((room) => (
        <RoomCarousel key={room.name} room={room} />
      ))}
    </section>
  );
}
