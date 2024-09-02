import React from 'react';
import {
    FaTh,
    FaThList,
    FaRegChartBar,
    FaCommentAlt,
    FaUserAlt,
    FaShoppingBag,


} from "react-icons/fa";

const SideBar = () => {
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },

        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },

        {
            path:"/analytics",
            name:"Analytics",
            icon: <FaRegChartBar/>
        },

        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },

        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },

        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },

        {
            path:"/productList",
            name:"ProductList",
            icon:<FaThList/>
        },
    ]
    return (
        <div>
            <h1> side bar page</h1>
        </div>
    );
};

export default SideBar;