import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faTwitter,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";



export default function SocialFollow() {
  return (
    <div class="social-container">
<a href="https://twitter.com/PolygirlsWeird" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://t.me/polygirlsweird"
  className="telegram social">
  <FontAwesomeIcon icon={faTelegram} size="2x" />
</a>
    </div>
  );
}