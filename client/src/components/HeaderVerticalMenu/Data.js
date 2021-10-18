const HeaderVerticalMenuData = {
  itemMenus: [
    {
      id: 1,
      name: "Computer & Laptop",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [
        {
          id: 11,
          parentId: 1,
          name: "Computer",
          childrens: [
            { name: "Computer1", url: "/" },
            { name: "Computer2", url: "/" },
            { name: "Computer3", url: "/" },
          ],
        },
        {
          id: 12,
          parentId: 1,
          name: "Laptop",
          childrens: [
            { name: "Laptop1", url: "/" },
            { name: "Laptop2", url: "/" },
            { name: "Laptop3", url: "/" },
          ],
        },
        {
          id: 13,
          parentId: 1,
          name: "PC",
          childrens: [
            { name: "PC1", url: "/" },
            { name: "PC2", url: "/" },
            { name: "PC3", url: "/" },
            { name: "PC3", url: "/" },
            { name: "PC3", url: "/" },
          ],
        },
        {
          id: 14,
          parentId: 1,
          name: "PC",
          childrens: [
            { name: "PC1", url: "/" },
            { name: "PC2", url: "/" },
            { name: "PC3", url: "/" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Mobiles & Tablets",
      url: "/",
      backgroundSubMenu: require("../../images/megamenu.png").default,
      childrens: [
        {
          id: 21,
          parentId: 2,
          name: "Mobiles",
          childrens: [
            { name: "Mobile1", url: "/" },
            { name: "Mobile2", url: "/" },
            { name: "Mobile3", url: "/" },
          ],
        },
        {
          id: 22,
          parentId: 2,
          name: "Tablets",
          childrens: [
            { name: "Tablets1", url: "/" },
            { name: "Tablets2", url: "/" },
            { name: "Tablets3", url: "/" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Accessories",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [],
    },
    {
      id: 4,
      name: "Macbooks",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [],
    },
    {
      id: 5,
      name: "Ultrabooks",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [],
    },
  ],
};

export default HeaderVerticalMenuData;
