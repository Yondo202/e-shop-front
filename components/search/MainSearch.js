import React from 'react'
import Link from "next/link"
import { ContainerHome } from "@/components/category/CategoryHome"
import LeftMenu from "@/components/search/LeftMenu"
import CategoryCart from "@/components/search/CategoryCart"

const MainSearch = ({ data }) => {
    return (
        <ContainerHome className="container-xxl">
            <div className="smMenus">
                <Link href="/"><a className="items">Нүүр</a></Link> 
                {/* <Link href={`/p/${menuData?.slug}`}><a className="items">{menuData?.name}</a></Link>
                <Link href={`/p/${menuData?.slug}/${menuMiddle?.slug}`}><a className={`items ${menuMiddle?.name?``:`nulls`}`}>{menuMiddle?.name}</a></Link>
                <Link href={`/p/${menuData?.slug}/${menuMiddle?.slug}/${menuSm?.slug}`}>
                    <a className={`items ${menuSm?.name?``:`nulls`}`}>{menuSm?.name}</a>
                </Link> */}
            </div>

            <div style={{marginBottom:50}} className="row">
                <div className="col-md-3 col-12"><LeftMenu /></div>
                <div className="col-md-9 col-12">
                    <CategoryCart data={data} />
                </div>
            </div>
        </ContainerHome>
    )
}

export default MainSearch;
