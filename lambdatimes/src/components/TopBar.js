import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const StyledTopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const StyledTopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const SpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const StyledTopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const SpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
`

const StyledTopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const SpanRight = styled.span`
  cursor: pointer;
`



const TopBar = () => {
  return (
    // <div className="top-bar">
    //   <div className="container">
    //     <div className="container-left">
    //       <span>TOPICS</span><span>SEARCH</span>
    //     </div>
    //     <div className="container-center">
    //       <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
    //     </div>
    //     <div className="container-right">
    //       <span>LOG IN</span>
    //     </div>
    //   </div>
    // </div>

    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContainerLeft>
          <SpanLeft>TOPICS</SpanLeft><SpanLeft>SEARCH</SpanLeft>
        </StyledTopBarContainerLeft>
        <StyledTopBarContainerCenter>
          <SpanCenter>GENERAL</SpanCenter><SpanCenter>BROWNBAG</SpanCenter><SpanCenter>RANDOM</SpanCenter><SpanCenter>MUSIC</SpanCenter><SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </StyledTopBarContainerCenter>
        <StyledTopBarContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </StyledTopBarContainerRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;