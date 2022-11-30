import styled from 'styled-components';
import {dbService, authService, storageService} from "fbase"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Window = ({item}) => {
    const {id} = useParams(); // hetelOwnerId
    const [info, setInfo] = useState([]);

    useEffect(() => {
        initWindowInfo();
    }, [info]);
    
    useEffect(() => {
        initWindowInfo();
    }, []);

    const initWindowInfo = () => {
        dbService.collection("hotelOwner").doc(id).get()
        .then((doc) => {
            setInfo(doc.data().windowInfo);
        });
      }


    return (
        info[item] ? 
        <svg width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.7979 14.161L44.5 11.1959L44.5 32.234V53.3396L38.7979 50.9135L38.7979 14.161Z" fill="white" stroke="black"/>
            <path d="M6.20213 51.1046L0.5 54.0698V33.0316V11.926L6.20213 14.3521V51.1046Z" fill="white" stroke="black"/>
            <path d="M37.9575 14.2987C37.9575 15.0851 37.8496 15.6199 37.6811 15.9768C37.5212 16.3156 37.3029 16.5047 37.0249 16.611C36.7269 16.7249 36.3237 16.757 35.788 16.6969C35.2557 16.6372 34.6339 16.4917 33.9208 16.2884C33.3396 16.1226 32.7035 15.9193 32.0204 15.7009C29.3934 14.861 26.0708 13.7987 22.5001 13.7987C18.9294 13.7987 15.6067 14.861 12.9797 15.7009C12.2966 15.9193 11.6605 16.1226 11.0793 16.2884C10.3662 16.4917 9.74439 16.6372 9.21215 16.6969C8.67636 16.757 8.27317 16.7249 7.97522 16.611C7.6972 16.5047 7.47891 16.3156 7.31896 15.9768C7.15051 15.6199 7.0426 15.0851 7.0426 14.2987C7.0426 11.1981 8.7227 8.35231 11.5158 6.26439C14.309 4.17641 18.1909 2.87012 22.5001 2.87012C26.8092 2.87012 30.6911 4.17641 33.4843 6.26439C36.2774 8.35231 37.9575 11.1981 37.9575 14.2987Z" fill="white" stroke="black"/>
            <path d="M35.4296 16.9802C35.4296 18.6077 35.0519 19.1305 34.6726 19.3037C34.4554 19.403 34.1494 19.4368 33.716 19.3787C33.2848 19.3209 32.7749 19.1791 32.1806 18.9765C31.7022 18.8135 31.1758 18.6123 30.6084 18.3955C28.41 17.5553 25.5968 16.4802 22.5791 16.4802C19.5613 16.4802 16.7481 17.5553 14.5497 18.3955C13.9823 18.6123 13.4559 18.8135 12.9775 18.9765C12.3832 19.1791 11.8733 19.3209 11.4422 19.3787C11.0087 19.4368 10.7027 19.403 10.4855 19.3037C10.1062 19.1305 9.72852 18.6077 9.72852 16.9802C9.72852 10.7222 15.4273 5.55566 22.5791 5.55566C29.7308 5.55566 35.4296 10.7222 35.4296 16.9802Z" fill="white" stroke="black"/>
            <rect x="7.0426" y="14.4033" width="30.9149" height="36.2867" fill="white" stroke="black"/>
            <rect x="9.57056" y="17.2471" width="25.8591" height="30.5989" fill="white" stroke="black"/>
            <path d="M21.5063 9.29566L20.0854 0.5H24.9337L23.8054 9.29566H21.5063Z" fill="white" stroke="black"/>
            <rect x="15.8823" y="29.4756" width="13.2353" height="7.84002" fill="#E6B38E"/>
            <path d="M22.5 34.3643L16.0048 29.5911H28.9952L22.5 34.3643Z" fill="#DF6F6F"/>
            <rect width="45" height="53.0526" fill="#FFF9C4" fill-opacity="0.25"/>
        </svg>
        :        
        <svg width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.2838 15.2838C38.2838 16.1274 38.1692 16.7054 37.9876 17.0939C37.8144 17.4644 37.5771 17.672 37.2762 17.7882C36.9554 17.9121 36.5241 17.946 35.9552 17.8816C35.3897 17.8176 34.73 17.6616 33.9746 17.4441C33.3582 17.2666 32.6841 17.0489 31.9603 16.8153C29.1796 15.9176 25.6674 14.7838 21.8919 14.7838C18.1164 14.7838 14.6042 15.9176 11.8234 16.8153C11.0997 17.0489 10.4255 17.2666 9.80916 17.4441C9.05378 17.6616 8.39404 17.8176 7.82859 17.8816C7.25965 17.946 6.82837 17.9121 6.50757 17.7882C6.20672 17.672 5.96934 17.4644 5.79614 17.0939C5.61455 16.7054 5.5 16.1274 5.5 15.2838C5.5 11.9541 7.28678 8.90264 10.2488 6.66684C13.211 4.43084 17.3258 3.0332 21.8919 3.0332C26.458 3.0332 30.5728 4.43084 33.535 6.66684C36.497 8.90264 38.2838 11.9541 38.2838 15.2838Z" fill="white" stroke="black"/>
            <path d="M35.6079 18.1505C35.6079 19.8935 35.2073 20.4728 34.7878 20.6663C34.5516 20.7753 34.2224 20.811 33.7614 20.7486C33.3026 20.6865 32.761 20.5342 32.1313 20.3176C31.6236 20.1429 31.0653 19.9274 30.464 19.6954C28.137 18.7974 25.1649 17.6505 21.9756 17.6505C18.7863 17.6505 15.8141 18.7974 13.4871 19.6954C12.8858 19.9274 12.3276 20.1429 11.8198 20.3176C11.1902 20.5342 10.6486 20.6865 10.1898 20.7486C9.72874 20.811 9.39953 20.7753 9.16334 20.6663C8.74392 20.4728 8.34326 19.8935 8.34326 18.1505C8.34326 11.4344 14.3969 5.9043 21.9756 5.9043C29.5543 5.9043 35.6079 11.4344 35.6079 18.1505Z" fill="white" stroke="black"/>
            <rect x="5.5" y="15.3618" width="32.7838" height="38.8562" fill="white" stroke="black"/>
            <rect x="8.17578" y="18.4014" width="27.4319" height="32.7764" fill="white" stroke="black"/>
            <line x1="26.3667" y1="33.8247" x2="35.9409" y2="33.8247" stroke="black"/>
            <line x1="21.4331" y1="29.7241" x2="21.4331" y2="17.9014" stroke="black"/>
            <line x1="21.5591" y1="51.5093" x2="21.5591" y2="38.8431" stroke="black"/>
            <line x1="7.67578" y1="33.9521" x2="17.3761" y2="33.9521" stroke="black"/>
            <rect x="0.703657" width="5.72265" height="5.72265" transform="matrix(0.703657 -0.710539 0.703657 0.710539 17.4175 34.831)" fill="white" stroke="black"/>
            <path d="M20.8158 9.9707L19.3007 0.5H24.5022L23.299 9.9707H20.8158Z" fill="white" stroke="black"/>
            <rect x="5" y="0.47168" width="34" height="54.5281" fill="black" fill-opacity="0.3"/>
        </svg>
    )
}

export default Window;

const WriterNickname = styled.p `
    margin-bottom: 10px;
    font-size: 12px;
    color: #6E6E6E;
`