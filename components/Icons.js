function base(props) {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

export function IconHome(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9.5v-5.5h5V20h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function IconBed(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18v2M21 18v2" />
      <path d="M3 13h18" />
      <circle cx="7.5" cy="9.5" r="1.5" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 6" />
      <path d="M15 13.2a5.5 5.5 0 0 1 5.5 5.8" />
    </svg>
  );
}

export function IconMessage(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4V16H6.5A2.5 2.5 0 0 1 4 13.5Z" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function IconPhoto(props) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M4 17l5-5 4 4 3-3 4 4" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 4.5h3.2l1.3 4-2 1.4a11 11 0 0 0 4.6 4.6l1.4-2 4 1.3V17a2 2 0 0 1-2 2.1C10 18.5 5.5 14 4.9 8.5A2 2 0 0 1 5 4.5Z" />
    </svg>
  );
}

export function IconMapPin(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconArrowLeft(props) {
  return (
    <svg {...base(props)}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
