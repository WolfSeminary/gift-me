import Gift from "./Gift";
import { useNavigate } from "react-router-dom";

 const Gifts = () => {
     let id=1;
    const navigate = useNavigate();
    const onGiftClick = () => {
        navigate(`gift/${id}`);
    }
    return (
        <>
            <div onClick={onGiftClick}>
                <Gift />
            </div>
        </>
    )
}
export default Gifts;