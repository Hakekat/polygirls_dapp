import React from "react";
import styled from "styled-components";


export const StyledIcon = styled.img`
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--accent);
  width: 32px;
  height:  32px;
  transition: width 0.5s;
`;


const Footer = () => (
  <div className="footer">
    <p style={{
              fontSize: "22px",
              textAlign: "center",
              fontWeight: "bold",
            }}>Upcoming Event Giveaway NFT For More Info Follow Our Social Media</p>


            
  </div>
);

export default Footer;