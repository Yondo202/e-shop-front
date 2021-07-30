import React, { useContext } from 'react';
import { ContainerLeftMenu } from "@/components/category/LeftMenu";
import Ctx from "@/miscs/ContextMenuProvider";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const LeftMenu = () => {
    const { headerMenu } = useContext(Ctx);

    console.log(`headerMenu`, headerMenu);
    return (
        <ContainerLeftMenu>
            <div className="title">Үндсэн ангилал</div>
            <div className="CatigoryMenus">
                {headerMenu?.map((el,ind)=>{
                    return(
                        <div key={ind} className="itemParent">
                            <div className={`items`}>
                                <span className="svg"><MdKeyboardArrowRight /></span>
                                <Link href={`/p/${el.slug}`}>
                                    <a className={`Text`}>{el.name} </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ContainerLeftMenu>
    )
}

export default LeftMenu
