const HeaderHorizontalMenuData = {
  itemMenus: [
    {
      title: "Home",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [],
    },
    {
      title: "Shop",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [
        {
          id: 1,
          category: "Mobiles",
          items: [
            { name: "Mobile1", url: "/" },
            { name: "Mobile2", url: "/" },
            { name: "Mobile3", url: "/" },
          ],
        },
        {
          id: 2,
          category: "Gear",
          items: [
            { name: "Gear1", url: "/" },
            { name: "Gear2", url: "/" },
            { name: "Gear3", url: "/" },
          ],
        },
        {
          id: 3,
          category: "HeadPhone",
          items: [
            { name: "HeadPhone1", url: "/" },
            { name: "HeadPhone2", url: "/" },
            { name: "HeadPhone3", url: "/" },
          ],
        },
        {
          id: 4,
          category: "SnmartPhones",
          items: [
            { name: "SnmartPhones1", url: "/" },
            { name: "SnmartPhones2", url: "/" },
            { name: "SnmartPhones3", url: "/" },
          ],
        },
      ],
    },
    {
      title: "Mobiles & Tablets",
      url: "/",
      backgroundSubMenu: require("../../images/vertical-2.jpg").default,
      childrens: [
        {
          id: 1,
          category: "Mobiles",
          items: [
            { name: "Mobile1", url: "/" },
            { name: "Mobile2", url: "/" },
            { name: "Mobile3", url: "/" },
          ],
        },
        {
          id: 2,
          category: "Tablets",
          items: [
            { name: "Tablets1", url: "/" },
            { name: "Tablets2", url: "/" },
            { name: "Tablets3", url: "/" },
          ],
        },
      ],
    },
  ],
};

export default HeaderHorizontalMenuData;
