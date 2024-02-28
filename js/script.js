import { cardProduct } from "../components/cardProduct.js"
import { getData } from "../store/fetchAPI.js"
import { cardUser } from "../components/cardUser.js"


const products = await getData("products")
const users = await getData("users")
const RENDER_PRODUCT = document.querySelector('#product-section')
const RENDER_USER = document.querySelector('#user-section')
products.map((pro)=>{
        RENDER_PRODUCT.innerHTML+=cardProduct(pro);
});
users.map((user)=>{
        RENDER_USER.innerHTML+=cardUser(user);
})


