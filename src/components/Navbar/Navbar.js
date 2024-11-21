export const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      // name: "Book Class",
      // href: "/normalclass",
      
      name: "Class Booking",
      // href: "/normalclass",
      submenu: [
        { name: "Book Class", href: "/normalclass" },
        { name: "Package & Plans ", href: "/plansandpackage" },
        { name: "Class Schedule ", href: "/schedule" },
      ]
    },
    {
      name: "Package & Plans",
      
      submenu: [
        { name: "Package & Plans ", href: "/plansandpackage" },
      ]
    },
    {
      name: "Services",
      // href: "/services",
      submenu: [
        { name: "Yoga Classes", href: "/yogaclass" },
        // { name: "Pilates", href: "/pilates" },
        { name: "Kids yoga", href: "/kidsyoga" },
        { name: "Yoga Therapy", href: "/yogatherapy" },
        { name: "Sound Healing", href: "/soundhealing " },
        { name: "Training course", href: "/trainingcourse" },
      ],
    },
    {
      name: "About us",
      href: "/about",
      submenu: [
        { name: "Gallery", href: "/gallery" },
        // { name: "Branch", href: "/branch" },
        // { name: "AddDataForm", href: "/addDataForm" },
      ],
    },
    {
      name: "Product",
      href: "/product",
    },
  ];
  