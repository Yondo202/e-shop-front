import React from "react";
import Root from "@/core/Root";
import CategoryHome from "@/components/category/CategoryHome";

const Index =_=> {
    return (
        <Root>
            {/* {loaded && <ResolveComponent data={Layout}/>} */}
            <CategoryHome />
        </Root>
    );
};

export default Index;