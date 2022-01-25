import { useNavigate } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import BuyGift from './BuyGift'

const Button = () => {
    const navigate = useNavigate();

    const f = () => {
        navigate(`buygift`)
    }
    return <>

        <button onClick={f}>קניה </button>
        <Routes>
            <Route path="buygift" element={<BuyGift />} />
        </Routes>
    </>
}
export default Button