import React from "react";
import Images from "../Image/Images";

function HomeBanner({number}) {
    return (
        <div className="cm-width">
            {number === 4 && 
                    <>
                    <div className="home-banner--top">
                        <a href="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="top-1" />
                        </a>
                        <a href="/home"> 
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="222" />
                        </a>
                        <a href="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="333" />
                        </a>
                        <a href="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="4" />
                        </a>
                    </div>
                        
                    </>
                }
            {number !== 4 && 
                <>
                <div className="home-banner">
                    <a href="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="23" />
                    </a>
                    <a href="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="123" />
                    </a>
                    <a href="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="123" />
                    </a>
                </div>
                </>
            }
        </div>
    )
}
export default HomeBanner