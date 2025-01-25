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
      { name: "Book Class", href: "/classbooking/normal-class" },
      { name: "Class Schedule ", href: "/classbooking/schedule" },
    ]
  },
  {
    name: "Package & Plans",
    
    submenu: [
      { name: "Package & Plans ", href: "/package&plans/plans-package" },
    ]
  },
  {
    name: "Services",
    // href: "/services",
    submenu: [
      { name: "Yoga Classes", href: "/services/yoga-class" },
      // { name: "Pilates", href: "/pilates" },
      { name: "Kids yoga", href: "/services/kids-yoga" },
      { name: "Yoga Therapy", href: "/services/yoga-therapy" },
      { name: "Sound Healing", href: "/services/sound-healing " },
      { name: "Training course", href: "/services/training-course" },
    ],
  },
  {
    name: "About us",
    href: "/about",
    submenu: [
      { name: "Gallery", href: "/aboutus/gallery" },
      // { name: "Branch", href: "/branch" },
      // { name: "AddDataForm", href: "/addDataForm" },
    ],
  },
  {
    name: "Product",
    href: "/product",
  },
];
