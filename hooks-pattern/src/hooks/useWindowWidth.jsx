import React from "react";

function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.addEventListener("resize", handleResize);
    })

    return width;
}

export default useWindowWidth;