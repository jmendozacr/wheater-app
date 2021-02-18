import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeView = ({ children }) => {
    const myRefDiv = useRef(null);
    console.log("my ref", myRefDiv.current);
    const [vanta, setVanta] = useState(0);

    useEffect(() => {
        console.log("my ref (useEffect)", myRefDiv.current);

        if(!vanta) {
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }));

            console.log("different to 0");
        }

        return () => {
            if(vanta) {
                vanta.destroy();
            }
        }
    }, [vanta]);

    return (
        <div ref={myRefDiv}>
            WelcomeView
        </div>
    );
}

WelcomeView.propTypes = {
    children: PropTypes.node,
}

export default WelcomeView;
