import { dbService } from "fbase";

import styled from 'styled-components';
import { RedButton, WhiteButton } from './styles/buttonstyle';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

const AdminConfig = ({userObj}) => {

    const {id} = useParams(); // hetelOwnerId

    const [goalCount, setGoalCount] = useState(userObj.displayName);
    const [windowCount, setWindowCount] = useState(2);
    const [windowInfoIndex, setWindowInfoIndex] = useState(0);
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        if (userObj.uid == "sksKvNWFPBe5ZmJtNCdbGUh5jYk1") {
            setIsAdmin(true);
        }

        /*dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setDescription(doc.data().description === "" ? "" : doc.data().description)
        });*/

    }, []);

    const onChangeWindowInfoIndex = (event) => {
        const {
          target: { value },
        } = event;
        setWindowInfoIndex(value);
    };
    const onChangeWindowCount = (event) => {
        const {
          target: { value },
        } = event;
        setWindowCount(value);
    };
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setGoalCount(value);
    };


    const onSubmitWindowInfo = async (event) => {
        event.preventDefault();

        // dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
        //     setWindowInfo(doc.data().windowInfo);
        // });

        await dbService.collection("hotelOwner").doc(id).update({
            [`windowInfo.${windowInfoIndex}`] : true,
           //  windowCount : i,
        });

        alert(`info index ${windowInfoIndex}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    // 창문을 닫아 버리자!
    const onSubmitWindowClose = async (event) => {
        event.preventDefault();

        await dbService.collection("hotelOwner").doc(id).update({
            [`windowInfo.${windowInfoIndex}`] : false,
           //  windowCount : i,
        });

        alert(`info index ${windowInfoIndex}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    
    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.collection("AdminConfig").doc("AdminConfig").update({
            goalCount: goalCount,
        });

        alert(`오늘의 편지 갯수 ${goalCount}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    const onSubmitWindowCount = async (event) => {
        event.preventDefault();

        await dbService.collection("hotelOwner").doc(id).update({
            windowCount : windowCount,
        });

        alert(`오늘의 편지 갯수 ${windowCount}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    const toHome = () => {
        history.push("/");
    }
    

  return (
        isAdmin ?
        (
            <>
                <Container>

                    <div style={{marginTop: "141px", fontSize: '30px', fontWeight: "bold"}}>관리자페이지</div>
                    <br/>
                    
                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>창문 열기</div>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowInfoIndex}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowInfo}>
                        <RedButton>창문 열기</RedButton>
                    </form>

                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>창문 닫기</div>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowInfoIndex}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowClose}>
                        <RedButton>창문 닫기</RedButton>
                        
                    </form>
                    <div style={{
                    height: "29px",
                    fontSize: "20px",  
                    fontWeight: "500px",

                    }}>오늘의 편지 최대 갯수</div>
                    <HotelGuide>사용자가 받을 수 있는 최대 편지 수</HotelGuide>

                    <NicknameInput>
                        <InputStylenick type="text" placeholder='숫자 입력' onChange={onChange}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmit}>
                        <RedButton>편지 갯수 변경</RedButton>
                    </form>
                    <br/>
                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>X일차 창문 컨트롤</div>
                    <HotelGuide>사용자가 오류로 인해, 날짜가 하루 지나도 다음 창문으로 카운팅 되지않을때 사용</HotelGuide>
                    <HotelGuide>사용법: url에 AdventCalendar#/adminConfig/(ID) 를 삽입</HotelGuide>
                    <HotelGuide>예시: 1일차에 10개를 쌓았으나, 2일차에도 10개에 계속 이어간다면, 숫자를 2를 주면 2번째 창문으로 넘어감.</HotelGuide>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowCount}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowCount}>
                        <RedButton>창문 일자 변경</RedButton>
                    </form>

                    <br/>
                    <WhiteButton onClick={ () => {
                        history.push("/");
                    } } >시작화면</WhiteButton>
                </Container>
            </>
        )
        :
        (
            <>
                <Container>
                    <HotelGuide style={{marginTop:'250px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        저희 서비스를 사용해주셔서 감사합니다.
                    </HotelGuide>
                    <HotelGuide style={{marginTop:'30px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        아쉽게 이 주소는 회원님이 접근할 수 없는 주소입니다.
                    </HotelGuide>
                    <HotelGuide style={{marginTop:'30px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        아직 호텔이 없으시다면 호텔을 만들어서 서비스를 이용해보세요!
                    </HotelGuide>
                    <RedButton style={{marginTop:'70px'}} onClick={toHome}>호텔 만들러가기</RedButton>
                </Container>
            </>
        )
  )
}

export default AdminConfig

const Container = styled.div`
    margin: 0 auto;
    align-items: center;
    text-align: center;
`
const NicknameInput = styled.form`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-items: center;

    margin-top: 22.84px;
    margin-bottom: 20px;
`
const TxtAreaDesc = styled.textarea`
    width: 230px;
    min-height: 93px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    font-family: none;
    resize: none;
    white-space: pre-wrap;
    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const InputStylenick = styled.input`
    width: 115px;
    height: 25px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`