// MenuItems.js
export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    //icon: "fa-solid fa-house-user"
  },
  {
    title: "Service  ",
    url: "/",
    cName: "nav-links",
    dropdown: [
      {
        title: "Ar",
        url: "/service1",
        cName: "dropdown-links"
      },
      {
        title: "Service 2",
        url: "/service2",
        cName: "dropdown-links"
      }

    ]
  },
  {
    title: "Clients",
    url: "/",
    cName: "nav-links",
    //icon: "fa-solid fa-briefcase"
  },
  {
    title: "Career",
    url: "/",
    cName: "nav-links",
    //icon: "fa-solid fa-circle-info"
  },
  {
    title: "About ",
    // url: "/",
    cName: "nav-links",
    dropdown: [
      {
        title: "Service 1",
        url: "/service1",
        cName: "dropdown-link"
      },
      {
        title: "Service 2",
        url: "/service2",
        cName: "dropdown-link"
      }

    ]
    //icon: "fa-solid fa-circle-info"
  },
  {
    title: "Contact",
    url: "/",
    cName: "nav-links",
    //icon: "fa-solid fa-address-book"
  }
];
