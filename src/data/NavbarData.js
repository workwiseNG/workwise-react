const chevronDownArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1rem"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
const chevronUpArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1rem"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

export const SidebarData = [
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
    iconClosed: chevronDownArrow,
    iconOpened: chevronUpArrow,
    subNav: [
      {
        title: "Workwise",
        path: "/workwise",
      },
      {
        title: "Visitor Management",
        path: "/visitor-management",
      },
      {
        title: "Meeting Rooms",
        path: "/meeting-room",
      },
      {
        title: "Employee clock-in",
        path: "/employee-clock-in",
      },
    ],
  },
  {
    title: "Hardware",
    path: "/hardware",
    cName: "nav-text",
  },
  {
    title: "Learn",
    path: "/learn",
    cName: "nav-text",
  },
  {
    title: "Pricing",
    path: "/pricing",
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactus",
    cName: "nav-text",
  },
  {
    title: "Log In",
    path: "/login",
    cName: "nav-text",
  },
  {
    title: "Try for free",
    path: "/tryforfree",
    cName: "nav-text",
  },
];
