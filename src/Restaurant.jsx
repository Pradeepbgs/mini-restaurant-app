import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from './Menuapi.js'
import Navbar from './Navbar'

const Restaurant = () => {

  const categList = [...new Set(Menu.map((currElm) => {
    return currElm.category;
  })),
  "All",
]

  const [menuData, setMenuData] = useState(Menu);
  const [categoryList, setCategoryList] = useState(categList);

  const filterItem = (Category) =>{
    if(Category === "All"){
      setMenuData(Menu);
      return;
    }
      const newList = Menu.filter((curElem) =>{
        return curElem.category === Category
      })

      setMenuData(newList)
  }

  function menudata(){
    setMenuData(Menu)
  }

  return (
    <>
   <Navbar filterItem={filterItem}  categoryList={categoryList}/>
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
