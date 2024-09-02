import '../components/MinoInfo.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from '../components/Pages/SideBar'
import Dashboard from '../components/Pages/Dashboard.js'
import About from '../components/Pages/About.js'
import Comment from '../components/Pages/Comment.js'
import Analytics from '../components/Pages/Analytics.js'
import Products from '../components/Pages/Products.js'
import ProductList from '../components/Pages/ProductList.js'


const MinoInfo = () => {
    return (
    <>
    <BrowserRouter>
    <SideBar>
    <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/comment"element={<Comment/>}/>
        <Route path="/analytics"element={<Analytics/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/ProductList"element={<ProductList/>}/>
    </Routes>
    </SideBar>
    </BrowserRouter>
    </>
    );
}

export default MinoInfo;