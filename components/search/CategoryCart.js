import React, { useEffect, useState } from 'react'
import { ContainerCards } from "@/components/category/CatigoryCards"
import InitialCard from "@/components/Cards/InitialCard"
import { SkeletonCard } from "@/miscs/CustomComp"

const CategoryCart = ({ data }) => {
    const [ load, setLoad ] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setLoad(true);
        }, 400)
    },[data])
    return (
        <ContainerCards>
            <div className="title">Хайлт <span className="total">{data.length} бүтээгдэхүүн</span></div>
            <div className="row">
                {load!==false || data.length!==0?data.map((el,ind)=>{
                    return(
                        <div key={ind} className="col-md-3 col-sm-6 col-6">
                            <InitialCard  center={false} data={el} catigory={true} />
                        </div>
                    )
                }):(
                    <>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                    </>
                )}
            </div>
        </ContainerCards>
    )
}

export default CategoryCart
